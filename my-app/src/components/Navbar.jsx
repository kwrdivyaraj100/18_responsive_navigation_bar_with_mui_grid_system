import React from 'react';
import { AppBar, Grid, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

function Navbar() {
    return (
        <AppBar>
            <Toolbar>
                <Grid container>
                    <Grid item xs={2}>
                        <Typography>
                            <ShoppingCartCheckoutIcon />
                        </Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <Tabs indicatorColor="Secondary" textColor='inherit' value={1}>
                            <Tab label="Products" />
                            <Tab label="Overview" />
                            <Tab label="Pricing" />
                        </Tabs>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;