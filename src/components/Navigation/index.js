import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Hidden, Visible } from 'react-grid-system';

import Menu from '../Menu/index';
import { PillButton } from '../Button';

import { NavContainer, NavItem } from './style';

const Navigation = () => {
	return (
		<>
			<Visible xs sm md>
				<Menu />
			</Visible>
			<Visible
				lg
				xl
				xxl
				css={`
					width: 100%;
				`}
			>
				<NavContainer>
					<NavItem>
						<Link to="/features">Features</Link>
					</NavItem>
					<NavItem>
						<Link to="pricing">Pricing</Link>
					</NavItem>
					<NavItem push={'auto'}>
						<Link to="/resources">Resources</Link>
					</NavItem>
					<NavItem>
						<Link to="/login">Login</Link>
					</NavItem>
					<NavItem push={'0'}>
						<Link to="/sign-up">
							<PillButton>Sign Up</PillButton>
						</Link>
					</NavItem>
				</NavContainer>
			</Visible>
		</>
	);
};

export default Navigation;
