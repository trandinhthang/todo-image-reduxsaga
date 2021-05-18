import axios from "axios";
import { IMAGEAPI } from "../index";

async function getDataImage() {
  let data;
  try {
    const resData = await axios.get(IMAGEAPI);
    data = resData;
  } catch (error) {
    data = error;
  }
  return data;
}

export default getDataImage;
