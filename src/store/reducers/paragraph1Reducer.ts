import ParagraphState from "../state/ParagraphState";
import {
  GetParagraph1SuccessPayload,
  Paragraph1Action,
  Paragraph1ErrorPayload,
} from "../actions/Paragraph1Actions";

// const paragraph1Sample = {
//   title: "FARM WITH FRIENDS AND FAMILY",
//   desc:
//     "You don’t have to be from a farm to be a great farmer. Hay Day lets you get back to nature and experience the simple life of working the land. It’s a special game set in a real special place. Food grows free, people smile and the animals are always happy to see you. It never rains here, but the crops never die. And if you’re craving a little bacon, one of the pigs will be happy to fry some up for you. After all, what are pigs... oops, we mean neighbors for?",
// };

const paragraph1Sample = {
  title: "",
  desc: "",
};

export const initialState = {
  loading: true,
  success: false,
  error: undefined,

  paragraph: paragraph1Sample,
};

export const paragraph1Reducer: (
  state: ParagraphState | undefined,
  action: Paragraph1Action
) => ParagraphState = (state = initialState, action: Paragraph1Action) => {
  switch (action.type) {
    case "GET_PARAGRAPH1_START":
      return { ...state, loading: true, success: false, error: undefined };
    case "GET_PARAGRAPH1_SUCCESS":
      const response = (action.data as GetParagraph1SuccessPayload).response;
      return {
        ...state,
        loading: false,
        success: true,
        error: undefined,
        paragraph: response,
      };
    case "GET_PARAGRAPH1_ERROR":
      const data = action.data as Paragraph1ErrorPayload;
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
