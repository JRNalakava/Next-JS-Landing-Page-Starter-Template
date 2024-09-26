import React from 'react';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Pictures } from './Pictures';
import { VerticalFeatures } from './VerticalFeatures';
import { Background } from '../background/Background';

const Base = () => (
  <div className="text-golden-100 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Background color="bg-primary-100">
      <Hero />
      <Pictures />
      <VerticalFeatures />
      <Banner />
      <Footer />
    </Background>
  </div>
);

export { Base };
