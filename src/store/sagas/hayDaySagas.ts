import { takeEvery, put } from "redux-saga/effects";
import {
  Paragraph2Action,
  Paragraph2Actions,
} from "../actions/Paragraph2Actions";
import {
  Paragraph1Action,
  Paragraph1Actions,
} from "../actions/Paragraph1Actions";
import HayDayService from "../../services/hayDayServices/hayDayServices";
import { GetParagraph1Response } from "../../services/getParagraph1/GetParagraph1Response.data";
import { GetParagraph2Response } from "../../services/getParagraph2/GetParagraph2Response.data";

export function* getParagraph1Worker(
  action: Paragraph1Action
): IterableIterator<any> {
  try {
    //@ts-ignore
    const response: GetParagraph1Response = yield HayDayService.getParagraph1();
    yield put(Paragraph1Actions.getParagraph1Success({ response: response }));
  } catch (error) {
    yield put(Paragraph1Actions.getParagraph1Error({ error }));
  }
}

export function* getParagraph2Worker(
  action: Paragraph2Action
): IterableIterator<any> {
  try {
    //@ts-ignore
    const response: GetParagraph2Response = yield HayDayService.getParagraph2();
    yield put(Paragraph2Actions.getParagraph2Success({ response }));
  } catch (error) {
    yield put(Paragraph2Actions.getParagraph2Error({ error }));
  }
}

const hayDayWatcher = [
  takeEvery("GET_PARAGRAPH1_START", (action) =>
    getParagraph1Worker({
      type: action.type,
      data: (action as Paragraph1Action).data,
    })
  ),
  takeEvery("GET_PARAGRAPH2_START", (action) =>
    getParagraph2Worker({
      type: action.type,
      data: (action as Paragraph2Action).data,
    })
  ),
];

export default hayDayWatcher;
