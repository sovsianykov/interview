import React, {useCallback, useMemo} from 'react';
import styles from "./Paginator.module.scss";
import cn from "classnames"


const PaginatorItem = ({ id, active, onClick}) => {

    const classNames = useMemo(() => cn({
    [styles.item]:true,
        [styles.item_active]: active
    }),[active])

    const onClickHandler = useCallback(() =>{
         onClick(id)
    },[id, onClick])

    return (
        <div className={classNames} onClick={onClickHandler}>
            {id}
        </div>
    );
};

export default PaginatorItem;
