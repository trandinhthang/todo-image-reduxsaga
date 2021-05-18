import axios from "axios";
import { IMAGEAPI } from "../index";

async function getDataImage(params) {
  console.log(`params`, params);
  let data;
  try {
    const resData = await axios.put(IMAGEAPI + `/${params.id}`, params);
    data = resData;
  } catch (error) {
    data = error;
  }
  return data;
}

export default getDataImage;
