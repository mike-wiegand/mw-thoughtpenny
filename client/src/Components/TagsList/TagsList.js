import React from "react";
import "./TagsList.scss"

function TagsList() {
    return (
        <section className="tagsList">
            <h2 className="tagsList__tag">#mindfulness</h2>
            <h2 className="tagsList__tag">#stoicism</h2>
            <h2 className="tagsList__tag">#actualization</h2>
        </section>
    );
}

export default TagsList;