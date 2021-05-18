import axios from "axios";
import { IMAGEAPI } from "../index";

async function addDataImage(params) {
  let data;
  try {
    const dataRes = await axios.post(IMAGEAPI, params);
    data = dataRes;
  } catch (error) {
    data = error;
  }
  return data;
}
export default addDataImage;
