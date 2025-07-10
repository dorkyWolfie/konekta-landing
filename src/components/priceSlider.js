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
      <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
        {/* ---- PAKET 1 ---- */}
        <div className="flex flex-col justify-between my-auto text-lg border border-[#4f46e5]/30 bg-[#eef2ff] p-10 w-full h-full">
          <div>
            <p className="text-[#4d66e5]">Мини Конекта</p>
            <p className="text-5xl my-5 font-light">600 МКД</p>
            <p className="text-sm font-[400]">Совршен почеток за твоето онлајн присуство.</p>
            <ul className="my-5 pl-5 list-disc">
              <li>Основни лични информации</li>
              <li>Контакт податоци</li>
              <li>Бела картичка гратис</li>
            </ul>
          </div>
          <button 
            onClick={() => handleOpenForm('Мини Конекта')}
            className="w-full p-3 bg-[#6366f1] hover:bg-[#4f46e5] transition-all text-white">
            Претплати се сега
          </button>
        </div>
        {/* ---- PAKET 2 ---- */}
        <div className="flex flex-col justify-between my-auto text-lg border border-[#2563eb]/30 bg-[#eff6ff] p-10 w-full h-full">
          <div>
            <p className="text-[#4d66e5]">Макси Конекта</p>
            <p className="text-5xl my-5 font-light">900 МКД</p>
            <p className="text-sm font-[400]">Отклучи ги сите функции за професионален впечаток.</p>
            <ul className="my-5 pl-5 list-disc">
              <li>Основни лични информации</li>
              <li>Контакт информации</li>
              <li>Неограничен број линкови</li>
              <li>Аналитика</li>
              <li>Бела картичка гратис</li>
            </ul>
          </div>
          <button 
            onClick={() => handleOpenForm('Макси Конекта')}
            className="w-full p-3 bg-[#3b82f6] hover:bg-[#2563eb] transition-all text-white">
            Претплати се сега
          </button>
        </div>
        {/* ---- PAKET 3 ---- */}
        <div className="flex flex-col justify-between my-auto text-lg border border-[#7c3aed]/30 bg-[#f5f3ff] p-10 w-full h-full">
          <div>
            <p className="text-[#4d66e5]">Екстра Конекта</p>
            <p className="text-5xl my-5 font-light">9 000 МКД</p>
            <p className="text-sm font-[400]">Годишен пакет со максимална вредност и екстра заштеда.</p>
            <ul className="my-5 pl-5 list-disc">
              <li>Сите функции од Макси Конекта</li>
              <li>Плаќање еднаш годишно</li>
              <li>Добиј 2 месеци бесплатно</li>
            </ul>
          </div>
          <button 
            onClick={() => handleOpenForm('Екстра Конекта')}
            className="w-full p-3 bg-[#8b5cf6] hover:bg-[#7c3aed] transition-all text-white">
            Претплати се сега
          </button>
        </div>
      </div>
      {showContactForm && (
        <PopUp>
          <button
            onClick={() => setShowContactForm(false)}
            className="absolute top-4 right-4 font-bold" >
            <FontAwesomeIcon icon={faClose} className="w-5 h-5 text-2xl hover:text-[#3b82f6]" />
          </button>
          <h2 className="text-xl font-semibold mb-4">Контакт форма</h2>
          <PackageForm selectedPlan={selectedPlan} />
        </PopUp>
      )}
    </>
  );
}