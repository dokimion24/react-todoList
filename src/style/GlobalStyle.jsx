import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
		box-sizing: border-box;
		--box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
		--border-color: #e9ecef;
		--font-color: #002790;

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

input{
	border: none;
}

input:focus {
	outline: none;
	border-bottom: 1px solid var(--font-color);
}

body {
	font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
	height: 100vh;
	background: #e9ecef;
	display: flex;
	justify-content: center;
	align-items: center;
}
`;
