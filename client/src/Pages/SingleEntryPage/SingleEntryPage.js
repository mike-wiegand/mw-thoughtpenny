import React from "react";
import axios from "axios";
import "./SingleEntryPage.scss"
import { Link } from "react-router-dom";
import { API_URL } from "../../utils/utils";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg"

class SingleEntryPage extends React.Component {
    state = {
        selectedEntry: {},
    };

    handleChange = (event) => {
        this.setState({
            selectedEntry: {
                ...this.state.selectedEntry,
                [event.target.name]: event.target.value
            },
        });
      }

    componentDidMount() {
        console.log(this.props.match.params.id)
        axios.get(`${API_URL}/entries/${this.props.match.params.id}`).then((response) => {
            console.log(response.data);
            let tagString = ""
            response.data.entry.tags.forEach(tag => tagString += " #" + tag.tag)
            response.data.entry.tags = tagString
            this.setState({
                selectedEntry: response.data.entry,
            });
        });
    }

    cursorToEnd(e) {
        let temp_value = e.target.value
        e.target.value = ''
        e.target.value = temp_value
      }

    render () {
        if (!this.state.selectedEntry.id) {
            return <main>Gathering your thoughts... ✍️</main>;
        }
        return (
            <section className="singleEntry">
                <div className="singleEntry__singleContainer">
                    <input 
                        className="singleEntry__title"
                        type="text"
                        name="title"
                        value={this.state.selectedEntry.title}
                        onChange={this.handleChange}
                    ></input>
                    <textarea
                        name="entry"
                        className="singleEntry__entry"
                        value={this.state.selectedEntry.entry}
                        onChange={this.handleChange}
                        autoFocus
                        onFocus={this.cursorToEnd}
                    ></textarea>
                    <input 
                        className="singleEntry__entryTags"
                        type="text"
                        name="tags"
                        value={this.state.selectedEntry.tags}
                        onChange={this.handleChange}
                    ></input>
                    <div className="singleEntry__actionButtons">
                        <div className="singleEntry__deleteContainer">
                            <button className="singleEntry__actionButtons--delete"><img className="singleEntry__deleteImg" src={deleteIcon} alt="delete" /></button>
                        </div>
                        <div className="singleEntry__buttonContainer">
                            <Link to="/" type="submit" className="singleEntry__button--cancel" >CANCEL</Link>
                            <Link to="/" type="submit" className="singleEntry__button" >SAVE</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default SingleEntryPage;

// selectedEntry: {
//     entry: response.data.entry,
// }