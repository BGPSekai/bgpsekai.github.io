import React from 'react';

import AMUI from 'amazeui-react';

let Nav = AMUI.Nav,
  Topbar = AMUI.Topbar,
  CollapsibleNav = AMUI.CollapsibleNav,
  NavItem = AMUI.NavItem,
  Sticky = AMUI.Sticky;


export default class NavBar extends React.Component {

	render() {
	    return(
		  <Sticky>
		    <Topbar brand={this.props._('site_title')} toggleNavKey="nav">
		       <CollapsibleNav eventKey="nav">
		        <Nav topbar>
		          <NavItem href="#title" active={true}>{this.props._('site_index')}</NavItem>
		          <NavItem href="#about">{this.props._('site_about')}</NavItem>
		        </Nav>
		      </CollapsibleNav>
		    </Topbar>
		  </Sticky>
	    );
	}
};