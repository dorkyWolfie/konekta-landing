'use client';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import PopUp from '@/components/layout/popup';
import PackageForm from '@/components/forms/contactForms/packageForm';

export default function PriceSlider() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  useEffect(() => {
    document.body.style.overflow = showContactForm ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showContactForm]);

  const handleOpenForm = (planName) => {
    setSelectedPlan(planName);
    setShowContactForm(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        {/* ---- PAKET 0 ---- */}
        <div className="flex flex-col justify-between my-auto text-lg border border-[#4f46e5]/30 bg-[#eef2ff] p-10 w-full h-full">
          <div>
            <p className="text-[#3730a3]">Тест Конекта</p>
            <p className="text-4xl mt-5 font-[500] ">0 МКД</p>
            <p className="text-sm font-[400]">Не си сигурен/а? Тестирај го профилот 7 дена па одлучи.</p>
            <ul className="my-5 pl-5 list-disc flex items-top gap-20 max-md:flex-col max-md:gap-0">
              <div>
                <li>1 профил</li>
                <li>Основни информации</li>
                <li>Контакт информации</li>
              </div>
              <div>
                <li>Линкови</li>
                <li>Датотеки</li>
                <li>Аналитика</li>
              </div>
              <div>
                <li>Контакти</li>
                <li>vCard</li>
                <li>Брза поддршка за се што ти треба</li>
              </div>
            </ul>
          </div>
          <button className="w-full p-3 bg-[#4f46e5] hover:bg-[#3730a3] transition-all text-white cursor-pointer">
            <a href="https://app.konekta.mk/registracija">Регистрирај се сега</a>
          </button>
        </div>
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
          {/* ---- PAKET 1 ---- */}
          <div className="flex flex-col justify-between my-auto text-lg border border-[#4f46e5]/30 bg-[#eef2ff] p-10 w-full h-full">
            <div>
              <p className="text-[#3730a3]">Лична Конекта</p>
              <p className="text-4xl mt-5 font-[500] text-center">1 500 МКД</p>
              <p className="text-sm font-[700] -mt-1 pb-4 text-center tracking-wide">годишно + ддв</p>
              <p className="text-sm font-[400]">Совршено решение за фриленсери и индивидуалци.</p>
              <ul className="my-5 pl-5 list-disc">
                <li>1 профил</li>
                <li>Вклучен 1 NFC токен (по твој избор)</li>
                <li>Основни информации</li>
                <li>Контакт информации</li>
                <li>Линкови</li>
                <li>Датотеки</li>
                <li>Аналитика</li>
                <li>Контакти</li>
                <li>vCard</li>
                <li>Вклучен дизајн по нарачка</li>
                <li>Вклучено неограничено програмирање на NFC токен</li>
                <li>Брза поддршка за се што ти треба</li>
              </ul>
            </div>
            <button onClick={() => handleOpenForm('Лична Конекта')} className="w-full p-3 bg-[#4f46e5] hover:bg-[#3730a3] transition-all text-white cursor-pointer">
              Претплати се сега
            </button>
          </div>
          {/* ---- PAKET 2 ---- */}
          <div className="flex flex-col justify-between my-auto text-lg border border-[#2563eb]/30 bg-[#eff6ff] p-10 w-full h-full">
            <div>
              <p className="text-[#1e40af]">Тимска Конекта</p>
              <p className="text-4xl mt-5 font-[500] text-center">1 200 МКД</p>
              <p className="text-sm font-[700] -mt-1 pb-4 text-center tracking-wide">годишно/профил + ддв</p>
              <p className="text-sm font-[400]">Идеално за мали тимови – претстави го брендот како што заслужува.</p>
              <ul className="my-5 pl-5 list-disc">
                <li>2 до 5 профили</li>
                <li>Вклучен 1 NFC токен за секој профил (по твој избор)</li>
                <li>Основни информации</li>
                <li>Контакт информации</li>
                <li>Линкови</li>
                <li>Датотеки</li>
                <li>Аналитика</li>
                <li>Контакти</li>
                <li>vCard</li>
                <li>Вклучен дизајн по нарачка</li>
                <li>Вклучено неограничено програмирање на NFC токен</li>
                <li>Брза поддршка за се што ти треба</li>
              </ul>
            </div>
            <button onClick={() => handleOpenForm('Тимска Конекта')} className="w-full p-3 bg-[#2563eb] hover:bg-[#1e40af] transition-all text-white cursor-pointer">
              Претплати се сега
            </button>
          </div>
          {/* ---- PAKET 3 ---- */}
          <div className="flex flex-col justify-between my-auto text-lg border border-[#7c3aed]/30 bg-[#f5f3ff] p-10 w-full h-full">
            <div>
              <p className="text-[#5b21b6]">Бизнис Конекта</p>
              <p className="text-4xl mt-5 font-[500] text-center">800 МКД</p>
              <p className="text-sm font-[700] -mt-1 pb-4 text-center tracking-wide">годишно/профил + ддв</p>
              <p className="text-sm font-[400]">За компании што растат.</p>
              <ul className="my-5 pl-5 list-disc">
                <li>6+ профили</li>
                <li>Вклучен 1 NFC токен за секој профил (по твој избор)</li>
                <li>Основни информации</li>
                <li>Контакт информации</li>
                <li>Линкови</li>
                <li>Датотеки</li>
                <li>Аналитика</li>
                <li>Контакти</li>
                <li>vCard</li>
                <li>Вклучен дизајн по нарачка</li>
                <li>Вклучено неограничено програмирање на NFC токен</li>
                <li>Брза поддршка за се што ти треба</li>
              </ul>
            </div>
            <button onClick={() => handleOpenForm('Бизнис Конекта')} className="w-full p-3 bg-[#7c3aed] hover:bg-[#5b21b6] transition-all text-white cursor-pointer">
              Претплати се сега
            </button>
          </div>
        </div>
      </div>
      {showContactForm && (
        <PopUp>
          <button onClick={() => setShowContactForm(false)} className="absolute top-4 right-4 font-bold" >
            <FontAwesomeIcon icon={faClose} className="w-5 h-5 text-2xl hover:text-[#3b82f6] cursor-pointer" />
          </button>
          <h2 className="text-xl font-semibold mb-4">Контакт форма</h2>
          <PackageForm selectedPlan={selectedPlan} />
        </PopUp>
      )}
    </>
  );
}