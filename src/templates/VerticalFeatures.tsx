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
        color="bg-primary-100"
        imageAlt="Person listening to headphones"
      />
    </Section>
  </Background>
);

export { VerticalFeatures };
