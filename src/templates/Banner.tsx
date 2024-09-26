import React from 'react';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';
import ContactPopup from '@/components/ContactPopup';

const Banner = () => (
  <Section>
    <CTABanner
      title="Contact us for more information."
      subtitle="We would love to hear from you"
      button={
          <ContactPopup />
      }
    />
  </Section>
);

export { Banner };
