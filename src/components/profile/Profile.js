import React from 'react';

import './Profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      age: this.props.user.age
    }
  }

  onFormChange = (event) => {
    switch (event.target.name) {
      case 'user-name':
        this.setState({name: event.target.value})
        break;
      case 'user-age':
        this.setState({age: event.target.value})
        break;
      default:
        return;
    }
  }

  onProfileUpdate = (data) => {
    fetch(`http://localhost:3000/profile/${this.props.user.id}`, {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({ 'formInput': data })
    }).then(response => {
      this.props.toggleModal();
      this.props.loadUser({...this.props.user, ...data});
    }).catch(err => console.log(err))
  }

  render() {
    const { user } = this.props;
    const { name, age } = this.state;
    return (
      <div className='profile-modal'>
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
      <main className="pa4 black-80">
      <img
      src="https://cdn.faceshapeapp.com/q/K9b6nbE_zar8qAX1.jpg?w=640"
      className="h3 w3 dib" alt="avatar"
      />
      <h1>{this.state.name}</h1>
      <h5>{user.email}</h5>
      <h6>{`Image submitted: ${user.entries}`}</h6>
      <h6>{`Member since: ${new Date(user.joined).toLocaleDateString()}`}</h6>
      <hr/>
      <label className="mt2 fw6" htmlFor="user-name">Username</label>
      <input
        onChange={this.onFormChange}
        placeholder={user.name}
        className="pa2 w-100"
        type="text"
        name="user-name"
        id="name"
      />
      <label className="mt2 fw6" htmlFor="user-age">Age</label>
      <input
        onChange={this.onFormChange}
        placeholder='22'
        className="pa2 w-100"
        type="text"
        name="user-age"
        id="age"
      />
      <div className='mt4' style={{ display:'flex', justifyContent:'space-evenly' }}>
      <button
        onClick={() => this.onProfileUpdate({name, age})}
        className='b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20'>
        Save
      </button>
      <button className='b pa2 grow pointer hover-white w-40 bg-light-red b--black-20'
      onClick={this.props.toggleModal} >
      Cancel
      </button>
      </div>
      </main>
      </article>
      </div>
    )
  }
}

export default Profile;
