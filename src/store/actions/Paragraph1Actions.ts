import { GetParagraph1Response } from "../../services/getParagraph1/GetParagraph1Response.data";
import { StoreAction } from "../storeHelper";

export type Paragraph1ActionType =
  | "GET_PARAGRAPH1_START"
  | "GET_PARAGRAPH1_SUCCESS"
  | "GET_PARAGRAPH1_ERROR";

export interface GetParagraph1StartPayload {
  // readonly param: string;
}

export interface GetParagraph1SuccessPayload {
  readonly response: GetParagraph1Response;
}

export interface Paragraph1ErrorPayload {
  readonly error: Error | any;
}

export type Paragraph1Payload =
  | GetParagraph1StartPayload
  | GetParagraph1SuccessPayload
  | Paragraph1ErrorPayload
  | null;

export type Paragraph1Action = StoreAction<
  Paragraph1ActionType,
  Paragraph1Payload
>;

export class Paragraph1Actions {
  // getParagraph1
  public static getParagraph1Start(): // data: GetParagraph1StartPayload
  Paragraph1Action {
    return { type: "GET_PARAGRAPH1_START", data: null };
  }
  public static getParagraph1Success(
    data: GetParagraph1SuccessPayload
  ): Paragraph1Action {
    return { type: "GET_PARAGRAPH1_SUCCESS", data };
  }
  public static getParagraph1Error(
    data: Paragraph1ErrorPayload
  ): Paragraph1Action {
    return { type: "GET_PARAGRAPH1_ERROR", data };
  }
}
