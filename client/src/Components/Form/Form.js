import React from "react";
import "./Form.scss"

function Form() {
    return (
        <section className="form">
            <form className="form__form">
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
                <button type="submit" className="form__button">Publish</button>
            </div>
          </form>
          <div className="form__spacer"></div>
        </section>
    );
}

export default Form;