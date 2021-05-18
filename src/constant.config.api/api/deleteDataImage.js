import axios from "axios";
import { IMAGEAPI } from "..";

async function deleteDataImage(id) {
  try {
    await axios.delete(IMAGEAPI + `/${id}`);
  } catch (error) {
    console.log(`error`, error);
  }
}

export default deleteDataImage;
