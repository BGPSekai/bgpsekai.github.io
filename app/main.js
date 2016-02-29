import React from 'react';
import ReactDom from 'react-dom';
import AMUI from 'amazeui-react';

import L10nManager from './modules/L10nManager';

//Views
import NavBar from './views/Navbar.js';

var _ = L10nManager.get.bind(L10nManager);

let Grid = AMUI.Grid,
  Col = AMUI.Col,
  Nav = AMUI.Nav,
  NavItem = AMUI.NavItem,
  Sticky = AMUI.Sticky,
  Container = AMUI.Container;

class Index extends React.Component {
  
  render() {
    return (
	  <div id="root">
	  	<Sticky top={0}>
	    	<NavBar _={_}/>
	    </Sticky>
	    <Grid className="doc-g">
	      <Container className=".am-container">
	        <Col sm={12}>{_('just_do_it')}</Col>
	      </Container>
	    </Grid>
	  </div>
    );
  }

}

L10nManager.init( () => {
  ReactDom.render(<Index />, document.getElementById('root'));
});

