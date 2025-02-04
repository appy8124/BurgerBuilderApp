import React,{Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
};

class BurgerBuilder extends Component{
    state = {
        ingredients : {
            salad : 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        },
        price : 4,
        purchaseable: false,
        purchasing: false
    }

    updatePurchaseState(ingredients){
       
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum,el)=>{
                return sum + el;
            },0);
        this.setState({purchaseable: sum >0});

    }
    addIngredientHandler= (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.price;
        const newPrice = oldPrice + priceAddition;
        this.setState({price :newPrice, ingredients :updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.price;
        const newPrice = oldPrice - priceAddition;
        this.setState({price :newPrice, ingredients :updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseCancelhandler = () => {
        this.setState({purchasing: false}); 
    }
    purchaseContinuehandler = () => {
        alert('You continue!');
    }
    purchaseHandler = () => {
        this.setState({purchasing:true});
    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
            <Aux>
                <Modal show = {this.state.purchasing} modalClosed = {this.purchaseCancelhandler}>
                    <OrderSummary 
                        ingredients ={this.state.ingredients} 
                        purchaseCanceled = {this.purchaseCancelhandler}
                        price = {this.state.price}
                        purchaseContinue = {this.purchaseContinuehandler}/>
                </Modal>
                    <Burger ingredients = {this.state.ingredients}/>
                    <BuildControls 
                        ingredientAdded = {this.addIngredientHandler}
                        ingredientRemoved = {this.removeIngredientHandler}
                        disabled = {disabledInfo}
                        purchaseable = {this.state.purchaseable}
                        ordered = {this.purchaseHandler}
                        price = {this.state.price} 
                    />
            </Aux>
        )
    }
}

export default BurgerBuilder; 