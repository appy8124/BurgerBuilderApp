import React,{Component} from 'react';
import  classes  from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show;
    }

    componentDidUpdate(){
        console.log('[Modal] will Update');
    }
    render(){
        return(
            <Aux>
            <Backdrop show = {this.props.show} clicked = {this.props.modalClosed}></Backdrop>
            <div 
                className = {classes.Modal}
                style = {{
                    transform : this.props.show ? 'translateY(0)' : 'translateY(-10000)vh',
                    opacity : this.props.show ? '1' : '0'
                    }}>
                {this.props.children}
            </div>  
        </Aux> 
        )
    }
};
export default Modal;
