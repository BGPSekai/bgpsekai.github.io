import React from 'react';

import AMUI from 'amazeui-react';

let Nav = AMUI.Nav,
  NavItem = AMUI.NavItem;


export default class NavBar extends React.Component {

	render() {
	    return(
		  <Nav pills>
		    <NavItem href="#title">{this.props._('site_title')}</NavItem>
		    <NavItem href="#about">{this.props._('site_about')}</NavItem>
	      </Nav>
	    );
	}
};