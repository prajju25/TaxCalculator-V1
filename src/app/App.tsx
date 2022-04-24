import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import Calculator from "./components/Calculator";
import DisplayTaxReport from "./components/DisplayTaxReport";
import './App.css';

export class App extends React.Component {
    constructor(props : any) {
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <div style={{ backgroundColor: '#ECECF5'}}>
                    <Container maxWidth="lg">
                        <Box sx={{ bgcolor: 'rgb(144, 202, 249)', height: '10%', paddingTop: '10px', border: '5px solid #AFAFF5' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={8}>
                                    <Calculator/>
                                </Grid>
                                <Grid item xs={4}>
                                    <DisplayTaxReport/>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}