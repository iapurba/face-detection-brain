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
      <div className='tc'>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle
            tag="span"
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownOpen}
          >
            <img
              src="https://cdn.faceshapeapp.com/q/K9b6nbE_zar8qAX1.jpg?w=640"
              alt="avatar"
              style={{height:'50px', width:'50px', border:'3px solid #DEF2FE', borderRadius:'50px',     cursor:'pointer'}}
            />
          </DropdownToggle>
          <DropdownMenu className="mr6 mt4 pa2 shadow-5">
            <DropdownItem onClick={this.props.toggleModal}>View Profile</DropdownItem>
            <DropdownItem onClick={() => this.props.onRouteChange('signout')}>Sign Out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    )
  }
}

export default ProfileIcon;
