import React from "react";
import "./HomePage.scss"
import Form from "../../Components/Form/Form";
import EntryList from "../../Components/EntryList/EntryList";
import TagsList from "../../Components/TagsList/TagsList";

class HomePage extends React.Component {
    render() {
        return (
            <main className="homePage">
                <div className="homePage__formContainer">
                    <Form />
                </div>
                <div className="homePage__entryContentContainer">
                    <EntryList />
                    <TagsList />
                </div>
            </main>
        );
    }
}

export default HomePage;