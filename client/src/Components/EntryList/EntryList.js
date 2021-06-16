import React from "react";
import { Link } from "react-router-dom";
import "./EntryList.scss"

function EntryList(props) {
    return (
        <section className="entryList">
            {props.entriesList.map((entry) =>
                <Link key={entry.id} to={"/entries/"} className="entryList__linkCard">
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