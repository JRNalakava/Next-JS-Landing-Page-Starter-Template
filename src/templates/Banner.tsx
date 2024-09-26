/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import React from 'react';
// @ts-ignore
import { CTABanner } from '../cta/CTABanner';
// @ts-ignore
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Contact us for more information."
      subtitle="We would love to hear from you"
      button={''}
    />
  </Section>
);

export { Banner };
