'use client';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"

export default function ReviewCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, loop: true })
  )
  return (
    <Carousel 
      className={"max-w-2xl"}
      plugins={[plugin.current]} 
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset} >
      <CarouselContent>
        <CarouselItem>
          <div className="flex flex-col py-6 px-4">
            <div className="corner-border">
              <div className="pl-10 py-2">
                  <div className="flex items-center gap-4 text-white">
                  <h5>John Doe 1</h5>
                  <h6 className="text-[#d1d5db] text-xs">John Doe</h6>
                </div>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex flex-col py-6 px-4">
            <div className="corner-border">
              <div className="pl-10 py-2">
                  <div className="flex items-center gap-4">
                  <h5>John Doe 1</h5>
                  <h6 className="text-[#d1d5db] text-xs">John Doe</h6>
                </div>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex flex-col py-6 px-4">
            <div className="corner-border">
              <div className="pl-10 py-2">
                  <div className="flex items-center gap-4">
                  <h5>John Doe 1</h5>
                  <h6 className="text-[#d1d5db] text-xs">John Doe</h6>
                </div>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex flex-col py-6 px-4">
            <div className="corner-border">
              <div className="pl-10 py-2">
                  <div className="flex items-center gap-4">
                  <h5>John Doe 1</h5>
                  <h6 className="text-[#d1d5db] text-xs">John Doe</h6>
                </div>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselNext className={"text-black"} />
      <CarouselPrevious className={"text-black"} />
    </Carousel>
  );
}