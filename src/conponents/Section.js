import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

export default function Section({
	title,
	desc,
	leftBtnText,
	rightBtnText,
	bg,
}) {
	return (
		<Wrap bg={bg}>
			<Fade direction="up" delay="10">
				<ItemText>
					<h1>{title}</h1>
					<p>{desc}</p>
				</ItemText>
			</Fade>

			<Buttons>
				<Fade direction="up" delay="10">
					<ButtonGroup>
						<LeftButton>{leftBtnText}</LeftButton>
						{rightBtnText && <RightButton>{rightBtnText}</RightButton>}
					</ButtonGroup>
				</Fade>
				<DownArrow src={`/images/down-arrow.svg`} />
			</Buttons>
		</Wrap>
	);
}

const Wrap = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: orange;
	background-image: ${(props) => `url("/images/${props.bg}")`};
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const ItemText = styled.div`
	padding-top: 15vh;
	text-align: center;
`;
const ButtonGroup = styled.div`
	display: flex;
	margin-bottom: 30px;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
const LeftButton = styled.div`
	background-color: rgba(23, 26, 32, 0.8);
	height: 40px;
	width: 206px;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
	opacity: 0.85;
	text-transform: uppercase;
	font-size: 12px;
	cursor: pointer;
	margin: 8px;
`;
const RightButton = styled(LeftButton)`
	background-color: white;
	opacity: 0.65;
	color: black;
`;

const DownArrow = styled.img`
	margin-top: 10px;
	height: 40px;
	overflow-x: hidden;
	animation: annimation infinite 1.5s;
`;

const Buttons = styled.div`
	display: flex;
	flex-direction: column;
`;
