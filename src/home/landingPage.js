import React, { Component } from "react";
import { Link } from 'react-router-dom'
import SplashImage from '../images/TCSplash.jpg';
import './landingPage.css';

export default class landingPage extends Component {


    render() {
    return (
        <div>
            <Link to='/register'>Create An Account</Link>
            <a href="">Current Jobs</a>
            <h1>Tour Collective Careers</h1>
            <img src={SplashImage} className="splash__image" alt="logo" />
            <h2>Great Information About Why You Should Sign Up</h2>
            <article>Lorem ipsum dolor amet kale chips before they sold out messenger bag lumbersexual umami slow-carb. Vexillologist hella kickstarter, sustainable enamel pin tumeric polaroid gastropub small batch letterpress etsy hoodie fashion axe synth. Brunch cred vegan, plaid la croix 8-bit farm-to-table squid bicycle rights man bun austin health goth tacos letterpress flexitarian. Single-origin coffee fixie chia, mlkshk vape sartorial poutine small batch coloring book post-ironic cornhole. Godard hammock XOXO jean shorts before they sold out polaroid offal flexitarian vegan asymmetrical etsy. Activated charcoal meditation craft beer, you probably haven't heard of them messenger bag pork belly freegan air plant pop-up. Authentic chillwave single-origin coffee bitters tattooed everyday carry gochujang street art 8-bit biodiesel intelligentsia etsy kitsch.</article>

        </div>
    );
}
}
