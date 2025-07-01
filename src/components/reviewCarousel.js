import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel";

export default function ReviewCarousel() {
  return (
    <Carousel className={"max-w-3xl"}>
      <CarouselContent>
        <CarouselItem>
            <div className="flex flex-col items-center border border-gray-300/60 p-4">
              <h5>John Doe 1</h5>
              <h6>John Doe</h6>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex flex-col items-center border border-gray-300/60 p-4">
              <h5>John Doe 2</h5>
              <h6>John Doe</h6>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex flex-col items-center border border-gray-300/60 p-4">
              <h5>John Doe 3</h5>
              <h6>John Doe</h6>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex flex-col items-center border border-gray-300/60 p-4">
              <h5>John Doe 4</h5>
              <h6>John Doe</h6>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex flex-col items-center border border-gray-300/60 p-4">
              <h5>John Doe 5</h5>
              <h6>John Doe</h6>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}