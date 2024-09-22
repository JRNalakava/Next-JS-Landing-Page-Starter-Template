import Link from 'next/link';
import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import InstagramLogo from '../components/InstagramLogo.tsx';
import { IPlayerHero } from '../hero/IPlayerHero.tsx'

const Hero = () => (
  <Background color="bg-primary-100">
    <Section yPadding="py-0">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://linktr.ee/olhar_band" target="_blank">
            Listen
          </Link>
        </li>
        <li>
          <Link href="https://olhar.bandcamp.com/album/smoke-2" target="_blank">
          Join Bandcamp</Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/olhar_band/" target="_blank">
            <InstagramLogo />
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-0">
      <HeroOneButton
        title={
          <>
            <span className="text-golden-100">Welcome to where the eye meets
              the heart
            </span>
          </>
        }
      />
    </Section>
    <Section className="max-h-1/2">
        <IPlayerHero
          src="https://bandcamp.com/EmbeddedPlayer/album=3456052307/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          href="https://olhar.bandcamp.com/album/smoke-2"
         />
    </Section>
  </Background>
);

export { Hero };
