import React, { useState } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components'

import Menu from './Menu/index';

import { Visible } from '../styles/Grid';
import { breakpoints, color } from '../styles/variables';
import { PillButton } from './Button';

const Navigation = () => {
	return (
		<>
			<Menu />
			<Visible
				breakpoint={breakpoints.md}
				isVisible={false}
				style={{ width: '100%' }}
			>
				<ul
					style={{
						width: '100%',
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<li
						style={{
							marginRight: '2em',
							fontWeight: '700',
							color: 'hsl(257, 7%, 63%)',
						}}
					>
						<a href="#">Features</a>
					</li>
					<li
						style={{
							marginRight: '2em',
							fontWeight: '700',
							color: 'hsl(257, 7%, 63%)',
						}}
					>
						<a href="#">Pricing</a>
					</li>
					<li
						style={{
							marginRight: 'auto',
							fontWeight: '700',
							color: 'hsl(257, 7%, 63%)',
						}}
					>
						<a href="#">Resources</a>
					</li>
					<li
						style={{
							marginRight: '2em',
							fontWeight: '700',
							color: 'hsl(257, 7%, 63%)',
						}}
					>
						<a href="#">Login</a>
					</li>
					<li>
						<PillButton>Sign Up</PillButton>
					</li>
				</ul>
			</Visible>
		</>
	);
};

export default Navigation;
