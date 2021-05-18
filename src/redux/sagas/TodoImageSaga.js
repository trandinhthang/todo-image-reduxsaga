import { call, put, takeEvery } from "redux-saga/effects";
import { toast } from "react-toastify";
import {
  actionTypes,
  loadDataImageSuccess,
  loadDataImageFailed,
  addDataImageSuccess,
  addDataImageFailed,
  deleteDataImageSuccess,
  deleteDataImageFailed,
  updateDataImageSuccess,
  updateDataImageFailed,
} from "../actions/TodoImageActions";
import getImageAPI from "../../constant.config.api/api/getDataImage";
import addImageAPI from "../../constant.config.api/api/addDataImage";
import deleteImageAPI from "../../constant.config.api/api/deleteDataImage";
import updateImageAPI from "../../constant.config.api/api/updateDataImage";
//load
function* loadDataImage(action) {
  try {
    const dataAPI = yield call(getImageAPI);
    if (dataAPI.data.length > 0) {
      yield put(loadDataImageSuccess(dataAPI.data));
    }
  } catch (error) {
    yield put(loadDataImageFailed(error));
  }
}
//add
function* addDataImage(action) {
  try {
    const dataAPI = yield call(addImageAPI, action.payload.data);
    yield put(addDataImageSuccess(dataAPI.data));
    toast.success("Thêm hình ảnh yêu thích thành công !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (error) {
    yield put(addDataImageFailed(error));
    toast.error("Thêm hình ảnh yêu thích thất bại !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}
//delete
function* deleteDataImage(action) {
  try {
    yield call(deleteImageAPI, action.payload.id);
    yield put(deleteDataImageSuccess(action.payload.id));
    toast.success("Xóa hình ảnh yêu thích thành công !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (error) {
    yield put(deleteDataImageFailed(error));
    toast.error("Xóa hình ảnh yêu thích thất bại !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}
//update
function* updateDataImage(action) {
  try {
    const dataAPI = yield call(updateImageAPI, action.payload.data);
    yield put(updateDataImageSuccess(dataAPI.data));
    toast.success("Cập nhật hình ảnh yêu thích thành công !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (error) {
    yield put(updateDataImageFailed(error));
    toast.error("Cập nhật hình ảnh yêu thích thất bại !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}

function* imageSaga() {
  yield takeEvery(actionTypes.LOAD_DATA_IMAGE, loadDataImage);
  yield takeEvery(actionTypes.ADD_DATA_IMAGE, addDataImage);
  yield takeEvery(actionTypes.DELETE_DATA_IMAGE, deleteDataImage);
  yield takeEvery(actionTypes.UPDATE_DATA_IMAGE, updateDataImage);
}

export default imageSaga;
