import React from "react";
import Cards from './Cards'
import SearchBox from './SearchBox'


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => { this.setState({ robots: users }) });
    }

    onchange = (event) => {
        this.setState({ searchField: event.target.value });
        console.log(event.target.value);
        console.log(this.state.searchField);
    }

    render() {
        const { robots, searchField } = this.state;

        const searchedRobos = robots.filter(robo => {
            // console.log(searchField);
            return robo.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return (
            <div>
                <h1 className="tc f1">
                    RoboFriends
                </h1>

                <SearchBox searchChange={this.onchange} />
                <Cards robots={searchedRobos} />
            </div>
        );
    }
};

export default App;