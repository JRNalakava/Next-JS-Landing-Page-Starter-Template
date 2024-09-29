import 'keen-slider/keen-slider.min.css';

import { useKeenSlider } from 'keen-slider/react';
import React, { useState } from 'react';

import { IPlayer } from './IPlayer';

export default function App() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="navigation-wrapper">
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
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array.from(
              Array(instanceRef.current.track.details.slides.length).keys(),
            ),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={`dot${currentSlide === idx ? ' active' : ''}`}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
