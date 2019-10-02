import React from 'react';

class UserCard extends React.Component {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state

    constructor() {
        super();
        this.state = {
            userFollowers: []
        }
    }

    componentDidMount() {
        console.log("component did mount");
        fetch('https://api.github.com/users/dustinmyers/followers')
            .then(res => res.json())
            .then(result => { console.log(result); this.setState({ userFollowers: result }) })
            .catch(err => console.log('Error fetching followers.', err));
    }

    render() {
        return (
            <div className="userCard">
                {console.log("User", this.props.user)}
                <div className="user">
                    <img src={this.props.user.avatar_url}></img>
                    <p>{this.props.user.name}</p>
                    <p>{this.props.user.location}</p>
                </div>
                <div className="followers">
                    <h2>Followers:</h2>
                    <hr></hr>
                    {this.state.userFollowers.map((item) => <p>{item.login}</p>)}
                </div>
            </div>
        );
    }
}

export default UserCard;
