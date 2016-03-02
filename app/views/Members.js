import React from 'react';

import AMUI from 'amazeui-react';

let Container = AMUI.Container,
	AvgGrid = AMUI.AvgGrid,
	Image = AMUI.Image;

class Members extends React.Component {

    constructor(props) {
        super(props);
        this.displayName = 'Members';
    }

    render() {
        return(
        	<div id="members-block" className="main-block">
        	  <Container>
        	  	<h2 className="font-title">{this.props._('members_title')}</h2>
        		<AvgGrid sm={3} >
        			<li>
        				<Image className="thumbnail" src="assets/images/JB.jpg" circle/>
        				<span className="block padding">{this.props._('member_JB')}</span>
        			</li>
        			<li>
        				<Image className="thumbnail" src="assets/images/WJ.jpg" circle/>
        				<span className="block padding">{this.props._('member_WJ')}</span>
        			</li>
        			<li>
        				<Image className="thumbnail" src="assets/images/MY.jpg" circle/>
        				<span className="block padding">{this.props._('member_MY')}</span>
        			</li>
        		</AvgGrid>	
        	  </Container>
        	</div>
        );
    }

}

export default Members;
