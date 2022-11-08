import React from 'react';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Employee from '../component/Employee';
import PostRequest from '../component/PostRequest';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};



const Home = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} centered aria-label="basic tabs example">
                    <Tab label="Employee" />
                    <Tab label="Post Request" />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Employee />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <PostRequest />
            </TabPanel>
        </Box>

      
    );
};

export default Home;


// const service = [{}, 
// {}, {}]

// const services = [
//     serviecOne :[{}], 

//     serviceTwo:[{}]
// ]



{/* <p><Link to='/service'>Featured Posts</Link></p> */}




