import React, { useState } from "react";
import {
  downloadList,
  socialMediaList,
  carouselList,
  timelineList,
} from "./HayDayConstants.data";
import { HAYDAY } from "./../constants";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export const HayDayComponent = (props: any) => {
  const title1 = props.title1;
  const title2 = props.title2;
  const desc1 = props.desc1;
  const desc2 = props.desc2;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVideo, setShowVideo] = useState([false, false, false, false]);
  var responsive = { 1024: { items: 2 } };

  const onSlideChanged = (index: any) => {
    setCurrentIndex(index.item);
  };

  const showIndividualVideo = (index: number) => {
    console.log(index);
    var newArr = [false, false, false, false];
    newArr[index] = true;
    setShowVideo(newArr);
  };

  const carouselItems = carouselList.map((carousel: any) => {
    return (
      <div key={carousel.id} className="white-background m-5">
        {showVideo[carousel.id] ? (
          <iframe
            // src={carousel.youtubeLink}
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            allow="autoplay; encrypted-media"
            title={carousel.title}
            className="video"
          />
        ) : (
          <div>
            <img
              width="100%"
              src={carousel.image}
              alt={carousel.title}
              className="pb-2"
            />
            <img
              className="youtube-icon"
              width="250"
              onClick={() => showIndividualVideo(carousel.id)}
              src="https://cdn.supercell.com/supercell.com/200812095732/all/themes/supercell/img/18/btn_play_video.png"
              alt=""
            />
            <div className="p-3 blue-text pb-2">
              <h4>{carousel.title}</h4>
            </div>
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 hayday-cover poster d-flex flex-column justify-content-center align-items-center">
          <a className="centerBottomIcon" href="#latest" id="link">
            <img
              src="https://cdn.supercell.com/supercell.com/200812095732/all/themes/supercell/img/18/main_logo_hayday.png"
              width="180"
              alt="bg_arrow_btn"
            />
          </a>
        </div>
        <div className="full-width-content-2">
          <div className="full-width-content-image-2">
            <span className="image-4" />
          </div>
          <div className="full-width-content-text">
            <h1>{title1}</h1>
            <p>{desc1}</p>
            <div className="download-link-2">
              {downloadList.map((socialMedia: any, index: number) => (
                <a href={socialMedia.link} id="link" key={index}>
                  <img
                    src={socialMedia.image}
                    width="150"
                    alt={socialMedia.name}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="white-background timeline-container border-upper p-5">
          <div className="half-content">
            <h1>{title2}</h1>
            <p>{desc2}</p>
          </div>
          <div className="col-sm-12 timeline-content delay">
            {timelineList.map((time: any, index: number) => (
              <span key={index} className="timeline-title p-2">
                {time.title}
              </span>
            ))}
          </div>
          {/* <img
                alt=""
                className="timeline-block"
                src="https://cdn.supercell.com/supercell.com/200812095732/all/themes/supercell/img/bg_release_timeline.png"
              /> */}
          {/* <img
                alt=""
                className="timeline p-5"
                src="https://cdn.supercell.com/supercell.com/200812095732/all/themes/supercell/img/18/bg_games_timeline_bar.png"
              /> */}
          <img
            alt=""
            width="200"
            className="timeline-hayday"
            src="https://cdn.supercell.com/supercell.com/200812095732/all/themes/supercell/img/18/bg_timeline_hayday.png"
          />
        </div>

        <div className="full-width-content-2 text-white image-3">
          <div className="full-width-content-image-2">
            <span className="image-5" />
          </div>
          <div className="full-width-content-text">
            <h1>{HAYDAY.TITLE1}</h1>
            <p>{HAYDAY.DESC1}</p>
            <div className="socialMedia">
              <h5>{HAYDAY.MESSAGE1}</h5>
              <ul>
                {socialMediaList.map((socialMedia: any, index: number) => (
                  <li key={index}>
                    <a
                      href={socialMedia.link}
                      id="link"
                      className="social-link"
                    >
                      <img src={socialMedia.image} alt={socialMedia.name} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <AliceCarousel
          items={carouselItems}
          slideToIndex={currentIndex}
          onSlideChanged={() => onSlideChanged}
          mouseTrackingEnabled
          buttonsDisabled={true}
          responsive={responsive}
        />
      </div>
    </div>
  );
};

export default HayDayComponent;
