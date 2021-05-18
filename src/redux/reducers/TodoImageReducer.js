import { actionTypes } from "../actions/TodoImageActions";

const initialState = {
  dataImage: [],
  loading: true,
  error: false,
};

function loadDataImage(state = initialState, action) {
  switch (action.type) {
    //load
    case actionTypes.LOAD_DATA_IMAGE: {
      return {
        ...state,
        loading: true,
      };
    }
    case actionTypes.LOAD_DATA_IMAGE_SUCCESS: {
      return {
        ...state,
        dataImage: action.payload.data,
        loading: false,
      };
    }
    case actionTypes.LOAD_DATA_IMAGE_FAILED: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    //add
    case actionTypes.ADD_DATA_IMAGE_SUCCESS: {
      state.dataImage.push(action.payload.data);
      return {
        dataImage: state.dataImage,
        loading: false,
      };
    }
    case actionTypes.ADD_DATA_IMAGE_FAILED: {
      return {
        error: true,
        loading: false,
      };
    }
    //delete
    case actionTypes.DELETE_DATA_IMAGE_SUCCESS: {
      const dataAfterDelete = state.dataImage.filter(
        (data) => data.id !== action.payload.id
      );
      return {
        dataImage: dataAfterDelete,
        loading: false,
      };
    }
    case actionTypes.DELETE_DATA_IMAGE_FAILED: {
      return {
        error: true,
        loading: false,
      };
    }
    //update
    case actionTypes.UPDATE_DATA_IMAGE_SUCCESS: {
      const data = state.dataImage.findIndex(
        (data) => action.payload.data.id === data.id
      );
      state.dataImage[data] = action.payload.data;
      const dataAfterAdd = [...state.dataImage];
      return {
        dataImage: dataAfterAdd,
        loading: false,
      };
    }
    case actionTypes.UPDATE_DATA_IMAGE_FAILED: {
      return {
        error: true,
        loading: false,
      };
    }
    default:
      return state;
  }
}

export default loadDataImage;
