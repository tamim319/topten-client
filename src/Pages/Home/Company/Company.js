import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import DoneIcon from '@mui/icons-material/Done';

const Company = ({company}) => {
    const {id, name, link, heading, info1, info2, info3, rating, type} = company;
    return (
     
      
        <Grid item xs={6} sm={8} md={8}>
            <Container >
                <Card sx={{ minWidth: 275, boxShadow: 3, padding: '25px'}}>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={8} md={2}>
                                <img style={{width: '90%'}} src='https://images.top10.com/f_auto,q_auto/v1/production/products/uploads/photo/Norton_Logo_xSite.20210210130106.20211215084839.png' alt=''/>
                            </Grid>
                            <Grid item xs={6} sm={8} md={7}>
                                <div style={{fontSize: '14px', lineHeight: '21p', fontWeight: 600, color: '#2d2d2d', fontFamily: 'hurmegeometricsans_no3_6, Gilroy, Almarai,Arial,sans-serif'}}>{heading}</div><br />
                                <DoneIcon sx={{fontSize: '16px', marginRight: '5px', color: '#5DADE2'}}/>{info1}<br />
                                <DoneIcon sx={{fontSize: '16px', marginRight: '5px', color: '#5DADE2'}}/>{info2}<br />
                                <DoneIcon sx={{fontSize: '16px', marginRight: '5px', color: '#5DADE2'}}/>{info3}<br />
                            </Grid>
                            <Grid item xs={6} sm={8} md={3} sx={{textAlign: 'right'}}>
                                {type} <span style={{fontSize: '22px', padding: '3px', boxSizing: 'border-box', backgroundColor: '#1564bf', borderRadius: '4px', fontWeight: 700, color: '#fff'}}>{rating}</span> <br /><br /><br />
                                <a href={link}><button className="tour-btn" style={{    fontFamily: 'hurmegeometricsans_no3_6, Gilroy, Almarai,Arial,sans-serif', backgroundColor: '#ff4a64', color: '#ffffff', fontSize: '16px', lineHeight: '22px',fontWeight: 700, border: 'white', borderRadius: '6px', padding: '6px', width: '80%', height: '45px'}}>View Site</button></a>
                            </Grid>
                        </Grid>
                    </CardContent>                   
                </Card>                  
                </Container>
        </Grid>
       
        
    
    );
};

export default Company;


