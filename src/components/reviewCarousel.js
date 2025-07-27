'use client';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"
import { reviews } from "./listItems";

export default function ReviewCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, loop: true })
  )
  return (
    <Carousel 
      className={"max-w-2xl max-md:w-4/5"}
      plugins={[plugin.current]} 
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset} >
      <CarouselContent>
        {reviews.map((reviews, index) => (
          <CarouselItem key={index} >
            <div className="flex flex-col py-6 px-4">
              <div className="corner-border">
                <div className="pl-10 max-md:pl-2 py-2">
                  <div className="flex items-center gap-4">
                    <h5>{reviews.name}</h5>
                    <h6 className="text-[#d1d5db] text-xs">{reviews.company}</h6>
                  </div>
                  <p>{reviews.review}</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className={"text-black"} />
      <CarouselPrevious className={"text-black"} />
    </Carousel>
  );
}