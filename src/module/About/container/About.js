import React from 'react';
import DisplayCharts from '../component/DisplayCharts';
import AccordionDisplay from '../component/AccodionDisplay';

const About = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Electric Bikes Sales</h2>
      <DisplayCharts />
      <AccordionDisplay />
    </div>
  );
};

export default About;