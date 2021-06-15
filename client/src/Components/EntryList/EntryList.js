import React from "react";
import { Link } from "react-router-dom";
import "./EntryList.scss"

function EntryList() {
    return (
        <section className="entryList">
            <Link to={"/entries/"} className="entryList">
                <div className="entryList__card">
                    <div className="entryList__entryContainer">
                        <h2 className="entryList__titleEntry">Quality of Mind</h2>
                        <p className="entryList__contentsEntry">The things you think about determine the quality of your mind.</p>
                    </div>
                </div>
            </Link>
            <Link to={"/entries/"} className="entryList">
                <div className="entryList__card">
                    <div className="entryList__entryContainer">
                        <h2 className="entryList__titleEntry">Quality of Mind</h2>
                        <p className="entryList__contentsEntry">The things you think about determine the quality of your mind.</p>
                    </div>
                </div>
            </Link>
            <Link to={"/entries/"} className="entryList">
                <div className="entryList__card">
                    <div className="entryList__entryContainer">
                        <h2 className="entryList__titleEntry">Quality of Mind</h2>
                        <p className="entryList__contentsEntry">The things you think about determine the quality of your mind.</p>
                    </div>
                </div>
            </Link>
        </section>
    );
}

export default EntryList;