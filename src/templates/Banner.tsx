import React from 'react';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Contact us for more information."
      subtitle="We would love to hear from you"
      button={""
      }
    />
  </Section>
);

export { Banner };
