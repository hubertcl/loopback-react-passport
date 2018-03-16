import React, { Component } from 'react';
import axios from 'axios';
import MeetupItem from './MeetupItem';
import { getAccessToken } from '../services/AuthAccess';

class Meetups extends Component {
constructor(){
    super();
    this.state = {
        meetups: []
    }
}

componentWillMount(){
    console.log(">>>>>>>>>>")
    const access_token = getAccessToken()
    console.log(">>>>>>>>>>>> GET ACCESS TOKEN "+access_token);
    this.getMeetups(access_token);
}

getMeetups(access_token) {
    console.log("try to get meetups");
    axios.get('http://localhost:3000/api/meetups?access_token='+access_token)
        .then(response => {
            console.log("response.data")
            this.setState({meetups: response.data},()=>{
                console.log(this.state);
            })
        })
}

    render() {
        const meetupItems = this.state.meetups.map((meetup, i) =>{
			return(
				<MeetupItem key={meetup.id} item={meetup} />
			)
		})
		return (
			<div>
				<h1>Meetups</h1>
				<ul className="collection">{meetupItems}</ul>
			</div>
		)
    }
}

export default Meetups;