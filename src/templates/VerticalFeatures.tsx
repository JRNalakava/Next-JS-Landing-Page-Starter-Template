import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { Background } from '../background/Background'

const VerticalFeatures = () => (
  <Background color="bg-primary-100">
    <Section
      title="Latest Release"
      description="Here you can find our latest release."
    >
      <VerticalFeatureRow
        title="Our History"
        description={
        `
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
      <VerticalFeatureRow
        title="Your title here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
        image="/assets/images/feature2.svg"
        imageAlt="Second feature alt text"
        reverse
      />
      <VerticalFeatureRow
        title="Your title here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
        image="/assets/images/feature3.svg"
        imageAlt="Third feature alt text"
      />
    </Section>
  </Background>
);

export { VerticalFeatures };
