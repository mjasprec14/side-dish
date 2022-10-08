import React from "react";
import "./App.css";

// eslint-disable-next-line no-unused-vars
import { Article, Brand, Cta, Feature, Navbar } from "./Components";
import {
	Blog,
	Features,
	Footer,
	Header,
	Possibility,
	WhatGPT3,
} from "./Containers";

const App = () => {
	return (
		<div className='App'>
			<div className='gradient__bg'>
				<Navbar />
				<Header />
			</div>

			<Brand />
			<WhatGPT3 />
			<Features />
			<Possibility />
			<Cta />
			<Blog />
			<Footer />
		</div>
	);
};

export default App;
