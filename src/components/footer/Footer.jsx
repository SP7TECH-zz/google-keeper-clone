import React from "react";
import "./Footer.scss";

function Footer() {
    const year = new Date().getFullYear();
    return(
        <div>
            <footer>
                <p>Copyright @ {year}</p>
            </footer>
        </div>
    )
}

export default Footer;