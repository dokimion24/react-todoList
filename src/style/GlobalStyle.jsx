import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
		box-sizing: border-box;
}
  html, body, div, span, h1, h2, h3, h4, h5, h6, p,
a, button, img, strong, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
footer, header, menu, nav, section, summary{
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
li {
	list-style-type: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
	color: black;
	text-decoration: none;
}
a:visited {
	color: black;
}

body {
  background: #e9ecef;
  display: flex;
}
`;
