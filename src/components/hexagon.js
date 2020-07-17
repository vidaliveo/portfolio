import React from 'react';
import styled from 'styled-components';
import {colors} from '../util/css-util';

const hexacolorinfos = [
	[
		{
			colorCode : colors.amethyst,
			colorName : 'amethyst'
		}
	],
	[
		{
			colorCode : colors.chalcedony,
			colorName : 'chalcedony'
		},
		{
			colorCode : colors.rosequartz,
			colorName : 'rosequartz'
		}
	],
	[
		{
			colorCode : colors.citrine,
			colorName : 'citrine'
		}
	],
	[
		{
			colorCode : colors.turquoise,
			colorName : 'turquoise'
		},
		{
			colorCode : colors.bixbite,
			colorName : 'bixbite'
		}
	],
	[
		{
			colorCode : colors.beryl,
			colorName : 'beryl'
		}
	]
]

export default function Hexagon({hexaProps}){
	const {x, y, stroke, info, mainColor, colorClick, hexaClick} = hexaProps;
	const hexagon = `M 0 ${y} L ${x/2} 0 L ${x*1.5} 0 L ${x*2} ${y} L ${x*1.5} ${y*2} L ${x/2} ${y*2} Z`;
	const hexapoly = `25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%`
	
	// color hexagons
	const xC = x/3.5;
	const yC = Math.sqrt(Math.pow(xC, 2) - Math.pow((xC/2), 2));
	const strokeC = (xC/5);
	const totalC = 5;
	const hexagroupWidthC = (xC*5)+(strokeC*6);
	const hexarowHeightC = (yC + strokeC);
	const hexarowMarginC = (xC + strokeC)*1.5-xC/2;
	const rowsC = 5;
	const hexapolyC = `25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%`;

	return(
		<StyledHexagon 
			x={x} 
			y={y} 
			stroke={stroke} 
			mainColor={mainColor} 
			hexagon={hexagon} 
			hexapoly={hexapoly}
			xC={xC}
			hexagroupWidthC={hexagroupWidthC}
			hexarowHeightC={hexarowHeightC}
			hexarowMarginC={hexarowMarginC}
			onClick={hexaClick}
			className={`${info.display ? 'show' : 'hide'} ${info.hasButtons ? 'paint' : ''}`}
		>
			<span className={info.hasButtons ? 'hide' : 'show'}>{info.text}</span>
			{info.hasButtons &&
				<div className="hexagroupC">
					{hexacolorinfos.map((colorinfos, indexOuter) =>
						<div key={indexOuter} className={`hexarowC ${indexOuter % 2 ? 'hexarowEvenC' : 'hexarowOddC'}`}>
							{colorinfos.map((colorinfo, indexInner) =>
								<StyledColorHexagon 
									colorinfo={colorinfo} 
									key={indexInner} 
									xC={xC} 
									yC={yC} 
									strokeC={strokeC} 
									hexapoly={hexapoly}
									className={`hexacolor ${colorinfo.colorName}`}
									onClick={() => colorClick(colorinfo.colorCode)}
								>{colorinfo.color}</StyledColorHexagon>
							)}
						</div>
					)}
				</div>
			}
			<svg
				version="1.1" 
				xmlns="http://www.w3.org/2000/svg" 
				viewBox={`0 0 ${x*2} ${y*2}`}
				className={info.hasButtons ? 'hide' : 'show'}
			>	
				<path d={hexagon}></path>
			</svg>	
		</StyledHexagon>
	)
}

const StyledHexagon = styled.div`
	width: ${({x, stroke}) => x*2 + stroke}px;
	height: ${({y, stroke}) => y*2 + stroke}px;
	text-align: center;
	margin: 0 ${({x,stroke}) => x/2 + stroke}px;
	padding: ${({stroke}) => stroke/2}px;
	clip-path: polygon(${({hexapoly}) => hexapoly});
	position: relative;	
	cursor: pointer;
	visibility: hidden;
	&.show{
		visibility: visible;
	}
	
	.hide{
		display: none;
	}
	
	.hexagroupC{
		width: ${({hexagroupWidthC}) => hexagroupWidthC}px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		position: relative;
		.hexarowC{
			width: ${({hexagroupWidthC}) => hexagroupWidthC}px;
			height: ${({hexarowHeightC}) => hexarowHeightC}px;
			display: flex;
			flex-direction: row;
		}
		.hexarowOddC{
			margin-left: ${({hexarowMarginC}) => hexarowMarginC}px;
		}
		.hexarowEvenC{
			width: ${({x, stroke}) => x*6}px;
			margin-left: -${({xC}) => xC/2}px;
		}
	}
	
	span{
		width: 100%;
		height: 100%;
		line-height: ${({y, stroke}) => y*1.75+stroke*6}px;
		color: rgb(${({mainColor}) => mainColor});
		background-color: rgba(${({mainColor}) => mainColor},0);
		font-size: ${({x}) => x/3.5}px;
		letter-spacing: ${({stroke}) => stroke}px;
		position: absolute;
		top: ${({stroke}) => stroke}px;
		left: ${({stroke}) => stroke}px;
		z-index: 10;
		clip-path: polygon(${({hexapoly}) => hexapoly});
		&:hover{
			background-color: rgba(${({mainColor}) => mainColor},0.7);
		}
	}
	
	svg{
		width: ${({x, stroke}) => x*2}px;
		height: ${({y, stroke}) => y*2}px;
		background-color: rgb(${({mainColor}) => mainColor});
		padding: ${({stroke}) => stroke}px;
		transform: translate(0, 0);
		fill-opacity: 0.8;
		stroke-opacity: 0.5;
		clip-path: polygon(${({hexapoly}) => hexapoly});
		&:hover{
			fill-opacity: 0.3;
		}
		text{
			font-size: 30px;
		}
	}
	
	&.paint{
		cursor: default;
	}
`

const StyledColorHexagon = styled.div`
	width: ${({xC, strokeC}) => xC*2 + strokeC}px;
	height: ${({yC, strokeC}) => yC*2 + strokeC}px;
	background-color: rgb(${({mainColor}) => mainColor});
	text-align: center;
	margin: 0 ${({xC,strokeC}) => xC/2 + strokeC}px;
	padding: ${({strokeC}) => strokeC}px;
	clip-path: polygon(${({hexapoly}) => hexapoly});
	z-index: 10;
	box-sizing: border-box;
	&:hover{
		background-color: rgba(${({mainColor}) => mainColor},0.7);
	}
	&.amethyst{background-color: rgb(${colors.amethyst})}
	&.chalcedony{background-color: rgb(${colors.chalcedony})}
	&.rosequartz{background-color: rgb(${colors.rosequartz})}
	&.turquoise{background-color: rgb(${colors.turquoise})}
	&.beryl{background-color: rgb(${colors.beryl})}
	&.bixbite{background-color: rgb(${colors.bixbite})}
	&.citrine{background-color: rgb(${colors.citrine})}
`

const StyledHexainfo = styled.div`
	background-color: red;
	clip-path: polygon(${({hexapoly}) => hexapoly});
`



