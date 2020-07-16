import {css} from 'styled-components';

export const colors = {
	amethyst : '195,148,252',
	chalcedony : '221,227,255',
	rosequartz : '249,193,219',
	turquoise : '113,204,239',
	beryl : '102,205,170',
	bixbite : '253,88,126',
	citrine : '241,224,186',
	
	grayWhite: '255,255,250',
	grayUltraLight: '245,245,245',
	grayMediumLight : '171,171,171',
	grayMedium : '71,71,71',
	grayMediumDark : '46,46,46',
	grayDark : '33,33,33',
	grayUltraDark : '18,18,18',
}

export function flex(direction, justfifyContent = 'flex-start'){
	return css`
		display: flex;
		flex-direction: ${direction};
		justify-content: ${justfifyContent};
	` 
}

export function myFont(){
	return css`
		@font-face{
			font-family: myFont;
			src: url('./fonts/Myfont-Regular.ttf');
			src: url('./fonts/Myfont-Regular.ttf') format('truetype'),url('./fonts/Myfont-Regular.otf') format('opentype');
		}
	` 
}