import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Company from '../Company/Company';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Companies = () => {
    const [companies, setcompanies] = useState([]);
    useEffect (() => {
        fetch('./companies.json')
        .then(res => res.json())
        .then(data => setcompanies(data))
    } , [])
    return (
        <Container sx={{position: 'relative', display: 'block', float: 'left', marginTop: '-100px'}}>
            <div>
               <p style={{color: 'white', marginLeft: '35px'}}> <CheckCircleIcon sx={{color: 'white', fontSize: 'small'}}/>Last Updated June 2022</p>
            </div>
            <Grid container spacing={2}>
            
            {
                companies.map(company => <Company key={company.id} company={company}></Company>)
            }
 
            </Grid>
        </Container>
    );
};

export default Companies;