import React from 'react';
import ReactDom from 'react-dom';
import AMUI from 'amazeui-react';

import L10nManager from './modules/L10nManager';

//Views
import NavBar from './views/Navbar.js';
import SkillContent from './views/SkillContent.js';
import WorkContent from './views/WorkContent.js';
import Members from './views/Members.js';

var _ = L10nManager.get.bind(L10nManager);

let Grid = AMUI.Grid,
  Col = AMUI.Col,
  Nav = AMUI.Nav,
  NavItem = AMUI.NavItem,
  Sticky = AMUI.Sticky,
  Topbar = AMUI.Topbar,
  Container = AMUI.Container;

class Index extends React.Component {
  
  render() {
    return (
	  <div id="root">
	    <Topbar id="topbar" brand={_('site_title')}>
	    </Topbar>
	    <Grid className="doc-g">
	      <div id="nav_img"></div>
	      <div className="navholder table main-block fill">
	      	<Container className="table_cell center">
	      	  <Col sm={12}>
	      	  	<p id="title">{_('just_do_it')}<span className="cursor-blink"></span></p>
	      	  </Col>
	      	</Container>
	      </div>
	    </Grid>
	    <NavBar _={_}/>
	    <SkillContent _={_}/>
	    <WorkContent _={_}/>
	    <Members _={_}/>
	    <footer className="am-footer am-footer-default">
	      <div className="am-footer-miscs">
	    	<p>©2016,YEEE!!!</p>
	      </div>
	    </footer>
	  </div>
    );
  }

}

L10nManager.init( () => {
  ReactDom.render(<Index />, document.getElementById('root'));
});

