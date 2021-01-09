import Head from 'next/head'
import styles from '../styles/About.module.css'
import React, { Component } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import Dropdown from 'react-dropdown';
import { Box, Container } from 'react-layout-components';
import 'bootstrap/dist/css/bootstrap.css';
import {menunav} from "../components/menunav";




export default function Projects() {
  return (

    <div>
  <>
  <Navbar bg="light" variant="light">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="about">About</Nav.Link>
        <Nav.Link href="projects">Projects</Nav.Link>
        <Nav.Link href="about">Resume</Nav.Link>

      </Nav>
    </Navbar>
  </>

    <div className={styles.container}>
      <Head>
        <title>Elissa Perdue</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h2>
          Welcome to <a href="about">Projects</a>
        </h2>

        <h6> Current</h6>
        <div className={styles.grid}>
           
           <a href="projects/hacksc" className={styles.card}>
               <h3>HackSC &rarr;</h3>
               <p></p>
               <img alt="" src={"hacksc_logo.png"} />

           </a>

           <a href="projects/fitbet" className={styles.card}>
               <h3>FitBet &rarr;</h3>
               <p></p>
               <img alt="" src={"fitbet_logo.png"} />

           </a>

           <a href="projects/northrop" className={styles.card}>
               <h3>Northrop Grumman &rarr;</h3>
               <p></p>
               <img alt="" src={"ng.svg"} />

           </a>

           <a href="projects/amazon" className={styles.card}>
               <h3>Amazon &rarr;</h3>
               <p></p>
               <img alt="" src={"Amazon-Logo.png"} />

           </a>
           

       </div>
        <h6> Past</h6>
        <div className={styles.grid}>
           
           <a href="projects/hacksc" className={styles.card}>
               <h3>HackSC &rarr;</h3>
               <p></p>
               <img alt="" src={"hacksc_logo.png"} />

           </a>

           <a href="projects/fitbet" className={styles.card}>
               <h3>FitBet &rarr;</h3>
               <p></p>
               <img alt="" src={"fitbet_logo.png"} />

           </a>

           <a href="projects/northrop" className={styles.card}>
               <h3>Northrop Grumman &rarr;</h3>
               <p></p>
               <img alt="" src={"ng.svg"} />

           </a>

           <a href="projects/amazon" className={styles.card}>
               <h3>Amazon &rarr;</h3>
               <p></p>
               <img alt="" src={"Amazon-Logo.png"} />

           </a>
           

       </div>
        <h6> Upcoming</h6>



        <div className={styles.grid}>
           
            <a href="projects/hacksc" className={styles.card}>
                <h3>HackSC &rarr;</h3>
                <p></p>
                <img alt="" src={"hacksc_logo.png"} />

            </a>

            <a href="projects/fitbet" className={styles.card}>
                <h3>FitBet &rarr;</h3>
                <p></p>
                <img alt="" src={"fitbet_logo.png"} />

            </a>

            <a href="projects/northrop" className={styles.card}>
                <h3>Northrop Grumman &rarr;</h3>
                <p></p>
                <img alt="" src={"ng.svg"} />

            </a>

            <a href="projects/amazon" className={styles.card}>
                <h3>Amazon &rarr;</h3>
                <p></p>
                <img alt="" src={"Amazon-Logo.png"} />

            </a>
            

        </div>
       
     
      </main>









    </div>
    </div>

  )
}
