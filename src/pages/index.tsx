import React, { useEffect, useState } from 'react';
import { Swiper } from 'swiper/react';

import { Base } from '../templates/Base';

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
