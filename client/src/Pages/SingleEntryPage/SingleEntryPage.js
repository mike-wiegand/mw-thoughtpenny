import React from "react";
import axios from "axios";
import "./SingleEntryPage.scss"
import { API_URL } from "../../utils/utils";

class SingleEntryPage extends React.Component {
    state = {
        selectedEntry: {},
    };

    handleChange = (event) => {
        this.setState({
            selectedEntry: {
                id: this.state.selectedEntry.id,
                title: this.state.selectedEntry.title,
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
            <section className="entryList">
                <div className="entryList__entryContainer">
                    <h2 className="entryList__titleEntry">
                        {this.state.selectedEntry.title}
                    </h2>
                    <p className="entryList__contentsEntry">
                        {this.state.selectedEntry.entry}
                    </p>
                    <textarea
                            name="entry"
                            className="entryList__formEntryStyle"
                            value={this.state.selectedEntry.entry}
                            onChange={this.handleChange}
                    ></textarea>
                </div>
            </section>
        )
        
        
    }
}

export default SingleEntryPage;