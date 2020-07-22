import React, {useState} from "react";
import styles from "./Paginator.module.css";
import cn from "classnames"


const Paginator = ({totaUsersCount, pageSize, currentPage, onPageChanged, portionSize = 15}) => {

    const pageCount = Math.ceil(totaUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pageCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;


    return <div className={styles.paginatorWrap}>
        {portionNumber > 1 &&
        <button className={styles.paginationButton} onClick={() => setPortionNumber(portionNumber - 1)}>prev</button>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span key={p} className={
                    cn({[styles.selectedPage]: currentPage === p}, styles.pageNumber)}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
        {portionCount > portionNumber &&
        <button className={styles.paginationButton} onClick={() => setPortionNumber(portionNumber + 1)}>next</button>}

    </div>
};
export default Paginator;