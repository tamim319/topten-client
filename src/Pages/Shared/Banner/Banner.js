
import { Box, Container, Grid } from '@mui/material';
import React from 'react';

const Banner = () => {
    return (
        <Box style={{width: '100%', textAlign: 'center'}}>
            <img style={{width: '96%'}} src='https://umbrella.data.naturalint.com/production/charts/uploads/photo/CS_header.20200103115510.20220116091904.jpg' alt='' />
            <Grid item xs={12} md={8} sx={{position: 'relative', display: 'block', float: 'left', marginTop: '-340px', color: 'white', padding: '10px', marginLeft: '50px'}}>
                <h4 style={{fontFamily: 'hurmegeometricsans_no3_6,Gilroy,Almarai,Arial,sans-serif', fontWeight: 900, fontSize: '28px', lineHeight: '36px'}}>The Best Cyber Security Software of 2022 <br />
                Secure your data & protect your computer</h4>
                <h6 style={{fontWeight: 400, lineHeight: '28px', fontSize: '18px'}}>In today's world, cyber-attacks and data breaches can happen at anytime.<br />Explore the top cyber security tools & protect yourself against online threats.</h6>
            </Grid>
        </Box>
    );
};

export default Banner;