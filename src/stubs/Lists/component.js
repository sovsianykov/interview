import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {apiAction} from "../../redux/actions";
import {Grid} from "@material-ui/core";

const Lists = () => {
  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(apiAction.fetchData('6'))

  },[dispatch])
  const {lists ,isLoading, error } = useSelector(state =>state.apiReducer)
    console.log(useSelector(state =>state.apiReducer))
  if (isLoading) {
    return (
        <div>
          <h1>Loading...</h1>
        </div>
    );
  }
  if (error) {
    return (
        <div>
          <h5>{error}</h5>
        </div>
    );
  }
    return (
        <div>
          <Grid container>
            { lists ? lists.results.length:'mistake' }
          </Grid>
        </div>
    );
};

export default Lists;