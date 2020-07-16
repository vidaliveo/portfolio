import React from 'react';
import styled from 'styled-components';
import Hexagon from './components/hexagon';
import {colors} from './util/css-util';

const hexainfos = [
	[
		{},
		{},
		{
			id: 1,
			hasButtons: true,
			display: true
		}
	],
	[
		{},
		{},
		{},
		{}
	],
	[
		{},
		{
			id: 2,
			linkto: '/about',
			text: 'about',
			display: true
		},
		{}
	],
	[
		{},
		{},
		{
			id: 3,
			linkto: '/contact',
			text: 'contact',
			display: true
		},
		{}
	],
	[
		{},
		{
			id: 4,
			linkto: '/projecten',
			text: 'projecten',
			display: true
		},
		{}
	],
		[
		{
			
		},
		{},
		{},
		{}
	],
	[
		{},
		{},
		{}
	]
]
	
export default class Main extends React.Component{
	state = {
		pageContent: 'home',
		mainColor: '195,148,252'
	}
	hexaClick = (hexaText) => {
		this.setState({
			pageContent : hexaText
		})
	}
	colorClick = (colorName) => {
		this.setState({
			mainColor : colorName
		})
		console.log(this.state, colorName);
	}
	
	render(){
		const x = 130;
		const y = Math.sqrt(Math.pow(x, 2) - Math.pow((x/2), 2));
		const stroke = (x/100)*3; // *? -> stroke width
		const total = 7;
		const hexagroupWidth = (x + stroke/2)*(Math.round(total*1.5)+ 0);
		const hexarowHeight = (y + stroke);
		const hexarowMargin = (x + stroke)*1.5-x/2;
		const rows = 6;
		const hexapoly = `25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%`;

		// hexanav
		const xN = x/3.5;
		const yN = Math.sqrt(Math.pow(xN, 2) - Math.pow((xN/2), 2));
		const strokeN = (xN/5);
		const hexagroupWidthN = (xN*5)+(strokeN*6);
			
		const {mainColor} = this.state;
			
		return(
			<StyledMain className={this.state.pageContent} mainColor={mainColor}>
				<nav>
					{hexainfos.map((infos, indexOuter) =>
						<div key={indexOuter} className="hexacol">
							{infos.map((info, indexInner) =>
								<Hexagon 
									info={info} 
									key={indexInner} 
									hexaProps={{x, y, stroke, info, 
										colorClick:() => this.colorClick(), 
										hexaClick:() => this.hexaClick(info.text)}}
								/>
							)}
						</div>
					)}
				</nav>
				{this.state.pageContent === 'contact' ? 
					<StyledMain className="content contact">
						
						<h1>Contact</h1>
						<form action="" method="GET">
							<fieldset>
								<label htmlFor="name">Naam</label>
								<input type="text" name="name" id="name" placeholder="Name" />
								
								<label htmlFor="mail">Email</label>
								<input type="email" name="mail" id="mail" placeholder="Email" />
								
								<label htmlFor="topic">Onderwerp</label>
								<input type="text" name="topic" id="topic" placeholder="Topic" />
								
								<label htmlFor="message">Bericht</label>
								<textarea id="message"></textarea>
								
								<input type="submit" name="submit" id="submit" value="Versturen"/>
							</fieldset>
						</form>
					</StyledMain> 
				: this.state.pageContent === 'about' ? 
					<StyledMain className="content about">
						<h2>Over mij</h2>					
						<p>Als front-end developer vind ik het leuk om creatieve designs te maken en deze om te zetten naar werkende websites. Ik vind het belangrijk om creativiteit en UX te combineren om unieke producten te maken die prettig aanvoelen. Door mijn leergierigheid blijf ik in ontwikkeling en vind ik manieren om uitdagende problemen op te lossen.</p>
						<div className="myInfo">
							<div>
								<ul className="skills">
									<li>- HTML</li>
									<li>- CSS
										<ul>
											<li>Sass</li>
											<li>LESS</li>
										</ul>
									</li>
									<li>- JavaScript
										<ul>
											<li>jQuery</li>
											<li>React</li>
										</ul>
									</li>
									<li>- PHP</li>
									<li>OOP</li>
								</ul>
							</div>
							<div>
								<ul className="profile">
									<li>Wieke Lemmens</li>
									<li>19-03-1994</li>
									<li>wieke.lemmens@outlook.com</li>
									<li>Eindhoven</li>
								</ul>
							</div>
						</div>
					</StyledMain>
				:
					<StyledMain x={x} hexagroupWidth={hexagroupWidth} hexarowHeight={hexarowHeight} hexarowMargin={hexarowMargin}>
						<div className="hexagroup">
							{hexainfos.map((infos, indexOuter) =>
								<div key={indexOuter} className={`hexarow ${indexOuter % 2 ? 'hexarowEven' : 'hexarowOdd'}`}>
									{infos.map((info, indexInner) =>
										<Hexagon 
											info={info} 
											key={indexInner} 
											hexaProps={{x, y, stroke, info, mainColor, 
												colorClick: this.colorClick, 
												hexaClick:() => this.hexaClick(info.text)}}
										/>
									)}
								</div>
							)}
						</div>
					</StyledMain>
				}
			</StyledMain>
		);	
	}
}

const StyledMain = styled.section`
	width: 100vw;
	height: 100vh;
	color: rgb(${({mainColor}) => mainColor});
	
	nav{
		// width: ${({xN}) => xN}px;
		top: 0;
		hexacolumn{
			
		}
		.hide, .paint{
			display: none;
		}
	}
	&.home{
		nav{
			display: none;
		}
	}
	
	.hexagroup{
		width: ${({hexagroupWidth}) => hexagroupWidth}px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		.hexarow{
			width: ${({hexagroupWidth}) => hexagroupWidth}px;
			height: ${({hexarowHeight}) => hexarowHeight}px;
			margin-left: -${({x}) => x/2}px;
			display: flex;
			flex-direction: row;
		}
		.hexarowOdd{
			margin-left: ${({hexarowMargin}) => hexarowMargin}px;
		}
	}
	.about, .contact{
		max-width: 800px;
		line-height: 33px;
		font-size: 1.8em;
		letter-spacing: 3px;
		word-spacing: 5px;
		margin: 20vh auto;
		h1{
			text-transform: uppercase;
		}
	}
	
	.about{
		.myInfo{
			display: flex;
			flex-direction: column;
			.profile{
			
			}
			.skills{
				margin-left: 100px;
				&>li{
					margin-top: 15px;
					ul{
						padding-left: 60px;
					}
				}
				&>li:first-child{
					margin-top: 0;
				}
			}			
		}	
	}
	
	.contact{
		max-width: 900px;
		line-height: 25px;
		font-size: 1.3em;
		letter-spacing: 3px;
		word-spacing: 5px;
		margin: 20vh auto;
		h1{
			text-align: center;
		}
		form{
			width: 500px;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			font-family: Calibri, sans-serif;
			fieldset{
				width: 100%;
				background-color: rgb(${colors.grayMediumDark});
				border-color: rgb(${({mainColor}) => mainColor});
				border-radius: 5px;
				margin: 10px 0;
			}
			
			div{
				display: flex;
				flex-direction: row;
				label{
					order: 2;
				}
				input{
					width: 30px;
					margin-top: 12px;
					order: 1;
				}
			}
		}

		label{
			width: 50%;
			height: 35px;
			line-height: 35px;
			text-transform: uppercase;
			margin-top: 10px;
			font-weight: bold;
			display: inline-block;
			box-sizing: border-box;
		}
		
		input, select, textarea, input[type="submit"]{
			background-color: rgb(${colors.grayUltraLight});
			font-family: Calibri, sans-serif;
			border: 0;
			border-radius: 5px;
			&:hover{
				background-color: rgb(${({mainColor}) => mainColor});
			}
		}

		input, select{
			width: 50%;
			height: 35px;
			font-size: 0.6em;
			padding: 0 10px;
		}
		
		input[type="submit"]{
			width: 100%;
			background-color: rgb(${({mainColor}) => mainColor});
			margin-top: 10px;
			cursor: pointer;
		}

		textarea{
			width: 100%;
			height: 300px;
			font-size: 1em;
		}
	}
`

