import React from "react";
import styled from "styled-components";
import Section from "./Section";

export default function Home() {
	return (
		<Container>
			<Section
				title="Model S"
				desc="Order online for Touchless Delivery"
				bg="model-s.jpg"
				leftBtnText="custom Order"
				rightBtnText="Existing inventory"
			/>
			<Section
				title="Model Y"
				desc="Order online for Touchless Delivery"
				bg="model-y.jpg"
				leftBtnText="custom Order"
				rightBtnText="Existing inventory"
			/>
			<Section
				title="Model 3"
				desc="Order online for Touchless Delivery"
				bg="model-3.jpg"
				leftBtnText="custom Order"
				rightBtnText="Existing inventory"
			/>
			<Section
				title="Model X"
				desc="Order online for Touchless Delivery"
				bg="model-x.jpg"
				leftBtnText="custom Order"
				rightBtnText="Existing inventory"
			/>
			<Section
				title="Lowerst Cost Solar Pannels in America"
				desc="Money back gaurantee"
				bg="solar-panel.jpg"
				leftBtnText="custom Order"
				rightBtnText="Existing inventory"
			/>
			<Section
				title="Accessories"
				desc=""
				bg="accessories.jpg"
				leftBtnText="Shop now"
				// rightBtnText="Existing inventory"
			/>
		</Container>
	);
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
`;

// Home.Container = ({ children, ...restProps }) => {
//     return <Container {...restProps}>{children}</Container>
// }
