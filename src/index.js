import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import {createGlobalStyle} from 'styled-components';
import {colors} from './util/css-util';

const color = colors.amethyst;

const grayMediumLight = '171,171,171';
const grayMedium = '71,71,71';
const grayMediumDark = '46,46,46';
const grayDark = '33,33,33';
const grayUltraDark = '18,18,18';

const GlobalStyle = createGlobalStyle`	
	*{
		box-sizing: border-box;
		user-select: none;
	}
	
	body{
		background-color: rgb(${grayDark});
		font-family: Calibri, sans-serif;
		margin: 0;
		padding: 20px;
		overflow-x: hidden;
		overflow-y: hidden;
	}
	
	ul{
		list-style: none;
		margin: 0;
		padding: 0;
	}
`

ReactDOM.render(
	<React.Fragment>
		<GlobalStyle/>
		<Main/>
	</React.Fragment>
	, document.getElementById('root')
);