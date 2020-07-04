import React from "react";
import styles from "./Paginator.module.css";


const Paginator = ({totaUsersCount,pageSize,currentPage,onPageChanged}) => {

    let pageCount = Math.ceil(totaUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return <div>
        {pages.map(p => {
            return <span className={currentPage === p && styles.selectedPage} onClick={(e) => {
                onPageChanged(p)
            }}>{p}</span>
        })}

    </div>
};
export default Paginator;