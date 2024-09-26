import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Contact us for more information."
      subtitle="We would love to hear from you"
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <Button>Contact us</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
