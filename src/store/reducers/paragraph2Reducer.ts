import ParagraphState from "../state/ParagraphState";
import {
  GetParagraph2SuccessPayload,
  Paragraph2Action,
  Paragraph2ErrorPayload,
} from "../actions/Paragraph2Actions";

// const paragraph2Sample = {
//   title: "CONSTANTLY EVOLVING2",
//   desc:
//     "2Hay Day has been constantly evolving to offer more user-friendly, consistent and fun online experiences for Supercell gamers. There have been countless updates since the game launched in 2012.",
// };

const paragraph2Sample = {
  title: "",
  desc: "",
};

export const initialState = {
  loading: true,
  success: false,
  error: undefined,

  paragraph: paragraph2Sample,
};

export const paragraph2Reducer: (
  state: ParagraphState | undefined,
  action: any
) => ParagraphState = (state = initialState, action: Paragraph2Action) => {
  switch (action.type) {
    case "GET_PARAGRAPH2_START":
      return { ...state, loading: true, success: false, error: undefined };
    case "GET_PARAGRAPH2_SUCCESS":
      const response = (action.data as GetParagraph2SuccessPayload).response;
      return {
        ...state,
        loading: false,
        success: true,
        error: undefined,
        paragraph: response,
      };
    case "GET_PARAGRAPH2_ERROR":
      const data = action.data as Paragraph2ErrorPayload;
      return {
        ...state,
        loading: false,
        success: false,
        error: data.error,
      };
    default:
      return state;
  }
};
