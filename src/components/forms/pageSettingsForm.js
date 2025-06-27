'use client';
import RadioTogglers from "@/components/formItems/radioTogglers";
import Image from "next/image";
import SubmitButton from "@/components/buttons/submitButton";
import SectionBox from "@/components/layout/sectionBox";
import { faBrush, faCloudArrowUp, faArrowRight, faSave } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { page } from "@/models/page";
import { savePageSettings } from "@/actions/pageActions";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { upload } from "@/libs/upload";
import { useRouter } from 'next/navigation';

export default function PageSettingsForm({page, user}) {
  const router = useRouter();
  const [bgType, setBgType] = useState(page.bgType);
  const [bgColor, setBgColor] = useState(page.bgColor);
  const [bgImage, setBgImage] = useState(page.bgImage);
  const [avatar, setAvatar] = useState(user?.image);

  async function saveBaseSettings(formData) {
    const result = await savePageSettings(formData);
    if (result) {
      toast.success('Зачувано!');
      router.refresh();
    }
  }

  async function handleCoverImageChange(ev){
    await upload(ev, link => {
      setBgImage(link);
    });
  }

  async function handleAvatarImageChange(ev){
    await upload(ev, link => {
      setAvatar(link);
    });
  }

  return (
    <div>
      <SectionBox>
        <form action={saveBaseSettings}>
          <div 
            className="-m-4 bg-gray-300 min-h-[300px] flex items-center justify-center bg-cover bg-center"
            style={
              bgType === 'color'
                ? {backgroundColor: bgColor}
                : {backgroundImage: `url(${bgImage})`}
            }>
            <div className="flex flex-col items-center m-2">
              <RadioTogglers 
                defaultValue={page.bgType}
                options={[
                  {value: 'color', icon: faBrush, label: 'Боја'},
                  {value: 'image', icon: faImage, label: 'Фотографија'}
                ]}
                onChange={val => setBgType(val)}
              />
              {bgType === 'color' && (
                <div className="bg-gray-100 shadow text-gray-700 p-2 mt-2">
                  <div className="flex gap-2 justify-center hover:text-blue-600">
                    <span>Одбери боја за позадината</span>
                    <FontAwesomeIcon icon={faArrowRight} className="self-center" />
                    <input 
                      type="color" name="bgColor" 
                      onChange={ev => setBgColor(ev.target.value)}
                      defaultValue={page.bgColor} className="cursor-pointer" />
                  </div>
                </div>
              )}
              {bgType === 'image' && (
                <div className="flex justify-center">
                  <label className="bg-white shadow px-4 py-2 mt-2 flex gap-2 items-center cursor-pointer hover:text-blue-600">
                    <input type="hidden" name="bgImage" value={bgImage} />
                    <input
                      type="file" onChange={handleCoverImageChange}
                      className="hidden" />
                    <FontAwesomeIcon icon={faCloudArrowUp} />
                    <span>Промени фотографија</span>
                  </label>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center -mb-10">
            <div className="relative -top-8">
              <Image 
                className="rounded-full border-4 border-white shadow shadow-black/50 aspect-square object-cover"
                src={avatar} alt={'avatar'} width={128} height={128} />
              <label 
                htmlFor="avatarIn" 
                className="cursor-pointer absolute -bottom-0 -right-2 bg-white p-2 rounded-full shadow shadow-black/50 aspect-square flex items-center justify-center hover:text-blue-600">
                <FontAwesomeIcon size="lg" icon={faCloudArrowUp} />
              </label>
              <input 
                onChange={handleAvatarImageChange} 
                id="avatarIn" type="file" className="hidden" />
              <input type="hidden" name="avatar" value={avatar} />
            </div>
          </div>
          <div>
            <label className="input-label" htmlFor="nameIn">Име и презиме</label>
            <input 
              type="text" id="nameIn" name="displayName"
              defaultValue={page.displayName} placeholder="Трајко Трајковски" />
            <label className="input-label" htmlFor="companyIn">Име и презиме</label>
            <input 
              type="text" id="companyIn" name="company"
              defaultValue={page.company} placeholder="Каде работиш?" />
            <label className="input-label" htmlFor="positionIn">Позиција</label>
            <input 
              type="text" id="positionIn" name="position"
              defaultValue={page.position} placeholder="На која позиција работиш? пр. Сметководител, финансии..." />
            <label className="input-label" htmlFor="locationIn">Локација</label>
            <input 
              type="text" id="locationIn" name="location"
              defaultValue={page.location} placeholder="Од каде си? / Каде живееш?" />
            <label className="input-label" htmlFor="bioIn">Кратка биографија</label>
            <textarea 
              name="bio" id="bioIn"
              defaultValue={page.bio} placeholder="Накратко опиши се себеси." />
            <div className="max-w-[200px] mx-auto mt-4">
              <SubmitButton> 
                <FontAwesomeIcon icon={faSave} />
                <span>Зачувај</span>
              </SubmitButton>
            </div>
          </div>
        </form>
      </SectionBox>
    </div>
  );
}