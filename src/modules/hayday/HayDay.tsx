import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../store/reducers/rootReducer";
import { Paragraph1Actions } from "../../store/actions/Paragraph1Actions";
import { Paragraph2Actions } from "../../store/actions/Paragraph2Actions";
import HayDayComponent from "./HayDayComponent";

export const HayDay = () => {
  const paragraph1 = useSelector((state: ApplicationState) => state.paragraph1);
  const paragraph2 = useSelector((state: ApplicationState) => state.paragraph2);
  const dispatch = useDispatch();

  const init = () => {
    dispatch(Paragraph1Actions.getParagraph1Start());
    dispatch(Paragraph2Actions.getParagraph2Start());
  };

  useEffect(() => {
    init();
  }, []);

  const { title1, desc1 } =
    paragraph1 && paragraph1.paragraph
      ? { title1: paragraph1.paragraph.title, desc1: paragraph1.paragraph.desc }
      : { title1: "", desc1: "" };

  const { title2, desc2 } =
    paragraph2 && paragraph2.paragraph
      ? { title2: paragraph2.paragraph.title, desc2: paragraph2.paragraph.desc }
      : { title2: "", desc2: "" };

  return (
    <HayDayComponent
      title1={title1}
      title2={title2}
      desc1={desc1}
      desc2={desc2}
    />
  );
};
export default HayDay;
