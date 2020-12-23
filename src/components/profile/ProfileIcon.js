import React, { Component } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';


class ProfileIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div className='pa2 tc'>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle
            tag="span"
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownOpen}
          >
            <img
              src="https://cdn.faceshapeapp.com/q/K9b6nbE_zar8qAX1.jpg?w=640"
              className="br-100 h3 w3 dib" alt="avatar"
            />
          </DropdownToggle>
          <DropdownMenu className="mr5 mt4 pa2 shadow-5">
            <DropdownItem onClick={this.props.toggleModal}>View Profile</DropdownItem>
            <DropdownItem onClick={() => this.props.onRouteChange('signout')}>Sign Out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    )
  }
}

export default ProfileIcon;
