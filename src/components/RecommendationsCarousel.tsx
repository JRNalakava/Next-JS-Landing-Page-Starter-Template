import 'keen-slider/keen-slider.min.css';

import { useKeenSlider } from 'keen-slider/react';
import * as React from 'react';

import { IPlayer } from './IPlayer';

const animation = { duration: 5000, easing: (t: number) => t };

export default function App() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    drag: true,
    created(s) {
      s.moveToIdx(1, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 0.1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 0.1, true, animation);
    },
  });
  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <IPlayer
          title="Sketches"
          src="https://bandcamp.com/EmbeddedPlayer/album=2643866227/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          href="https://gusbaldwin.bandcamp.com/album/sketches"
        />
      </div>
      <div className="keen-slider__slide number-slide2">
        <IPlayer
          title="everything is alive"
          src="https://bandcamp.com/EmbeddedPlayer/album=518621864/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          href="https://slowdive.bandcamp.com/album/everything-is-alive"
        />
      </div>
      <div className="keen-slider__slide number-slide3">
        <IPlayer
          title="Loveless - My Bloody Valentine"
          src="https://open.spotify.com/embed/album/3GH4IiI6jQAIvnHVdb5FB6?utm_source=generator"
        />
      </div>
      <div className="keen-slider__slide number-slide4">
        <IPlayer
          title="Grandmaster"
          src="https://open.spotify.com/embed/album/1Dnn9OSFtBRTXUKd9sRSk9?utm_source=generator"
        />
      </div>
      <div className="keen-slider__slide number-slide5">
        <IPlayer
          title="Oruã - Passe"
          src="https://bandcamp.com/EmbeddedPlayer/album=190767417/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          href="https://orua.bandcamp.com/album/passe"
        />
      </div>
      <div className="keen-slider__slide number-slide6">
        <IPlayer
          title="La Monte Young - The Well Tuned Piano"
          src="https://bandcamp.com/EmbeddedPlayer/album=511320697/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          href="https://lamonteyoung.bandcamp.com/album/the-well-tuned-piano-in-the-magenta-lights-87-v-10-6-43-00-pm-87-v-11-1-07-45-am-nyc"
        />
      </div>
      <div className="keen-slider__slide number-slide6">
        <IPlayer
          title="La Monte Young - The Well Tuned Piano"
          src="https://open.spotify.com/embed/album/0i9SwtLwZ8cOuH5qtkwTvT?utm_source=generator"
        />
      </div>
    </div>
  );
}
