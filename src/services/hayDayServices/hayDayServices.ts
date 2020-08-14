import { paragraph1Url, paragraph2Url } from "../urls";
import Axios from "axios";

export class HayDayService {

  public getParagraph1<T = void>(): Promise<T> {
    Axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    return new Promise<T>((resolve, reject) =>
      Axios.get(paragraph1Url).then(
        (res) => {
          resolve(res.data);
        },
        (err) => {
          reject(err);
        }
      )
    );
  }

  public getParagraph2<T = void>(): Promise<T> {
    Axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    return new Promise<T>((resolve, reject) =>
      Axios.get(paragraph2Url).then(
        (res) => {
          resolve(res.data);
        },
        (err) => {
          reject(err);
        }
      )
    );
  }

}

const hayDayService = new HayDayService();
export default hayDayService;
