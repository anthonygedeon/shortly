import React, { useState } from 'react';
import styled from 'styled-components';


import Header from './Header';
import UrlShortener from './UrlShortener/index';
import Main from './Main';

function App() {
	return (
		<div className="app">
			<Header />
            <UrlShortener />
            <Main />
		</div>
	);
}

export default App;
