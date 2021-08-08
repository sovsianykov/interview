import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {apiAction} from "../../redux/actions";
import {Grid} from "@material-ui/core";
import Paginator from "../Pgnator/Paginator";
import ListCard from "./ListCard";
import styles from "./List.module.scss"

const Lists = () => {
    const [activeId, setActiveId] = useState(1)
  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(apiAction.fetchData(activeId.toString()))

  },[activeId, dispatch])
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
   const pages = [1,2,3,4,5,6 ]
    return (
        <section className={styles.list}>
            <Paginator pages={pages} activeId={activeId} onClick={(id) =>setActiveId(id) }/>
          <Grid container spacing={3} >
            { lists  ?
                lists.results.map(list => (
                    <Grid xs={12} sm={3} item key={list.id}>
                    <ListCard
                              name={list.name}
                              description={list.description}
                              id={list.id}
                    />
                    </Grid>
                ))
                :'mistake' }
          </Grid>
        </section>
    );
};

export default Lists;
