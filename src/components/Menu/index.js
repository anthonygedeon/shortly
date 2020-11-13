import React, { useState } from 'react';
import styled from 'styled-components';

import { Visible } from '../../styles/Grid';
import { breakpoints, color } from '../../styles/variables';
import { PillButton } from '../Button';

const MenuModal = styled.div`
	border-radius: 10px;
	width: 100%;
    padding: 2.5em 2em;
    z-index: 10;
	display: block;
	position: absolute;
	margin-top: 2em;
	left: 0;
	background-color: hsl(258deg, 27%, 26%);
`;

const Menu = () => {
	const [menuShow, setMenuShow] = useState(false);

	const liItem = {
		marginBottom: '2em',
		fontWeight: '700',
		color: color.primary,
	};

	return (
		<>
			<Visible breakpoint={breakpoints.md} isVisible={true}>
				{menuShow ? (
					<MenuModal>
						<ul
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<li style={liItem}>
								<a href="#">Features</a>
							</li>
							<li style={liItem}>
								<a href="#">Pricing</a>
							</li>
							<li style={liItem}>
								<a href="#">Resources</a>
							</li>
							<hr
								style={{
									width: '100%',
									opacity: '.2',
									marginBottom: '2em',
								}}
							/>
							<li style={liItem}>
								<a href="#">Login</a>
							</li>
							<li style={{ width: '100%' }}>
								<PillButton
									style={{ width: '100%', padding: '1em 0' }}
								>
									Sign Up
								</PillButton>
							</li>
						</ul>
					</MenuModal>
				) : null}
			</Visible>
			<Visible breakpoint={breakpoints.md} isVisible={true}>
				<button
					style={{ outline: '0' }}
					onClick={() => {
						setMenuShow(!menuShow);
					}}
				>
					<svg
						
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke={color.primaryText}
						strokeWidth="3"
						strokeLinecap="square"
						strokeLinejoin="round"
						shapeRendering="crispEdges"
					>
						<line x1="3" y1="12" x2="21" y2="12"></line>
						<line x1="3" y1="4" x2="21" y2="4"></line>
						<line x1="3" y1="20" x2="21" y2="20"></line>
					</svg>
				</button>
			</Visible>
		</>
	);
};

export default Menu;
