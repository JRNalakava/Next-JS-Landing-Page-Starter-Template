import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { AboutUs } from './AboutUs';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="text-golden-100 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <AboutUs />
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { Base };
