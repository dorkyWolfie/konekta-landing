'use client';
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import PopUp from "@/components/layout/popup";
import ProductForm from "./forms/contactForms/productForm";


export default function ProductSection({ proizvodi }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    if (showDescription || showContactForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showDescription, showContactForm]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {proizvodi.map((proizvod, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedProduct(proizvod);
              setShowDescription(true);
            }}
            className="aspect-square object-contain shadow p-4 flex flex-col items-center justify-center gap-2 hover:scale-105 hover:bg-[#dbeafe] transition-all duration-300 cursor-pointer" >
            <Image src={proizvod.image} alt={proizvod.name} width={150} height={150} />
            <div className="text-sm flex flex-row justify-between gap-2 w-full">
              <h3 className="font-[700]">{proizvod.name}</h3>
              <p className="font-[500] text-[#1f2937]">{proizvod.price}</p>
            </div>
            <button
              className="button-1 mt-2"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProduct(proizvod);
                setShowContactForm(true);
              }} >
              Купи сега
            </button>
          </div>
        ))}
      </div>
      {/* ---- DESCRIPTION POPUP ---- */}
      {showDescription && selectedProduct && (
        <PopUp>
          <button
            onClick={() => setShowDescription(false)}
            className="absolute top-4 right-4 text-lg font-bold">
            <FontAwesomeIcon icon={faClose} className="w-5 h-5 text-2xl hover:text-[#3b82f6]" />
          </button>
          <h2 className="text-xl font-bold mb-2">{selectedProduct.name}</h2>
          <Image src={selectedProduct.image} alt={selectedProduct.name} width={200} height={200}className="mx-auto mb-4" />
          <h3 className="font-[700] pt-2">Опис:</h3>
          <p>{selectedProduct.description}</p>
          <h3 className="font-[700] pt-2">Карактеристики:</h3>
          <ul className="list-disc pl-5">
            {selectedProduct.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h3 className="font-[700] pt-2">Цена: {selectedProduct.price}</h3>
        </PopUp>
      )}
      {/* ---- CONTACT FORM POPUP ---- */}
      {showContactForm && selectedProduct && (
        <PopUp>
          <button
            onClick={() => setShowContactForm(false)}
            className="absolute top-4 right-4 text-lg font-bold" >
            <FontAwesomeIcon icon={faClose} className="w-5 h-5 text-2xl hover:text-[#3b82f6]" />
          </button>
          <h2 className="text-xl font-bold pb-4">Контакт за: {selectedProduct.name}</h2>
          <p className="text-sm font-[600] pb-6">Внесете ги вашите податоци и ќе ве контактираме за потврда на порачката.</p>
          <ProductForm selectedProduct={selectedProduct.name} />
          {/* <p className="text-sm font-[600] text-[#dc2626] pt-4">Во полето „Порака“ ве молиме внесете го името на производот и количината.</p> */}
        </PopUp>
      )}
    </>
  );
}
