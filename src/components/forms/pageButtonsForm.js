'use client';
import SectionBox from "@/components/layout/sectionBox";
import SubmitButton from "@/components/buttons/submitButton";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGripLines, faMobile, faPlus, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faFacebook, faGithub, faInstagram, faTelegram, faTiktok, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { savePageButtons } from "@/actions/pageActions";
import { ReactSortable } from "react-sortablejs";
import { useRouter } from 'next/navigation';

export const allButtons = [
  {key: 'email', label: 'E-mail', icon: faEnvelope, placeholder: "username@mail.com"},
  {key: 'phone', label: 'Телефон', icon: faMobile, placeholder: "+389 70 123 456"},
  {key: 'instagram', label: 'Instagram', icon: faInstagram, placeholder: "https://instagram.com/username"},
  {key: 'facebook', label: 'Facebook', icon: faFacebook, placeholder: "https://facebook.com/profile/username"},
  {key: 'discord', label: 'Discord', icon: faDiscord, placeholder: "https://discord.com/users/username"},
  {key: 'tiktok', label: 'TikTok', icon: faTiktok, placeholder: "https://tiktok.com/@username"},
  {key: 'youtube', label: 'Youtube', icon: faYoutube, placeholder: "https://youtube.com/@username"},
  {key: 'whatsapp', label: 'WhatsApp', icon: faWhatsapp, placeholder: "https://wa.me/38970123456"},
  {key: 'github', label: 'GtiHub', icon: faGithub, placeholder: "https://github.com/username"},
  {key: 'telegram', label: 'Telegram', icon: faTelegram, placeholder: "https://t.me/username"},
];

export default function PageButtonsForm({user, page}) {
  const router = useRouter();
  const pageSavedButtonsKeys = Object.keys(page?.buttons || {});
  const pageSavedButtonsInfo = pageSavedButtonsKeys
  .map(k => allButtons.find(b => b.key === k));
  const [activeButtons, setActiveButtons] = useState(pageSavedButtonsInfo);

  function addButtonToProfile(button) {
    setActiveButtons(prevButtons => {
      return [...prevButtons, button];
    });
  }

  async function saveButtons(formData) {
    
    await savePageButtons(formData);
    toast.success('Зачувано!');
    router.refresh();
  }

  function removeButton({key:keyToRemove}) {
    setActiveButtons(prevButtons => {
      return prevButtons.filter(button => button.key !== keyToRemove);
    });
  }

  const availableButtons = allButtons.filter(b1 => !activeButtons.find(b2 => b1.key === b2.key));

  return (
    <SectionBox>
      <form action={saveButtons}>
        <h2 className="text-2xl font-bold mb-4">Комуникација и социјални мрежи</h2>
        <ReactSortable handle=".handle" list={activeButtons} setList={setActiveButtons}>
          {activeButtons.map(b => (
            <div key={b.key} className="mb-4 flex items-center md:flex-nowrap flex-wrap">
              <div className="w-36 flex p-2 gap-2 items-center">
                <FontAwesomeIcon icon={faGripLines} className="handle py-1 cursor-grab text-gray-500 hover:text-blue-400" />
                <FontAwesomeIcon icon={b.icon} />
                <span>{b.label}</span>
              </div>
              <div className="flex grow h-full">
                <input 
                  type="text" name={b.key} defaultValue={page?.buttons?.[b.key] || ''}
                  placeholder={b.placeholder} style={{marginBottom: '0'}} />
                <button 
                  type="button" onClick={() => removeButton(b)}
                  className="p-2 px-4 bg-gray-200 cursor-pointer text-red-500 hover:text-red-700">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </ReactSortable>
        <div className="flex flex-row flex-wrap gap-2">
          {availableButtons.map(b => (
            <button 
              key={b.key}
              type="button"
              onClick={() => addButtonToProfile(b)}
              className="flex items-center gap-2 p-2 bg-gray-200 hover:text-blue-600">
              <FontAwesomeIcon icon={b.icon} />
              <span>{b.label}</span>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          ))}
        </div>
        <div className="max-w-[200px] mx-auto mt-4">
          <SubmitButton>
            <FontAwesomeIcon icon={faSave} />
            <span>Зачувај</span>
          </SubmitButton>
        </div>
      </form>
    </SectionBox>
  );
}