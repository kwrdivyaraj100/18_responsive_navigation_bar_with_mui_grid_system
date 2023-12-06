import React, { useState } from 'react';
import { AppBar, Box, Button, Grid, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import ShoppingCartCheckout from '@mui/icons-material/ShoppingCartCheckout';

function Navbar({ links }) {
    const [value, setValue] = useState(0);
    return (
        <AppBar>
            <Toolbar>
                <Grid container>
                    <Grid item xs={2}>
                        <Typography>
                            <ShoppingCartCheckout />
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Tabs indicatorColor="secondary" textColor='inherit' value={value} onChange={(e, val) => setValue(val)}>
                            {links.map((link, index) => (
                                <Tab key={index} label={link} />
                            ))}
                        </Tabs>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={3}>
                        <Box>
                            <Button variant='contained'>Login</Button>
                            <Button variant='contained'>SignUp</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
