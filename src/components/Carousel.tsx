import 'keen-slider/keen-slider.min.css';

import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import * as React from 'react';

const animation = { duration: 5000, easing: (t: number) => t };

export default function App() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    drag: true,
    created(s) {
      s.moveToIdx(1, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
  });
  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <Image
          src="/assets/images/carousel/joey_600x500.png"
          width={600}
          height={500}
          alt="Picture of Joey the drum tech"
        />
      </div>
      <div className="keen-slider__slide number-slide2">
        <Image
          src="/assets/images/carousel/joshua_600x500.png"
          width={600}
          height={500}
          alt="Picture of Joshua, the saxophone genius"
        />
      </div>
      <div className="keen-slider__slide number-slide3">
        <Image
          src="/assets/images/carousel/owner_600x500.png"
          width={600}
          height={500}
          alt="Picture of Gary, the owner of the studio"
        />
      </div>
      <div className="keen-slider__slide number-slide4">
        <Image
          src="/assets/images/carousel/sam_600x500.png"
          width={600}
          height={500}
          alt="Picture of Sam, the engineer"
        />
      </div>
      <div className="keen-slider__slide number-slide5">
        <Image
          src="/assets/images/carousel/joey_600x500.png"
          width={600}
          height={500}
          alt="Picture of Joey the drum tech"
        />
      </div>
      <div className="keen-slider__slide number-slide6">
        <Image
          src="/assets/images/carousel/sam_josh_600x500.png"
          width={600}
          height={500}
          alt="Picture of Sam and Joshua"
        />
      </div>
      <div className="keen-slider__slide number-slide6">
        <Image
          src="/assets/images/carousel/joao_frog_600x500.png"
          width={600}
          height={500}
          alt="Picture of Sam and Joshua"
        />
      </div>
    </div>
  );
}
