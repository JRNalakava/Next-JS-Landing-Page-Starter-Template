import React from 'react';

import { VerticalFeatureRowRecommendations } from '@/feature/VerticalFeatureRowRecommendations';

import { Background } from '../background/Background';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Background color="bg-primary-100">
    <Section
      title="Latest Release"
      description="Here you can find our latest release."
    >
      <VerticalFeatureRow
        title="Our History"
        description={`
          Olhar, an Austin-based Shoegaze and Noise Rock project,
           fuses the sounds of My Bloody Valentine, Slowdive, Spaceman 3,
            and Brazilian Psychedelic Rock. The band, formed in Fort Worth
            in early 2024, revolves around the textural music and mixed
            Portuguese-English lyrics of João Rangel. Their debut EP,
             "Smoke", delves into Rangel's early adulthood struggles
              with mental health and immigration, drawing inspiration
              from both Brazilian music legends and personal experiences
               with psychosis and recovery.
             `}
        image="/assets/images/headphones.svg"
        imageAlt="Person listening to headphones"
      />
      <VerticalFeatureRow
        title="Smoke"
        description={`
          Our debut EP, "Smoke," delves into Rangel's early adulthood struggles with mental 
          health and immigration, drawing inspiration from both Brazilian music legends and personal 
          experiences with psychosis and recovery.
          The EP's instrumentation features contributions from several musicians, 
          including Jordan Dyer on drums, Joshua Cañate on saxophone, Polo Garcia and 
          Mark Hutchinson on bass, and Walter Bland on keys. Recorded in May 2024 at 
          Nomad Studio in Dallas, the record was produced, mixed, and mastered by Sam Culp.
             `}
        image="/assets/images/pipe.svg"
        imageAlt="Play icon"
        reverse
      />
      <VerticalFeatureRowRecommendations
        title="Our Recomendations"
        description={`
          Austin is a city known for its music scene, and we have several friends that perform and record
          constantly. Here are some of our recommendations:
             `}
        image="/assets/images/friends.svg"
        imageAlt="Person listening to headphones"
      />
    </Section>
  </Background>
);

export { VerticalFeatures };
