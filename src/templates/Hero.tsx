import Link from 'next/link';
import React from 'react';

import { Background } from '../background/Background';
import InstagramLogo from '../components/InstagramLogo';
import { IPlayer } from '../components/IPlayer';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-primary-100 max-h-screen">
    <Section yPadding="py-0">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://linktr.ee/olhar_band" target="_blank">
            Listen
          </Link>
        </li>
        <li>
          <Link href="https://olhar.bandcamp.com/album/smoke-2" target="_blank">
            Join Bandcamp
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/olhar_band/" target="_blank">
            <InstagramLogo />
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-0">
      <span className="center text-golden-100">
        Welcome to where the eye meets the heart
      </span>
    </Section>
    <div className="max-h-screen">
      <IPlayer
        title="Olhar"
        src="https://bandcamp.com/EmbeddedPlayer/album=3456052307/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
        href="https://olhar.bandcamp.com/album/smoke-2"
      />
    </div>
  </Background>
);

export { Hero };
