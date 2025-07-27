'use client';
import Image from "next/image";
import ContactForm from "@/components/forms/contactForms/contactForm";
import PriceSlider from "@/components/priceSlider";
import ReviewCarousel from "@/components/reviewCarousel";
import ProductSection from "@/components/productsSection";
import PopUp from "@/components/layout/popup";
import Link from "next/link";
import { forWho } from "@/components/listItems";
import { features } from "@/components/listItems";
import { proizvodi } from "@/components/listItems";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faLock, faRepeat, faClose } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import Faq from "@/components/faq";


export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <main>
      {/* ---- HERO SECTION ---- */}
      <section className="max-w-6xl mt-20 flex flex-row justify-between items-center gap-10 max-md:gap-6 max-md:flex-wrap-reverse max-md:justify-center">
        <div className="w-1/2 max-md:w-full">
          <h1 className="text-5xl max-md:text-3xl">Твојата дигитална прва импресија</h1>
          <p className="text-base font-[600] pt-6 pb-2">Паметна NFC визит картичка која со еден допир ги споделува сите твои контакти, линкови и профили.</p>
          <p className="text-sm font-[800] ">Совршена за фриленсери, претприемачи и модерни бизниси.</p>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 py-6">
            <button className="button-1"><Link href="/#cenovnik">Нарачај сега!</Link></button>
            <button className="button-2"><Link href="/#kako-funkcionira">Види како функционира</Link></button>
          </div>
        </div>
        <Image src="/konekta-hero.webp" alt="picture" width={380} height={380} className="max-md:w-[200px]" />
      </section>
      {/* ---- ZOSTO SECTION ---- */}
      <section className="max-w-6xl flex flex-col gap-6 items-center">
        <h2>Зошто паметна визит картичка?</h2>
        <div className="flex flex-row items-center justify-between gap-5 max-md:gap-6 max-md:flex-wrap-reverse max-md:justify-center">
          <div className="w-3/5 max-md:w-full flex flex-col gap-6">
            <p>Конекта не е само картичка – тоа е твојот прв впечаток. Со интегрирана NFC   технологија и уникатен QR код, таа овозможува споделување на твоите контакти, линкови,  профили и многу повеќе – <strong>со само еден допир.</strong></p>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-[800] tracking-wide">Зошто ќе ја засакаш?</h3>
              <div>
                <h4>
                  <FontAwesomeIcon icon={faRepeat} className="w-4 h-4 text-[#3b82f6] pr-2" />
                  <span>Една картичка засекогаш</span>
                </h4>
                <p>Заборави на класичните хартиени визитки.</p>
                <p>Со Конекта имаш само една – која трае и лесно се ажурира.</p>
              </div>
              <div>
                <h4>
                  <FontAwesomeIcon icon={faLock} className="w-4 h-4 text-[#3b82f6] pr-2" />
                  <span>100% Безбедна. Засекогаш</span>
                </h4>
                <p>Твоите податоци се засекогаш безбедни. </p>
                <p className="font-[700]">Приватноста е секогаш на прво место.</p>
              </div>
              <div>
                <h4>
                  <FontAwesomeIcon icon={faBolt} className="w-4 h-4 text-[#3b82f6] pr-2" />
                  <span>Ефикасна и импресивна</span>
                </h4>
                <p>Со еден допир ги споделуваш сите твои информации.</p>
                <p className="font-[700]">Брзо, паметно и модерно!</p>
              </div>
            </div>
          </div>
          <Image src="/konekta-karticka.webp" alt="picture" width={400} height={400} className="w-[400px] max-md:w-[300px]" />
        </div>
      </section>
      {/* ---- FEATURES SECTION ---- */}
      <section className="relative">
        <div className="max-w-6xl flex flex-col items-center gap-10 mx-auto">
          <h2>Се што ти треба на едно место</h2>
          <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10">
            {features.map((feature, index) => (
              <div key={index} className="box-border flex-col items-left p-4 gap-2">
                <div className="flex flex-row gap-2 items-center">
                  <div>{feature.icon}</div>
                  <h4>{feature.title}</h4>
                </div>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ---- KAKO FUNKCIONIRA SECTION ---- */}
      <section id="kako-funkcionira" className="max-w-6xl flex flex-col items-center gap-14">
        <div className="text-center">
          <h2>Лесна и едноставна!</h2>
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-10 flex-wrap">
          <div className="box-border items-center p-4 gap-4 max-md:w-full">
            <h3 className="py-2 px-4 corner-border text-xl font-bold">1</h3>
            <p>Нарачај ја твојата конекта картичка.</p>
          </div>
          <div className="box-border items-center p-4 gap-4 max-md:w-full">
            <h3 className="py-2 px-4 corner-border text-xl font-bold">2</h3>
            <p>Внеси ги твоите информации во профилот и персонализирај го.</p>
          </div>
          <div className="box-border items-center p-4 gap-4 max-md:w-full">
            <h3 className="py-2 px-4 corner-border text-xl font-bold">3</h3>
            <p>Почни да го споделуваш твојот дигитален профил.</p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-10 font-[700]  text-[#4b5563] opacity-80 max-md:gap-4 ">
          <p className="flex items-center gap-2">
            <FontAwesomeIcon icon={faSquareCheck} className="w-5 h-5 text-[#3b82f6]" />
            <span className="text-xs">подржано од повеќето Android и iPhone уреди</span>
          </p>
          <p className="flex items-center gap-2">
            <FontAwesomeIcon icon={faSquareCheck} className="w-5 h-5 text-[#3b82f6]" />
            <span className="text-xs">без дополнителни апликации</span>
          </p>
          <p className="flex items-center gap-2">
            <FontAwesomeIcon icon={faSquareCheck} className="w-5 h-5 text-[#3b82f6]" />
            <span className="text-xs">вграден уникатен QR код</span>
          </p>
        </div>
      </section>
      {/* ---- ZA KOGO SECTION ---- */}
      <section className="max-w-6xl flex flex-col items-center gap-8">
        <div className="text-center">
          <h2 className="pb-1">Не си сигурен/а дали конекта е за тебе?</h2>
          <h3 className=" text-sm">Конекта е за секој што сака да остави впечаток – <strong>со стил.</strong></h3>
        </div>
        <div>
          <p className="pb-6 max-w-180 m-auto text-sm">Конекта е создадена за луѓе кои градат бренд, доверба, конекции што траат и вредат, и сакаат да се поврзат побрзо и попаметно. Без разлика дали си индивидуалец или дел од поголем тим, оваа картичка го поедноставува секое запознавање.</p>
          <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10">
            {forWho.map((item, index) => (
              <div key={index} className="box-border flex-col items-left p-4 gap-2">
                <div className="flex flex-row gap-2 items-center">
                  <span>{item.icon}</span>
                  <h4>{item.title}</h4>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ---- CENOVNIK SECTION ---- */}
      <section id="cenovnik" className="max-w-6xl flex flex-col items-center gap-10">
        <h2>Избери го планот што најмногу одговара на твоите потреби</h2>
        <div>
          <PriceSlider />
        </div>
        <div className="text-center">
          <h3 className="text-sm font-bold text-[#2563eb] pb-4">Потребно ти е нешто поинакво?</h3>
          <button 
            onClick={() => setShowContactForm(true)} 
            className="button-1">
            КОНТАКТИРАЈ НЕ ЗА ПЕРСОНАЛИЗИРАНА ПОНУДА!
          </button>
        </div>
      </section>
      {/* ---- PROIZVODI SECTION ---- */}
      <section id="proizvodi" className="max-w-6xl flex flex-col items-center gap-8">
        <h2>Изрази се со стил</h2>
        <h3 className="text-sm -mt-6">Производи што се купуваат еднократно:</h3>
        <ProductSection proizvodi={proizvodi} />
        <div className="text-center font-[600] text-xs opacity-80">
          <p className="text-[#4b5563] pb-2">Сите картички доаѓаат со NFC чип, уникатен QR код и пристап до твојот Конекта профил.</p>
          <p className="text-[#b91c1c]">Сите цени се изразени во денарска противвредност <strong>БЕЗ,</strong> пресметано ддв.</p>
        </div>
        <div className="text-center font-[800]">
          <h3 className="text-lg text-[#2563eb]">Не знаеш од каде да почнеш?</h3>
          <h3 className="text-sm mt-2 mb-4">Контактирај нè и ќе ти помогнеме да го избереш најдоброто решение за тебе или твојот бизнис.</h3>
          <button 
            onClick={() => setShowContactForm(true)} 
            className="button-1">
            КОНТАКТИРАЈ НЕ!
          </button>
        </div>
      </section>
      {/* ---- RECENZII SECTION ---- */}
      {/* <section id="recenzii" className="max-w-6xl flex flex-col gap-8 items-center relative py-6 ">
        <h2 className="text-center">Што кажуваат нашите верни корисници?</h2>
        <ReviewCarousel />
      </section> */}
      {/* ---- FAQ SECTION ---- */}
      <section id="faq" className="max-w-6xl flex flex-col items-center gap-8">
        <h2 className="text-center">ЧПП</h2>
        <Faq />
      </section>
      {/* ---- KONTAKT SECTION ---- */}
      <section id="kontakt" className="max-w-6xl flex flex-col items-center gap-10">
        <h2 className="pb-4 text-center">Контактирај не за било какви прашања или забелешки</h2>
        <ContactForm />
      </section>
      {showContactForm && (
        <PopUp>
          <button
            onClick={() => setShowContactForm(false)}
            className="absolute top-2 right-3 text-lg font-bold" >
            <FontAwesomeIcon icon={faClose} className="w-5 h-5 text-2xl hover:text-[#3b82f6]" />
          </button>
          <ContactForm />
        </PopUp>
      )}
    </main>
  );
}
