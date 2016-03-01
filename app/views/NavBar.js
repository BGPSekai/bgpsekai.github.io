import React from 'react';

import AMUI from 'amazeui-react';

let Nav = AMUI.Nav,
  Topbar = AMUI.Topbar,
  CollapsibleNav = AMUI.CollapsibleNav,
  NavItem = AMUI.NavItem,
  Sticky = AMUI.Sticky,
  ScrollSpyNav = AMUI.ScrollSpyNav,
  Container = AMUI.Container;


export default class NavBar extends React.Component {

	/*
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
	*/
	render() {
	    return(
	    <Sticky>
		  <ScrollSpyNav offsetTop={70}>
		  	<Nav className="scrollspy-nav" data-am-sticky>
		  	  <Container>
		  	  	<ul className="topbar-nav">
		  	      <li><a href="#nav_img">頁首</a></li>
		  	      <li><a href="#skill-block">技能</a></li>
		  	      <li><a href="#works-block">作品</a></li>
		  	      <li><a href="#members-block">成員</a></li>
		  	    </ul>
		  	  </Container>
		  	</Nav>
		  </ScrollSpyNav>
		</Sticky>
	    );
	}
};