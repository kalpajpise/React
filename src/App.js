import React from "react";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MainComponent";

function App() {
	return (
		<div className="App">
			<Navbar dark color="primary">
				<div className="container">
					<NavbarBrand>React</NavbarBrand>
				</div>
			</Navbar>
			<div>
				<Menu />
			</div>
		</div>
	);
}

export default App;
