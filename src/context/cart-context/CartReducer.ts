import { Product } from "../../screens/Home/components/types";
import { CartItem } from "./types";

function removeItem(currentList, removalId) {
    let interestedItem = currentList.reduce((acc, cur) => {
        if (cur.itemId === removalId) {
            acc = cur;
        }
        return acc;
    }, {})
    let nonInterestedItems = currentList.filter((item: CartItem) => item.itemId !== removalId)
    if (interestedItem.itemQty <= 1 ) {
        localStorage.setItem('cart', JSON.stringify(nonInterestedItems))
        return nonInterestedItems
    }
    const finalValue = currentList.map((item) => {
        if (item.itemId === removalId) {
            item.itemQty-=1;
        }
        return item;
    })
    localStorage.setItem('cart', JSON.stringify(finalValue))
    return finalValue
}

function addItem(currentList: CartItem[], newItem: Product): CartItem[] {
    let interestedItem: CartItem = currentList.reduce((acc, cur) => {
        if (cur.itemId === newItem.itemId) {
            acc = cur;
        }
        return acc;
    }, {} as CartItem)
    if (Object.keys(interestedItem).length) {
        const finalValue = currentList.map((item) => {
            if (item.itemId === newItem.itemId) {
                item.itemQty+=1;
            }
            return item;
        })
        localStorage.setItem('cart', JSON.stringify(finalValue))
        return finalValue; 
        
    }
    const finalValue = [...currentList, {
        ...newItem,
        itemQty: 1
    }]
    localStorage.setItem('cart', JSON.stringify(finalValue))
    return finalValue; 
}

const reducer = (state, action) => {
    let newState = state
    switch(action.type) {
        case 'add':
            newState = {...newState, items: addItem(state.items, action.payload)};
            return newState;
        case 'remove':
            newState = {...newState, items: removeItem(state.items, action.payload)};
            return newState;
        case 'initialise':
            newState = {...newState, items: action.payload};
            return newState;
        default:
            return newState;
    }
}

export default reducer;