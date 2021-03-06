import {BASE_URL, deleteURL, POST_LIST} from "./types";
import {
  FETCH_FAILURE,
  FETCH_LISTS,
  FETCH_START,
  FETCH_DATA,
  DELETE_lIST,
} from "./types";
const postURL =
  "https://api.themoviedb.org/3/list?api_key=bbe220c0cdf3879ab4296132d5764264&session_id=dde06139373c7b9299d9871ed07a8f4ebc528208";

export const apiAction = {
  fetchStart() {
    return { type: FETCH_START };
  },
  fetchSuccess(data) {
    return { type: FETCH_LISTS, payload: data };
  },
  errorMessage() {
    return {
      type: FETCH_FAILURE,
      payload: "Something vent wrong!",
    };
  },
  postData(body) {
    return {
      type: POST_LIST,
      url: `${postURL}`,
      body,
    };
  },
  deleteData(id) {
    return {
      type: DELETE_lIST,
      url: `https://api.themoviedb.org/3/list/${id}?api_key=bbe220c0cdf3879ab4296132d5764264&session_id=dde06139373c7b9299d9871ed07a8f4ebc528208`,

    };
  },

  fetchData(uri) {
    return {
      type: FETCH_DATA,
      url: `${BASE_URL}${uri}`,
    };
  },
};
