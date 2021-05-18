import { all } from "redux-saga/effects";
import TodoImage from "./TodoImageSaga";

function* rootSagas() {
  yield all([TodoImage()]);
}

export default rootSagas;
