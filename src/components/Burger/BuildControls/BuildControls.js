import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {ingredientLabel: 'Bacon', type:'bacon'},
    {ingredientLabel: 'Meat', type:'meat'},
    {ingredientLabel: 'Cheese', type:'cheese'},
    {ingredientLabel: 'Salad', type:'salad'},
];
const buildControls = (props) =>{
    return (
        <div className = {classes.BuildControls}>
            {controls.map(ctrl =>(
                <BuildControl 
                    key = {ctrl.ingredientLabel} 
                    ingredientLabel = {ctrl.ingredientLabel}
                    added = {() => props.ingredientAdded(ctrl.type)}
                    removed = {()=> props.ingredientRemoved(ctrl.type)}
                    disabled = {props.disabled[ctrl.type]}
                 />
            ))}
        </div>
    );
    
}

export default buildControls; 