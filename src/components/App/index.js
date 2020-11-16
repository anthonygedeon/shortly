import React, { useState } from 'react';
import styled from 'styled-components';


import Header from '../Header';
import Main from '../Main';
import Cta from '../CTA';
import Footer from '../Footer';

function App() {
	return (
		<div className="app">
			<Header />
            <Main />
            <Cta />
            <Footer />
		</div>
	);
}

export default App;
