//IPlayerHero.tsx
import React from "react";
import { ResponsiveIframeViewer, ViewportSize }
 from 'react-responsive-iframe-viewer';

type IPlayerHeroProps = {
  src: string;
  href: string;
  title: string;
};

const IPlayerHero = (props: IPlayerHeroProps) => (
  <ResponsiveIframeViewer
    title={props.title}
    size={ViewportSize.miniMobile}
    showControls={false}
    enabledControls={[]}
    src={props.src}>
    <a href={props.href}>
      Smoke by Olhar
    </a>
  </ResponsiveIframeViewer>
);

export { IPlayerHero };
