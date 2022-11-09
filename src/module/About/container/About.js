import React from 'react';
import DisplayCharts from '../component/DisplayCharts';
import AccordionDisplay from '../component/AccodionDisplay';
import Container from '@mui/material/Container';
import { Parallax } from "react-parallax";


const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

const About = () => {
  return (

    <Container>
      <Parallax bgImage={image1} strength={500}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>HTML inside the parallax</div>
        </div>
      </Parallax>

      <h2 style={{ textAlign: "center" }}>Electric Bikes Sales</h2>
      <DisplayCharts />
      <AccordionDisplay />

    </Container>
  );
};

export default About;


