import styled from "styled-components";

const theme = {
   dark: {
      backgroundColor: "hsl(207, 26%, 17%)",
      color: "white"
   },
   light: {
      backgroundColor: "hsl(0, 0%, 98%)",
      color: "hsl(200, 15%, 8%)"
   },
   fontSize: {
      default: "14px",
      detail: "16px"
   },
   others: {
      darkBlueElements: "hsl(209, 23%, 22%)",
      darkGrayLightModeInput: "hsl(0, 0%, 52%)"
   }
}

const Container = styled.div`
		background-color: ${(props) => props.theme.dark.backgroundColor};
		color: ${(props) => props.theme.dark.color};
		font-size: ${(props) => props.theme.fontSize.default};
		min-height: 100vh;
	`;

export { theme, Container };