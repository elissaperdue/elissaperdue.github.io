import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import Dropdown from 'react-dropdown';
import { Box, Container } from 'react-layout-components';
import 'bootstrap/dist/css/bootstrap.css';
import {menunav} from "../components/menunav";

// // initialize your target
// let myNavbarInit = new Navbar('#myNavbar');

// // alternativelly initialize on a UL target
// // without the navbar wrapper
// let myMenu = document.querySelector('ul.nav');
// let myMenuInit = new Navbar(myMenu);

// // initialize with options
// let myMenuInit = new Navbar(
//   'selector',
//   {
//     breakpoint: 800,
//     toggleSiblings: true,
//     delay: 600
//   }
// );

// // access an initialization object
// let myNavbarInit = document.getElementById('myNavbar').Navbar;

// // remove navbar functionality from target
// // via accessing the public method
// myMenuInit.dispose();


export default function Home() {
  return (

    <div>
  <>
  <Navbar bg="light" variant="light">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="about">About</Nav.Link>
        <Nav.Link href="#pricing">Projects</Nav.Link>
      </Nav>
    </Navbar>
  </>


    <div className={styles.container}>
      <Head>
        <title>Elissa Perdue</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="about">about</a>
        </h1>
       
     
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
    </div>

  )
}
