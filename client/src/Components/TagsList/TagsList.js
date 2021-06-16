import React from "react";
import "./TagsList.scss"
import { Link } from "react-router-dom";

function TagsList(props) {
    return (
        <section className="tagsList">
            {props.tagsList.map((tag) =>
                <Link key={tag.id} to={"/tags/"} className="tagsList__link">
                    <h2 className="tagsList__tag">
                        #{tag.tag}
                    </h2>
                </Link>
            )}
        </section>
    );
}

export default TagsList;