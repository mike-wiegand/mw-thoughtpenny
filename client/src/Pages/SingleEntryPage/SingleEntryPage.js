import React from "react";
import axios from "axios";
import "./SingleEntryPage.scss"
import { Link } from "react-router-dom";
import { API_URL } from "../../utils/utils";

class SingleEntryPage extends React.Component {
    state = {
        selectedEntry: {},
    };

    handleChange = (event) => {
        this.setState({
            selectedEntry: {
                id: this.state.selectedEntry.id,
                title: this.state.selectedEntrytitle,
                entry: event.target.value 
            },
        });
      }

    componentDidMount() {
        console.log(this.props.match.params.id)
        axios.get(`${API_URL}/entries/${this.props.match.params.id}`).then((response) => {
            console.log(response.data);
            this.setState({
                selectedEntry: response.data.entry,
            });
        });
    }

    render () {
        if (!this.state.selectedEntry.id) {
            return <main>Gathering your thoughts... ✍️</main>;
        }
        return (
            <section className="singleEntry">
                <div className="singleEntry__singleContainer">
                    <h2 className="singleEntry__editTitle">
                        {this.state.selectedEntry.title}
                    </h2>
                    <textarea
                        name="entry"
                        className="singleEntry__formEntryStyle"
                        value={this.state.selectedEntry.entry}
                        onChange={this.handleChange}
                    ></textarea>
                    <input 
                        className="singleEntry__entryTags"
                        type="text"
                        name="tags"
                        placeholder="#Tag your entry"
                    ></input>
                    <div className="singleEntry__buttonContainer">
                        <Link to="/" type="submit" className="singleEntry__button--cancel" >CANCEL</Link>
                        <Link to="/" type="submit" className="singleEntry__button" >SAVE</Link>
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