import React from 'react';

// components
import Home from '../home/Home';
import Header from '../header/MainHeader';
import Spotlight from '../spotlight/Spotlight';
import Intro from '../introduction/Intro';
import Projects from '../projects/Projects';
import Enquire from '../projects/enquire/Enquire';
import Black from '../black/Black';
import Blogs from '../blogs/Blogs';
import Slider from '../slider/Slideres';
import Testimonial from '../testimonial/Testimonial';
import Forms from '../form/Forms';
import Footer from '../footer/Footer';

function LandingPage() {
    return (
        <>
            <Home />
            <Header />
            <Spotlight />
            <Intro />
            <Projects />
            <Enquire />
            <Black />
            <Blogs />
            <Slider />
            <Testimonial />
            <Forms />
            <Footer />
        </>
    )
}

export default LandingPage