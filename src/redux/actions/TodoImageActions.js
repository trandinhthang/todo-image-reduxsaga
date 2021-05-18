export const actionTypes = {
  //load
  LOAD_DATA_IMAGE: "LOAD_DATA_IMAGE",
  LOAD_DATA_IMAGE_SUCCESS: "LOAD_DATA_IMAGE_SUCCESS",
  LOAD_DATA_IMAGE_FAILED: "LOAD_DATA_IMAGE_FAILED",
  //add
  ADD_DATA_IMAGE: "ADD_DATA_IMAGE",
  ADD_DATA_IMAGE_SUCCESS: "ADD_DATA_IMAGE_SUCCESS",
  ADD_DATA_IMAGE_FAILED: "ADD_DATA_IMAGE_FAILED",
  //delete
  DELETE_DATA_IMAGE: "DELETE_DATA_IMAGE",
  DELETE_DATA_IMAGE_SUCCESS: "DELETE_DATA_IMAGE_SUCCESS",
  DELETE_DATA_IMAGE_FAILED: "DELETE_DATA_IMAGE_FAILED",
  //update
  UPDATE_DATA_IMAGE: "UPDATE_DATA_IMAGE",
  UPDATE_DATA_IMAGE_SUCCESS: "UPDATE_DATA_IMAGE_SUCCESS",
  UPDATE_DATA_IMAGE_FAILED: "UPDATE_DATA_IMAGE_FAILED",
};
//load
export function loadDataImage() {
  return {
    type: actionTypes.LOAD_DATA_IMAGE,
  };
}
export function loadDataImageSuccess(data) {
  return {
    type: actionTypes.LOAD_DATA_IMAGE_SUCCESS,
    payload: {
      data: data,
    },
  };
}
export function loadDataImageFailed(error) {
  return {
    type: actionTypes.LOAD_DATA_IMAGE_FAILED,
    payload: {
      error: error,
    },
  };
}
//add
export function addDataImage(data) {
  return {
    type: actionTypes.ADD_DATA_IMAGE,
    payload: { data: data },
  };
}
export function addDataImageSuccess(data) {
  return {
    type: actionTypes.ADD_DATA_IMAGE_SUCCESS,
    payload: { data: data },
  };
}
export function addDataImageFailed(error) {
  return {
    type: actionTypes.ADD_DATA_IMAGE_FAILED,
    payload: { error: error },
  };
}
//delete
export function deleteDataImage(id) {
  return {
    type: actionTypes.DELETE_DATA_IMAGE,
    payload: {
      id,
    },
  };
}
export function deleteDataImageSuccess(id) {
  return {
    type: actionTypes.DELETE_DATA_IMAGE_SUCCESS,
    payload: { id },
  };
}
export function deleteDataImageFailed(error) {
  return {
    type: actionTypes.DELETE_DATA_IMAGE_FAILED,
    payload: {
      error,
    },
  };
}
//update
export function updateDataImage(values) {
  return {
    type: actionTypes.UPDATE_DATA_IMAGE,
    payload: {
      data: values,
    },
  };
}
export function updateDataImageSuccess(values) {
  return {
    type: actionTypes.UPDATE_DATA_IMAGE_SUCCESS,
    payload: { data: values },
  };
}
export function updateDataImageFailed(error) {
  return {
    type: actionTypes.UPDATE_DATA_IMAGE_FAILED,
    payload: {
      error,
    },
  };
}
