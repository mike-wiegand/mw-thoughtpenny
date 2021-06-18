import React from "react";
import { Link } from "react-router-dom";
import "./EntryList.scss"
import formatDate from "../../utils/utils";

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
                            <p className="entryList__tag">
                                {entry.tags.tag}
                            </p>
                            <p className="entryList__date">
                                {formatDate(entry.timestamp)}
                            </p>
                        </div>
                    </Link>
            )}
        </section>
    );
}

export default EntryList;