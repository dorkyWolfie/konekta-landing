import mongoose from "mongoose";
import Image from "next/image";
import Link from "next/link";
import SaveContact from "@/components/buttons/saveContact";
import { page } from "@/models/page";
import { user } from "@/models/user";
import { event } from "@/models/event";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faFacebook, faGithub, faInstagram, faTelegram, faTiktok, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";

const icons = {
  email: faEnvelope,
  phone: faPhone,
  instagram: faInstagram,
  facebook: faFacebook,
  discord: faDiscord,
  tiktok: faTiktok,
  youtube: faYoutube,
  whatsapp: faWhatsapp,
  github: faGithub,
  telegram: faTelegram
};

function buttonLink(key, value) {
  if (key === 'phone') {
    return 'tel:'+value;
  }
  if (key === 'email') {
    return 'mailto:'+value;
  }
  return 'https://'+value;
}

export default async function UserPage({params}) {
  const resolvedParams = await params;
  const uri = resolvedParams.uri;
  await mongoose.connect(process.env.MONGO_URI);
  const Page = await page.findOne({uri});

  if (!Page) {
    return (
      <div className="p-8 text-center text-[#ef4444]">
        Страната не е пронајдена: <strong>/{uri}</strong>
      </div>
    );
  }

  const User = await user.findOne({email: Page.owner});
  await event.create({uri:uri, page:uri, type:"view"});

  return (
    <main>
      <div className="w-full h-screen fixed z-[-10] absolute top-0 bg-[#f9fafb]" style={{background: Page.bgColor, opacity: .2}}></div>
      <div 
        className="h-80 bg-[#dbeafe] bg-cover bg-center"
        style={
          Page.bgType === 'color'
            ? { backgroundColor: Page.bgColor }
            : { backgroundImage: `url(${Page.bgImage})` }
        }>
      </div>
      <Image 
        src={User.image} alt={"avatar"} 
        width={150} height={150} 
        className="rounded-full aspect-square -mt-16 mx-auto border-6 bg-white border-white" />
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex flex-col items-center mt-4">
          <h2 className="text-2xl font-bold">{Page.displayName}</h2>
          <h3 className="flex flex-row gap-1 mt-1 text-[#374151] text-sm">
            {Page.company && (<span>{Page.company} •</span>)}
            <span>{Page.position}</span>
          </h3>
          <h3 className="flex flex-row gap-2 mt-1 mb-1 text-[#374151] text-sm">
            {Page.location && (<span className="flex flex-row gap-2 mt-1 mb-1 text-[#374151] text-sm"><FontAwesomeIcon icon={faLocationDot} width={10} /> {Page.location}</span>)}
          </h3>
          <p className="max-w-md mx-auto text-start text-[#1f2937] text-md">{Page.bio}</p>
        </div>
        <div className="my-4 flex flex-row flex-wrap justify-center items-center gap-4">
          {Object.keys(Page.buttons).map(buttonKey => (
            <Link
              key={buttonKey} target="_blank"
              href={buttonLink(buttonKey, Page.buttons[buttonKey])} className="rounded-full bg-white/60 shadow-sm p-3 text-center">
              <FontAwesomeIcon icon={icons[buttonKey]} className="w-5 h-5" />
            </Link>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {Page.links.map(link => (
            <Link 
              key={link.url} 
              ping={process.env.URL+'/api/click?url='+btoa(link.url)+'&page='+Page.uri}
              target="_blank" href={'https://'+link.url} className="bg-white/60 shadow-sm p-2 flex gap-4 items-center" >
              <div className="corner-border aspect-square w-15 h-15 p-2 flex justify-center items-center">
                {link.icon && (
                  <Image src={link.icon} alt={'icon'} width={256} height={256} className="w-20 h-20 object-contain" />
                )}
                {!link.icon && (
                  <FontAwesomeIcon icon={faLink} />
                )}
              </div>
              <div>
                <h3>{link.title}</h3>
                <p>{link.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="relative">
        <SaveContact uri={Page.uri} className="button-1 shadow fixed absolute z-10 top-5 right-5" />
      </div>
    </main>
  )
}