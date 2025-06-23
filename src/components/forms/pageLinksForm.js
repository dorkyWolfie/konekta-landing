'use client';
import Image from "next/image";
import SectionBox from "../layout/sectionBox";
import SubmitButton from "../buttons/submitButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp, faGripLines, faLink, faPlus, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { upload } from "@/libs/upload";
import { toast } from "react-hot-toast";
import { savePageLinks } from "@/actions/pageActions";

export default function PageLinksForm({page,user}) {
  const [links, setLinks] = useState(page.links || []);

  async function save() {
    await savePageLinks(links);
    toast.success('Зачувано!');
  }

  function addNewLink() {
    setLinks(prev => {
      return [...prev, {
        key: Date.now().toString(),
        title: '', 
        subtitle: '', 
        icon: '', 
        url: ''
      }];
    });
  }

  function handleUpload(ev, linkKeyForUpload) {
    upload(ev, uploadedImageUrl => {
      setLinks(prevLinks => {
        const newLinks = [...prevLinks];
        newLinks.forEach((link,index) => {
          if (link.key === linkKeyForUpload) {
            link.icon = uploadedImageUrl;
          }
        });
        return newLinks;
      });
    });
  }

  function handleLinkChange(keyOfLinkToChange, prop, ev) {
  setLinks(prev => {
    const newLinks = [...prev];
    newLinks.forEach((link) => {
          if (link.key === keyOfLinkToChange) {
            link[prop] = ev.target.value;
          }
        });
    return [...prev];
  })
}

function removeLink(linkKeyToRemove) {
  setLinks(prevLinks =>
    [...prevLinks].filter(l => l.key !== linkKeyToRemove)
  );
  toast.success('Линкот е избришан!');
}

  return (
    <SectionBox>
      <form action={save}>
        <h2 className="text-2xl font-bold mb-4">Линкови</h2>
        <button 
          onClick={addNewLink} type="button" 
          className="text-blue-500 text-lg flex gap-2 items-center cursor-pointer">
          <FontAwesomeIcon icon={faPlus} />
          <span>Внеси нов линк</span>
        </button>
        <div>
          <ReactSortable handle=".handle" list={links} setList={setLinks}>
            {links.map(l => (
              <div key={l.key} className="mt-8 flex gap-2 items-center sm:flex-nowrap flex-wrap justify-center">
                <div className="mt-8 flex gap-2 items-center">
                  <div className="handle py-2 cursor-grab">
                    <FontAwesomeIcon icon={faGripLines} className="text-gray-500  hover:text-blue-400" />
                  </div>
                  <div className="text-center flex flex-col items-center gap-2 text-sm">
                    <div className="aspect-square max-w-[50px]">
                      {l.icon && (
                        <Image 
                          src={l.icon} alt={'icon'} 
                          className="w-full h-full object-cover"
                          width={50} height={50} />
                        )}
                      {!l.icon && (<FontAwesomeIcon icon={faLink} />)}
                    </div>
                    <div>
                      <input 
                        onChange={ev => handleUpload(ev,l.key)} id={'icon'+l.key} 
                        type="file" className="hidden" />
                      <label 
                        htmlFor={'icon'+l.key}
                        className="py-2 px-6 flex items-center gap-1 border border-gray-200 hover:text-blue-600 cursor-pointer">
                        <FontAwesomeIcon icon={faCloudArrowUp} />
                        <span>Промени икона</span>
                      </label>
                    </div>
                    <button 
                      type="button" onClick={() => removeLink(l.key)}
                      className="p-2 px-4 flex items-center gap-1 bg-gray-200 text-red-500 cursor-pointer hover:text-red-700">
                      <FontAwesomeIcon icon={faTrash} />
                      <span>Избриши го линкот</span>
                    </button>
                  </div>
                </div>
                <div className="grow">
                  <label className="input-label">Наслов</label>
                  <input 
                    value={l.title} onChange={ev => handleLinkChange(l.key, 'title', ev)} 
                    type="text" placeholder="Наслов" />
                  <label className="input-label">Поднаслов</label>
                  <input 
                    value={l.subtitle} onChange={ev => handleLinkChange(l.key, 'subtitle', ev)} type="text" placeholder="Поднаслов (не е задолжително)" />
                  <label className="input-label">Линк</label>
                  <input 
                    value={l.url} onChange={ev => handleLinkChange(l.key, 'url', ev)} type="text" placeholder="Линк" />
                </div>
              </div>
            ))}
          </ReactSortable>
        </div>
        <div className="max-w-[200px] mx-auto mt-4 ">
          <SubmitButton>
            <FontAwesomeIcon icon={faSave} />
            <span>Зачувај</span>
          </SubmitButton>
        </div>
      </form>
    </SectionBox>
  );
}