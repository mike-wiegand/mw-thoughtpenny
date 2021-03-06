import React from "react";
import axios from "axios";
import "./HomePage.scss"
import Form from "../../Components/Form/Form";
import EntryList from "../../Components/EntryList/EntryList";
import TagsList from "../../Components/TagsList/TagsList";
import { API_URL } from "../../utils/utils";

class HomePage extends React.Component {
    state = {
        entriesList: null,
        tagsList: null,
        currentTagId: null
    }

    updateAllData = () => {
        axios.get(`${API_URL}/entries`)
            .then((entriesResponse) => {
                console.log(entriesResponse.data)
                this.setState({
                    entriesList: entriesResponse.data,
                });
            });
        axios.get(`${API_URL}/tags`)
            .then((tagsResponse) => {
                console.log(tagsResponse.data)
                this.setState({
                    tagsList: tagsResponse.data,
                });
            });
    }

    updateTagId = (tagId) => {
        this.setState({
            tagsList: this.state.tagsList,
            currentTagId: tagId
        });
    }

    componentDidMount() {
        this.updateAllData();
    }

    // componentDidUpdate(prevProps) {
    //     const { currentTagId } = this.props.match.params;

    //     if (prevProps.match.params.currentTagId !== currentTagId ) {
    //         this.setState({
    //             tagsList: this.state.tagsList,
    //             currentTagId: currentTagId
    //         });
    //     }
    // }

    render() {
        if (this.state.entriesList === null) {
            return <main className="homePage__loadingMsg">Gathering your thoughts... ✍️</main>
        }
        if (this.state.tagsList === null) {
            return <main className="homePage__loadingMsg">Gathering your thoughts... ✍️</main>
        }

        return (
            <main className="homePage">
                <div className="homePage__formContainer">
                    <Form updateAllData={this.updateAllData}/>
                </div>
                <div className="homePage__spacer"></div>
                <div className="homePage__entryContentContainer">
                    <EntryList entriesList={this.state.entriesList} currentTagId={this.state.currentTagId}/>
                    <TagsList tagsList={this.state.tagsList} updateTagId={this.updateTagId} currentTagId={this.state.currentTagId} />
                </div>
            </main>
        );
    }
}

export default HomePage;