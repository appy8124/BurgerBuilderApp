import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/ToolBar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const layout = (props)=>(
    <Aux>
        <div>
            <Toolbar/>
            <SideDrawer/>
        </div>
        <main className = {classes.Content}>
            {props.children}
        </main>
    </Aux>
    
);
   
export default layout;