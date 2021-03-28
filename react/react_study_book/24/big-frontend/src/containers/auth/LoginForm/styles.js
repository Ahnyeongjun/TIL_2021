import styled from "styled-components";

export const MainWrapper = styled.div`
	width: 400px;
	height: 500px;
	background-color: #ffffff;
	margin-left: 175px;
	border-radius: 40px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const LoginWrapper = styled.div`
	border-bottom: 1px solid #b3b3b3;
	width: 80%;
	height: 50%;
	margin-bottom: 40px;
`;

export const LoginLabel = styled.p`
	font-size: 20px;
	font-weight: bold;
	color: #646464;
	margin: 0;
	margin-bottom: 10px;
`;

export const LoginInput = styled.input`
	width: calc(100% - 10px);
	height: 40px;
	border: 1px solid #d4d4d4;
	border-radius: 5px;
	padding-left: 10px;
	border: ${(props) => (props.isError ? "1px solid #ff0000" : "1px solid #d4d4d4")};

	:nth-child(1) {
		margin-bottom: 20px;
	}
`;

export const LoginErrorText = styled.p`
	display: block;
	width: 100%;
	height: 10px;
	font-size: 10px;
	color: #ff2a2a;
	visibility: ${(props) => (props.isError ? "visible" : "hidden")};
`;

export const LoginButton = styled.button`
	width: 100%;
	height: 40px;
	margin-top: 10px;
	background-color: #7c6f6f;
	color: #ffffff;
	border: none;
	border-radius: 5px;
	font-size: 20px;
	font-weight: bold;
`;

export const RegisterButton = styled.button`
	width: 80%;
	height: 40px;
	background-color: #f3f0f0;
	color: #515151;
	border: none;
	border-radius: 5px;
	font-size: 20px;
	font-weight: bold;
`;
