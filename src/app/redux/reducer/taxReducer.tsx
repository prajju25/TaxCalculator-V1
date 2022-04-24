import { ReduxAction } from "../../interface/ReduxAction";

const INITIAL_STATE = {
    taxData: null
}
    
const taxReducer = (state = INITIAL_STATE, action: ReduxAction) => {
    switch(action.type) {
        case 'setTaxData': 
            return ({
                ...state,
                taxData: action.payload
            })
        default:
            return state
    }

}
export default taxReducer;