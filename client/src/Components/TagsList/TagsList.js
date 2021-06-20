import React from "react";
import "./TagsList.scss"

function TagsList(props) {
    return (
        <section className="tagsList">
            <button onClick={() => {props.updateTagId(null)}} className="tagsList__link">
                <h2 className="tagsList__tag">
                        All Tags
                    </h2>
            </button>
            {props.tagsList.map((tag) =>
                <button key={tag.id} onClick={() => {props.updateTagId(tag.id)}} className="tagsList__link">
                    <h2 className={props.currentTagId === tag.id ? "tagsList__tag tagsList__tag--current": "tagsList__tag"}>
                        #{tag.tag}
                    </h2>
                </button>
            )}
        </section>
    );
}

export default TagsList;

// to={"/tags/"+ tag.id}