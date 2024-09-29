import React from 'react';

import ContactModal from '../components/ContactModal';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Contact us for more information."
      subtitle="We would love to hear from you"
      button={
        <button className="btn btn-primary">
          <ContactModal />
        </button>
      }
    />
  </Section>
);

export { Banner };
