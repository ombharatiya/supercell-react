import { GetParagraph2Response } from "../../services/getParagraph2/GetParagraph2Response.data";
import { StoreAction } from "../storeHelper";

export type Paragraph2ActionType =
  | "GET_PARAGRAPH2_START"
  | "GET_PARAGRAPH2_SUCCESS"
  | "GET_PARAGRAPH2_ERROR";

export interface GetParagraph2StartPayload {
  // readonly param: string;
}

export interface GetParagraph2SuccessPayload {
  readonly response: GetParagraph2Response;
}

export interface Paragraph2ErrorPayload {
  readonly error: Error | any;
}

export type Paragraph2Payload =
  | GetParagraph2StartPayload
  | GetParagraph2SuccessPayload
  | Paragraph2ErrorPayload
  | null;

export type Paragraph2Action = StoreAction<
  Paragraph2ActionType,
  Paragraph2Payload
>;

export class Paragraph2Actions {
  // getParagraph2
  public static getParagraph2Start(): // data: GetParagraph2StartPayload
  Paragraph2Action {
    return { type: "GET_PARAGRAPH2_START", data: null };
  }
  public static getParagraph2Success(
    data: GetParagraph2SuccessPayload
  ): Paragraph2Action {
    return { type: "GET_PARAGRAPH2_SUCCESS", data };
  }
  public static getParagraph2Error(
    data: Paragraph2ErrorPayload
  ): Paragraph2Action {
    return { type: "GET_PARAGRAPH2_ERROR", data };
  }
}
