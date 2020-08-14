import Paragraph from "../../models/Paragraph";
import { ReducerState } from "../../store/storeHelper";

export default class ParagraphState implements ReducerState {
  public readonly loading: boolean | undefined;
  public readonly success: boolean | undefined;
  public readonly error: any | Error | undefined;
  public readonly paragraph: Paragraph | undefined;
}
