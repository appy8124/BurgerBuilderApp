import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


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
        purchaseable: false
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
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
            <Aux>
                <div>
                    <Burger ingredients = {this.state.ingredients}/>
                </div>
                <div>
                    <BuildControls 
                        ingredientAdded = {this.addIngredientHandler}
                        ingredientRemoved = {this.removeIngredientHandler}
                        disabled = {disabledInfo}
                        price = {this.state.price}
                        purchasable = {this.state.purchaseable}
                    />
                </div>
            </Aux>
        )
    }
}

export default BurgerBuilder; 