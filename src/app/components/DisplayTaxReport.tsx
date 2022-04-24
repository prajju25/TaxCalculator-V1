import React from 'react';
import { connect } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

const DisplayTaxReport = (props : any) => {
    return (
        <Grid container spacing={2} sx={{ marginTop: '10vh'}}>
            <div className="card-display">
                <Grid item xs={12}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Stack sx={{ alignItems: 'center'}}>
                                        <h4>Traditional Tax Structure</h4>
                                        <div>400000</div>
                                        <div className="fs10">Estimated total tax</div>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6}>
                                    <Stack spacing={2}>
                                        <div>Gross</div>
                                        <div>Taxable Income</div>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6}>
                                    <Stack spacing={2}>
                                        <div>200000</div>
                                        <div>20000</div>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
            <div className="card-display">
                <Grid item xs={12}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Stack sx={{ alignItems: 'center'}}>
                                        <h4>New Tax Structure</h4>
                                        <div>400000</div>
                                        <div className="fs10">Estimated total tax</div>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6}>
                                    <Stack spacing={2}>
                                        <div>Gross</div>
                                        <div>Taxable Income</div>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6}>
                                    <Stack spacing={2}>
                                        <div>200000</div>
                                        <div>20000</div>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
        </Grid>
    )
}
const mapStateToProps = (state: any) => ({
    taxData: state.taxData
})
export default connect(mapStateToProps)(DisplayTaxReport);