import React from "react";
import "./Form.scss"
import axios from "axios";
import { withRouter } from 'react-router-dom'
import { API_URL } from "../../utils/utils";
// import TagInput from "../TagInput/TagInput"

class Form extends React.Component {

    publishEntry = (event) => {
        event.preventDefault();
        axios.post(`${API_URL}/entries`, {
            title: event.target.title.value,
            entry: event.target.entry.value,
            tags: event.target.tags.value
        }).then((_response) => {
            event.target.title.value = ""
            event.target.entry.value = ""
            event.target.tags.value = ""
            alert("Entry Saved! Here is a penny for your thought 💰")
            this.props.updateAllData()
            this.props.history.push("/")
        })
    }

    render() {
        return (
            <section className="form">
                <form onSubmit={this.publishEntry} className="form__form">
                    <div className="form__formContainer">
                        <input 
                            className="form__entryTitle"
                            type="text"
                            name="title"
                            placeholder="Title your entry"
                        ></input>
                        <textarea
                            name="entry"
                            className="form__entryField"
                            placeholder="A place for your thoughts..."
                        ></textarea>
                    </div>
                    <div className="form__tagsButtonContainer">
                        <input 
                            className="form__entryTags"
                            type="text"
                            name="tags"
                            placeholder="#Tag your entry"
                        ></input>
                        <button type="submit" className="form__button" >Publish</button>
                    </div>
                    {/* <TagInput /> */}
                </form>
            </section>
        )
    }
}

export default withRouter(Form);

// onClick={() =>{this.props.updateAllData()}}