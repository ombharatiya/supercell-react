import React from "react";

export const Poster = (props: any) => (
  <div>
    <img src={props.image} width="100%" alt="poster" />
    <div className="centerText">
      <h2 data-swiftype-index="false">{props.title}</h2>
      <p className="wordWrap">{props.description}</p>
    </div>
    <a className="seeButton centerBottom" href={props.scrollTo} id="link">
      <span className="left-radius ">
        <img
          src="https://cdn.supercell.com/supercell.com/200807115636/all/themes/supercell/img/18/bg_arrow_btn.png"
          width="15"
          alt="bg_arrow_btn"
        />
      </span>
      <span className="right-radius ">{props.buttonText}</span>
    </a>
  </div>
);

export default Poster;
