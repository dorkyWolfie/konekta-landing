'use client';
import Image from "next/image";
import PopUp from "@/components/layout/popup";
import ProductForm from "./forms/contactForms/productForm";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


export default function ProductSection({ proizvodi }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

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
      <div className="grid grid-cols-2 md:grid-cols-3 max-sm:grid-cols-1 gap-6">
        {proizvodi.map((proizvod, index) => (
          <div 
            key={index}
            onClick={() => {
              setSelectedProduct(proizvod);
              setActiveImageIndex(0);
              setShowDescription(true);
            }}
            className="object-contain shadow bg-white p-4 flex flex-col items-center justify-end gap-2 hover:scale-105 hover:bg-[#dbeafe] transition-all duration-300 cursor-pointer" >
            <Image src={proizvod.image1 || proizvod.image} alt={proizvod.name} width={150} height={150} />
            <div className="text-sm flex flex-row justify-between gap-2 w-full mt-4">
              <h3 className="font-[700]">{proizvod.name}</h3>
              <p className="font-[500] text-[#1f2937]">{proizvod.price}</p>
            </div>
            <button
              className="button-1 mt-4"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProduct(proizvod);
                setShowDescription(true);
              }} >
              Дознај повеќе
            </button>
          </div>
        ))}
      </div>
      {/* ---- DESCRIPTION POPUP ---- */}
      {showDescription && selectedProduct && (() => {
        const images = [1,2,3,4,5].map(n => selectedProduct[`image${n}`]).filter(Boolean);
        if (!images.length && selectedProduct.image) images.push(selectedProduct.image);
        return (
          <PopUp>
            <button onClick={() => setShowDescription(false)} className="absolute top-4 right-4 text-lg font-bold">
              <FontAwesomeIcon icon={faClose} className="w-5 h-5 text-2xl hover:text-[#3b82f6]" />
            </button>
            <h2 className="text-xl font-bold mb-4">{selectedProduct.name}</h2>
            {/* Carousel */}
            <div className="flex flex-col gap-3 mb-5">
              {/* Main image */}
              <div className="flex-1 flex items-center justify-center bg-gray-50 rounded min-h-[220px]">
                <Image src={images[activeImageIndex]} alt={selectedProduct.name} width={300} height={300} className="object-contain max-h-[260px]" />
              </div>
              {/* Thumbnails */}
              <div className="flex flex-row gap-2 grow">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`border-2 rounded p-0.5 transition-colors ${i === activeImageIndex ? 'border-[#3b82f6]' : 'border-gray-200 hover:border-gray-400'}`}
                  >
                    <Image src={img} alt={`${selectedProduct.name} ${i + 1}`} width={72} height={72} className="object-contain w-[72px] h-[72px]" />
                  </button>
                ))}
              </div>
            </div>
            {/* Info */}
            <p className="mb-4">{selectedProduct.description}</p>
            <h3 className="mb-2 font-bold">Карактеристики</h3>
            <ul className="list-disc pl-5 text-md text-gray-700 mb-6">
              {selectedProduct.features?.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            {/* CTA */}
            <button
              className="button-1 w-full"
              onClick={() => {
                setShowDescription(false);
                setShowContactForm(true);
              }}
            >
              Порачај сега
            </button>
          </PopUp>
        );
      })()}
      {/* ---- CONTACT FORM POPUP ---- */}
      {showContactForm && selectedProduct && (
        <PopUp>
          <button onClick={() => setShowContactForm(false)} className="absolute top-4 right-4 text-lg font-bold" >
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
