import React from "react";
import { Link } from "react-router-dom";
import "./EntryList.scss"

function EntryList(props) {
    return (
        <section className="entryList">
            {props.entriesList
                .filter((entry) => {
                    let ret = props.currentTagId === null
                    entry.tags.forEach(tag => ret = tag.id === props.currentTagId || ret)
                    return ret
                })
                .map((entry) =>
                    <Link key={entry.id} to={"/entries/"+ entry.id} className="entryList__linkCard">
                        <div className="entryList__entryContainer">
                            <h2 className="entryList__titleEntry">
                                {entry.title}
                            </h2>
                            <p className="entryList__contentsEntry">
                                {entry.entry}
                            </p>
                        </div>
                    </Link>
            )}
        </section>
    );
}

export default EntryList;