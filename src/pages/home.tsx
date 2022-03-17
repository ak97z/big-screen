import React, {useEffect, useRef} from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import {Chart1} from '../components/chart-1';
import {Chart2} from '../components/chart-2';

const px = (n) => n / 2420 * (window as any).pageWidth;
export const Home = () => {
    return (
        <div className="home">
            <header style={{backgroundImage: `url(${headerBg})`}}/>
            <main>
                <section className="section1">
                    <Chart1/>
                    <Chart2/>
                </section>
                <section className="section2"></section>
                <section className="section3"></section>
                <section className="section4"></section>
                <section className="section5"></section>
            </main>
        </div>
    );
};
