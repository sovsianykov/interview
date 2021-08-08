import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { apiAction } from "../redux/actions";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Lists from '../stubs/Lists';

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    // dispatch(apiAction.postData({
    //   "name": "My test post 2.",
    //   "description": "From Serhii.",
    //   "language": "en"
    // }))
    dispatch(apiAction.deleteData('7103643'))
    dispatch(apiAction.fetchData('6'))

  },[dispatch])
const state = useSelector(state =>state.apiReducer)
console.log(state)
  return (
      <div>
          <Lists/>
          <Router>
              <Switch>
                  <Route path="/stubs/lists" component={Lists} />
              </Switch>
          </Router>
      </div>


  )
}

export default App;
