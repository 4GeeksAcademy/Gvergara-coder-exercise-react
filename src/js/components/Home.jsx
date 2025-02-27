import React from "react";

import { Card } from "./Card";

import { NavBar } from "./NavBar";

import {Jumbotron} from "./Jumbotron"

import { Footer } from "./Footer";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar/>
			<div className="container" id="container-section">
				<div id="hero">
					<Jumbotron/>
				</div>	
				<div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 justify-content-between " id="card-section">
					<Card 
					tittle="4GeeksAcademy"
					description="Esta es mi academia"
					img="https://fastly.picsum.photos/id/890/500/500.jpg?hmac=9SnpkGICHbTS_a36F5oxBOxE7maQW3zFT0_tncJmtyk"
					 />
					<Card 
					tittle="React-section"
					description="Clase de React lunes 24-2"
					img="https://fastly.picsum.photos/id/305/500/500.jpg?hmac=u0oSferRFplOHDfNeiknTEo8GWWDcXd24989DsJBuHk"
					/>
					<Card 
					tittle="Jellyfish"
					description="invertebrate animals that live in the sea and are shaped like a bell or umbrella"
					img="https://fastly.picsum.photos/id/1069/500/500.jpg?hmac=m8Rv5UtHpq43AgjhnFv9eL8ByirOIdB6GJYmq9r7kBU"
					/>
					<Card 
					tittle="Tiger"
					description="The tiger can be identified by its reddish-orange fur with black vertical stripes along its flanks and shoulders."
					img="https://fastly.picsum.photos/id/593/500/500.jpg?hmac=tTKq5xoCbA7u-XjimfpDlDBKVk28TkZfki-FLFKNSP0"
					/>
				</div>
			</div>
				<div>
					<Footer/>
				</div>
		</div>
	);
};



export default Home;