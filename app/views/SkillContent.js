import React from 'react';

import AMUI from 'amazeui-react';

let Container = AMUI.Container,
	AvgGrid = AMUI.AvgGrid,
	Image = AMUI.Image;

export default class SkillContent extends React.Component {

	render() {
		return(
			<div id="skill-block" className="main-block">
			  <Container>
			  	<h2 className="font-title">{this.props._('skill_title')}</h2>
				<AvgGrid sm={3} >
					<li>
						<Image className="thumbnail" src="assets/images/js_icon.jpeg" circle/>
						<span className="block padding">Javascript + Nodejs</span>
					</li>
					<li>
						<Image className="thumbnail" src="assets/images/laravel_icon.png" circle/>
						<span className="block padding">Laravel</span>
					</li>
					<li>
						<Image className="thumbnail" src="assets/images/more-icon.svg" circle/>
						<span className="block padding">{this.props._('skill_more')}</span>
					</li>
				</AvgGrid>	
			  </Container>
			</div>
		);
	}

}