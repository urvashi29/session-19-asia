import React, { useState } from 'react';
import data from './data';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Recipe.css';
import DownloadRecipe from './DownloadRecipe';

function searchFor(term) {
    return function (x) {
        return x.strCategory.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "teal",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    margin: "30px",
    color: theme.palette.text.secondary,
}));


const Recipe = () => {
    const [term, setTerm] = useState('');

    const searchHandler = (e) => {
        console.log(e);
        setTerm(e.target.value);
    }


    return (
        <div style={{ textAlign: "center" }}>

            <TextField
                style={{ marginTop: "20px" }}
                id="search"
                name="search"
                type="text"
                value={term}
                onChange={searchHandler}
                placeholder="Search..."
            />


            {/* <DownloadRecipe data={data.recipe} /> */}

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                {data.recipe.filter(searchFor(term)).map(item => {
                    return (
                        <Grid item xs={2} sm={4} md={4} key={item.idCategory}>
                            <Item>
                                <p>{item.strCategory}</p>
                                <img src={item.strCategoryThumb} alt="recipe-data" className="recipe-image" />
                                <p>{item.strCategoryDescription.slice(0, 8)}</p>
                                <Button variant="contained">View Details</Button>
                            </Item>
                        </Grid>
                    )

                })}


            </Grid>


        </div>
    );
};

export default Recipe;

// 'S12356ABCD'
