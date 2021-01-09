import Head from 'next/head'
import styles from '../../styles/About.module.css'
import React, { Component } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import { menunav } from "../../components/menunav";
import 'bootstrap/dist/css/bootstrap.css';

export default function hacksc() {
  return (
      <div>
        <Navbar bg="light" variant="light">
        <Nav className="mr-auto">
        <Nav.Link href="../projects"> &larr; Back to projects</Nav.Link>
    

        </Nav>
        </Navbar>
    <div className={styles.container}>
      <Head>
        <title>Resume</title>
        <link rel="icon" href="/favicon.png" />
        
      </Head>
  
    <div>
      HackSC
    </div>



    </div>
    </div>
  )
}
