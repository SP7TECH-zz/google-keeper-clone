import React from "react";
import "./header-search.styles.scss";

import SearchIcon from '@material-ui/icons/Search';

function HeaderSearch() {
    return(
        <div className="header-search">
            <div>
                <SearchIcon className="header-search-icon" />
            </div>
            <form>
                <input type="search" placeholder="Search" className="header-search-input" />
            </form>
        </div>
    );
}

export default HeaderSearch;