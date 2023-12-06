import React, { useState } from 'react';
import { Drawer } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

function DrawerComp() {
    const [open, setOpen] =useState(false);
    return (
        <>
        <Drawer open={true}>

        </Drawer>
        </>
    )
}

export default DrawerComp;