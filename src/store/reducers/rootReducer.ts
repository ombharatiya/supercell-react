import { combineReducers } from "redux";
import { paragraph1Reducer } from "./paragraph1Reducer";
import { paragraph2Reducer } from "./paragraph2Reducer";
import ParagraphState from "../state/ParagraphState";

export interface ApplicationState {
  paragraph1: ParagraphState;
  paragraph2: ParagraphState;
}

const rootReducer = combineReducers<ApplicationState>({
  // entity specific
  paragraph1: paragraph1Reducer,
  paragraph2: paragraph2Reducer,
});

export default rootReducer;
