import React from 'react';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';
import ContactModal from '../components/ContactModal';
const Banner = () => (
  <Section>
    <CTABanner
      title="Contact us for more information."
      subtitle="We would love to hear from you"
      button={<button className="btn btn-primary"><ContactModal /></button>}
    />
  </Section>
);

export { Banner };
