import React from "react";
import "./Form.scss"

function Form() {
    return (
        <section className="form">
            <form className="form__form" id="form__formActive">
            <div className="form__formTextContainer">
                <input 
                    className="form__entryTitle"
                    type="text"
                    name="title"
                    placeholder="Title your entry"
                ></input>
                <textarea
                    name="entry"
                    className="form__comment form__field"
                    placeholder="A place for your thoughts..."
                ></textarea>
                <input 
                    className="form__entryTags"
                    type="text"
                    name="tags"
                    placeholder="Tag your entry"
                ></input>
            </div>
            <input type="submit" value="Publish" className="form__button" />
          </form>
        </section>
    );
}

export default Form;