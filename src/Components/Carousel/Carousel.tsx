import * as React from "react";
import { Card, CardContent } from "@/Components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";

const Sponsors = () => {
  const sponsorList = [
    { name: 'Orkes', logo: '/Sponsors/Orkes.png' },
    { name: 'Coding Blocks', logo: '/Sponsors/CodingBlocks.jpg' },
    { name: 'Polygon', logo: '/Sponsors/Polygon.png' },
    { name: 'LazerCrazer', logo: '/Sponsors/LazerCrazer.png' },
    { name: 'Github', logo: '/Sponsors/Github.png' },
    { name: 'TechCanvas', logo: '/Sponsors/TechCanvas.png' },
    { name: 'JetBrain', logo: '/Sponsors/JetBrains.png' },
    { name: 'Replit', logo: '/Sponsors/Replit.png' },
    { name: 'Devfolio', logo: '/Sponsors/Devfolio.png' },
    { name: 'Ox.Day', logo: '/Sponsors/OxDay.png' },
    { name: 'Coding Ninja', logo: '/Sponsors/codingNinja.png' },
    { name: 'ETH India', logo: '/Sponsors/ETHIndia.png' },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Past Sponsors
          </h2>
        </div>

        <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto relative">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="relative"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {sponsorList.map((sponsor, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full xs:basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="p-1">
                    <Card className="bg-black border-gray-800 hover:border-gray-700 transition-colors">
                      <CardContent className="flex flex-col items-center justify-center p-2 md:p-4 gap-2">
                        <div className="aspect-square w-full">
                          <img
                            src={sponsor.logo}
                            alt={`${sponsor.name} logo`}
                            className="w-full h-full object-contain rounded-lg"
                            loading="lazy"
                          />
                        </div>
                        <p className="text-white text-sm md:text-base font-medium text-center mt-2">
                          {sponsor.name}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Responsive navigation buttons */}
            <CarouselPrevious className="absolute -left-4 sm:-left-12 md:-left-16 bg-gray-800 hover:bg-gray-700 text-white scale-75 sm:scale-100" />
            <CarouselNext className="absolute -right-4 sm:-right-12 md:-right-16 bg-gray-800 hover:bg-gray-700 text-white scale-75 sm:scale-100" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;