import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { apiAction } from "../redux/actions";
import { store } from "../redux/store";
import { postURL } from "../redux/types";


function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(apiAction.postData(postURL,{
      "name": "This is my awesome test list.",
      "description": "Just an awesome list dawg.",
      "language": "en"
    }))
    dispatch(apiAction.fetchData(''))

  },[dispatch])
const state = useSelector(state =>state.apiReducer)
console.log(state)
  return (
    <div className="App">

    </div>
  );
}

export default App;
