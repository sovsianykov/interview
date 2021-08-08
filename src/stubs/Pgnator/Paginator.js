import React from "react";
import styles from "./Paginator.module.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PaginatorItem from "./PaginatorItem";

const Paginator = ({ activeId, onClick, pages }) => {

  return (
    <nav className={styles.paginator}>
        <ArrowBackIosIcon className={styles.item}/>
      {pages.map((page,i) => (
        <PaginatorItem key={i}
                       active={activeId === page}
                       onClick={onClick}
                       id={page}
        />
      ))}
        <ArrowForwardIosIcon className={styles.item}/>
    </nav>
  );
};

export default Paginator;
