import styled from "styled-components";

const Container = styled.div`
		background-color: ${(props) => props.theme.backgroundColor};
		color: ${(props) => props.theme.color};
		font-size: 14px;
		min-height: 100vh;
	`;

export { Container };