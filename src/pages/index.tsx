import { Base } from '../templates/Base';
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

// const Index = () => <Base />;

const Index = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <Swiper>
          <Base />
        </Swiper>
      )}
    </>
  );
};
export default Index;
