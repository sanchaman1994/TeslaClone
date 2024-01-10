/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styled from "styled-components";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
// fontAwesome.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faXmark);

export default function Header() {
	const [burgerStats, setBurgerStats] = useState(false);
	const cars = useSelector(selectCars);
	// console.log(cars);

	return (
		<Container>
			<a href="/">
				<img src="/images/logo.svg" alt="logo" />
			</a>
			<Menu>
				{cars &&
					cars.map((car, index) => (
						<a key={index} href="#">
							{car}
						</a>
					))}
			</Menu>
			<RightMenu>
				<a href="#">Shop</a>
				<a href="#">Tesla Account</a>
				<CustomMenu
					onClick={() => {
						setBurgerStats(true);
					}}
				>
					<FontAwesomeIcon icon={faBars} style={{ fontSize: "1.5em" }} />
				</CustomMenu>
			</RightMenu>
			<BurgerNav show={burgerStats}>
				<CloseWrap>
					<CustomClose onClick={() => setBurgerStats(false)}>
						<FontAwesomeIcon icon={faXmark} style={{ fontSize: "1.5em" }} />
					</CustomClose>
				</CloseWrap>
				{cars &&
					cars.map((car, index) => (
						<li key={index}>
							<a key={index} href="#">
								{car}
							</a>{" "}
						</li>
					))}
			</BurgerNav>
		</Container>
	);
}
const Container = styled.div`
	z-index: 10;
	top: 0;
	left: 0;
	right: 0;
	min-height: 60px;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
`;
const Menu = styled.div`
	display: flex;
	align-items: center;
	flex: 1;

	a {
		font-weight: 600;
		text-transform: uppercase;
		padding: 0 10px;
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

const RightMenu = styled.div`
	display: flex;
	align-items: center;
	a {
		font-weight: 600;
		text-transform: uppercase;
		margin-right: 10px;
	}
`;
const CustomMenu = styled.div`
	cursor: pointer;
`;

const BurgerNav = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	background-color: white;
	width: 300px;
	z-index: 16;
	list-style-type: none;
	padding: 20px;
	transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
	transition: 0.2s ease-in;

	li {
		padding: 15px 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	}
	a {
		font-weight: bold;
	}
`;

const CustomClose = styled.div`
	cursor: pointer;
`;
const CloseWrap = styled.div`
	display: flex;
	justify-content: flex-end;
`;
