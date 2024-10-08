import type { ReactNode } from 'react';
import React from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="primary-golden-100 whitespace-pre-line text-5xl font-bold leading-hero">
      {props.title}
    </h1>
    <div className="text-2x mb-16 mt-4">{props.description}</div>

    {props.button}
  </header>
);

export { HeroOneButton };
