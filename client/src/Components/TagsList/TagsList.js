import React from "react";
import "./TagsList.scss"
import { Link } from "react-router-dom";

function TagsList() {
    return (
        <section className="tagsList">
            <Link className="tagsList__link"><h2 className="tagsList__tag">#mindfulness</h2></Link>
            <Link className="tagsList__link"><h2 className="tagsList__tag">#stoicism</h2></Link>
            <Link className="tagsList__link"><h2 className="tagsList__tag">#actualization</h2></Link>
        </section>
    );
}

export default TagsList;