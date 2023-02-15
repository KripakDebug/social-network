import React from "react";
import c from './FindUsers.module.css';

const Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
      let pages = [];
      for (let i = 1; i <= pagesCount; i+= 1) {
        pages.push(i);
      }
      let slicedPages;
      let curPage = props.currentPage;
      if (curPage - 3 < 0) {
        slicedPages = pages.slice(0, 5);
      } else {
        slicedPages = pages.slice(curPage - 3, curPage + 2);
      }
      return (
          <div>
              {slicedPages.map(p => {
                return <span className={props.currentPage === p ? c.selectedPage : ''} onClick={() => {props.onPageChanged(p)}}>{p}</span>
              })}

          </div>
      );
    }


export default Paginator;
