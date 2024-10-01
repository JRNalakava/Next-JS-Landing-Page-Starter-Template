import { Spacer } from '@nextui-org/react';
import React from 'react';

import { Background } from '../background/Background';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import ContactUsBanner from './ContactUsBanner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Pictures } from './Pictures';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="margin-mobile text-golden-100 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Background color="bg-primary-100 margin-mobile">
      <Hero />
      <Spacer y={10} />
      <Pictures />
      <Spacer y={5} />
      <VerticalFeatures />
      <ContactUsBanner />
      <Footer />
    </Background>
  </div>
);

export { Base };
