import React, { Component } from 'react';
import axios from 'axios'

import Cards from '../../components/cards/Cards'
class Tasks extends Component {
    state = {
        tasksData: []
    };

    componentDidMount() {
        axios.get('http://api-rest-taskmanager-dojo.herokuapp.com/api/v1/tasks',
        {headers: {'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODIzODE5MDgsImV4cCI6MTU4Mjk4NjcwOH0.In-fSJ19gc4XWPGnw90AJM6a4chKwwObJp-tfr-JPkI'}})
        .then(res => {

            this.setState({
                tasksData: res.data.results
            });
        })
        .catch(err => {
            console.err('Error!')
        })
    }

    render() {
        const cardsView = (this.state.tasksData.length ?
            <Cards data={this.state.tasksData} /> :
            null);

        return(
            <div>{cardsView}</div>
            
        )
    }
}

export default Tasks;