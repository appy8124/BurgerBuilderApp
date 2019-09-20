import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/ToolBar/Toolbar';

const layout = (props)=>(
    <Aux>
        <div>
            <Toolbar/>Sidedrawer,BackDrop
        </div>
        <main className = {classes.Content}>
            {props.children}
        </main>
    </Aux>
    
);
   
export default layout;