import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import { menunav } from "../components/menunav";
import 'bootstrap/dist/css/bootstrap.css';

export default function About() {
  return (
      <div>
    <Navbar bg="light" variant="light">
     <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="about">About</Nav.Link>
      <Nav.Link href="#pricing">Projects</Nav.Link>
      <Nav.Link href="about">Resume</Nav.Link>

    </Nav>
    </Navbar>
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
   

  



        <div style={{ padding: "2rem 0" }}>
        {typeof window !== undefined ? (
            <div style={{ padding: "0 0 2rem 0" }}>
            <Document
                options={{ workerSrc: "pdf.worker.js" }}
                file={"../resume.pdf"}
            >
                <Page height={600} pageNumber={1} />
            </Document>
            </div>
        ) : (
            ""
        )}
        
        </div>

    </div>
    </div>
  )
}