import React from 'react';
import AMUI from 'amazeui-react';

let Container = AMUI.Container,
	AvgGrid = AMUI.AvgGrid,
	Image = AMUI.Image;

class WorkContent extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'WorkContent';
    }
    render() {
        return (
	        <div id="works-block" className="main-block">
	          <Container>
	          	<h2 className="font-title">{this.props._('works_title')}</h2>
	        	<AvgGrid sm={3} >
	        		<li>
	        		  <a href="http://acgn-moemoe.tw/2015/10/12/exhentai%E7%B6%B2%E7%AB%99%E4%B8%8B%E8%BC%89%E5%99%A8beta/">
	        			<Image className="thumbnail" src="assets/images/works-Hentai.jpg" thumbnail radius/>
	        			<span className="block padding">{this.props._('works_1')}</span>
	        		  </a>
	        		</li>
	        		<li>
	        		  <a href="https://github.com/a9650615/myownrpg">
	        			<Image className="thumbnail" src="assets/images/works-rpg.jpg" thumbnail radius/>
	        			<span className="block padding">{this.props._('works_2')}</span>
	        		  </a>
	        		</li>
	        		<li>
	        		  <a href="https://github.com/a9650615/TaiKu">
	        			<Image className="thumbnail" src="assets/images/works-TaiKu.jpg" thumbnail radius/>
	        			<span className="block padding">{this.props._('works_3')}</span>
	        		  </a>
	        		</li>
	        	</AvgGrid>
	        	<h3 className="font-title2">{this.props._('works_want_to_do')}</h3>
	        	<span className="block padding">{this.props._('works_content')}</span>
	          </Container>
	        </div>
        );
    }
}

export default WorkContent;
