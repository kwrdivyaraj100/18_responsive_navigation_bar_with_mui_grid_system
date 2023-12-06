import React from 'react';
import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
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
                        <Tabs>
                            
                        </Tabs>

                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;