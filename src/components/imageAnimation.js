'use client';
import Image from "next/image";

export default function ImageAnimation() {
  return (
    <div >
      {/* Moving Image */}
      <div className='animate-slide animatedImage'>
        <Image src="/card.png" alt="konekta karticka" width={250} height={250} />
      </div>
      {/* Static Image */}
      <Image src="/phone.png" alt="konekta karticka" width={200} height={200} className="z-10" />
    </div>
  );
}