import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';
import { setSearchField, requestRobots } from '../actions'
// import { requestRobots } from '../reducer';


const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch( requestRobots() )
    }  
      
}

class App extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         robots: [],
    //         // seacfield: ''
    //     };
    // }

    componentDidMount() {
        // console.log(this.props.store.getState())
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(res => res.json())
        //     .then(users => this.setState({ robots: users }));
        this.props.onRequestRobots();


    }

    // onSearchChange = (event) => {
    //     this.setState({ seacfield: event.target.value })



    //     // this.state.robots= filterdRobots;

    // }
    render() {
        // const { robots } = this.state;
        const { searchField, onSearchChange, robots, isPending, error} = this.props;
        const filterdRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return isPending ? <h1 className="tc">Loading...</h1> :




            <div className="tc">
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filterdRobots} />

                    </ErrorBoundry>
                </Scroll>

            </div>





    }


}

export default connect(mapStateToProps, mapDispatchToProps)(App);