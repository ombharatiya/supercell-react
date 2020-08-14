import React from "react";
import Card from "../../components/card";
import { cardsList } from "./GamesConstants.data";
import { GAMES } from "./../constants";

export const Games = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-12 poster games-cover d-flex flex-column justify-content-center align-items-center">
        <h1>{GAMES.PAGE_TITLE}</h1>
        <p className="mt-3">{GAMES.DESC1}</p>
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
          <span className="right-radius">{GAMES.BUTTON1_TEXT}</span>
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
      </div>
    </div>
  </div>
);

export default Games;
