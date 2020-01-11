import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            seacfield: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ robots: users }));


    }

    onSearchChange = (event) => {
        this.setState({ seacfield: event.target.value })



        // this.state.robots= filterdRobots;

    }
    render() {
        const { robots, seacfield } = this.state;
        const filterdRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(seacfield.toLowerCase());
        });

        return !robots.length ? <h1 className="tc">Loading...</h1> :




            <div className="tc">
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filterdRobots} />

                    </ErrorBoundry>
                </Scroll>

            </div>





    }


}

export default App;