import { all } from "redux-saga/effects";
import hayDayWatcher from "./hayDaySagas";

export default function* sagas() {
  yield all([...hayDayWatcher]);
}
