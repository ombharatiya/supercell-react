import React from "react";
import Button from "react-bootstrap/Button";
import Card from "../../components/card";
import { cardsList } from "./HomeConstants.data";
import { HOME } from "./../constants";

export const Home = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-12 poster home-cover d-flex flex-column justify-content-center align-items-center">
        <h1>{HOME.PAGE_TITLE}</h1>
        <p className="mt-3">{HOME.DESC1}</p>
        <a
          className="seeButton centerBottom  text-nowrap"
          href="#latest"
          id="link"
        >
          <span className="left-radius">
            <img
              src="https://cdn.supercell.com/supercell.com/200807115636/all/themes/supercell/img/18/bg_arrow_btn.png"
              width="15"
              alt="bg_arrow_btn"
            />
          </span>
          <span className="right-radius">{HOME.BUTTON1_TEXT}</span>
        </a>
      </div>
      <div className="container-fluid p-5" id="latest">
        <div className="row">
          {cardsList.map((card: any, index: number) => (
            <div className="col-sm-6 px-4" key={index}>
              <Card
                // className="class"
                title={card.title}
                image={card.image}
                cardText={card.cardText}
                navigateTo={card.navigateTo}
              />
            </div>
          ))}
        </div>
        <div className="col-sm-12 d-flex flex-column justify-content-center align-items-center">
          <Button
            className="full-width-content-text-button"
            variant="primary"
            href="/games"
            size="lg"
          >
            {HOME.CARD1_TITLE}
          </Button>
        </div>
      </div>
      <div className="full-width-content image-1">
        <div className="full-width-content-text text-white">
          <h1>{HOME.TITLE2}</h1>
          <p>{HOME.DESC2}</p>
          <Button
            className="full-width-content-text-button"
            variant="light"
            href="/games"
            size="lg"
          >
            {HOME.BUTTON2_TEXT}
          </Button>
        </div>
        <div className="full-width-content-image">
          <img
            src={
              "https://cdn.supercell.com/supercell.com/200807115636/supercell.com/files/fp_wmg_brawlstars.png"
            }
            // width="50%"
            alt="poster"
          />
        </div>
      </div>
      <div className="full-width-content image-2 padding-four-side">
        <div className="full-width-content-image">&nbsp;</div>
        <div className="full-width-content-text text-white">
          <h1>{HOME.TITLE3}</h1>
          <p>
            {HOME.DESC3}
          </p>
          <Button
            className="full-width-content-text-button"
            variant="light"
            href="/games"
            size="lg"
          >
            {HOME.BUTTON3_TEXT}
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
