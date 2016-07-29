import {getTwentyEntrie} from './stackOverFlowHelpers'
import {INITIAL_STATE, RESET} from './Constant'

//let INITIAL_STATE = {entries:[], 'JavaScript': false, 'React': false, 
                                                 //'Redux': false, 'HTML': false, 'CSS':false}
function reducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD':
            return Object.assign({}, state, {[action.value]: !state[action.value]});

        case 'FETCHED':
            return Object.assign({}, state, {entries: action.value}, {isfetchData: false});
            
        case 'GET':
            return Object.assign({}, state, {isfetchData: action.value});
            
        case 'GETPAGE':
            return Object.assign({}, state, {isPagefetched: action.value});
            
        case 'PAGEFETCHED':
            return Object.assign({}, state, {webpage: action.value});
            
        case 'CACHED':
            return Object.assign({}, state, {webpagelist: action.value});
            
        case 'OPACITY':
            return Object.assign({}, state, {opacityList: action.value});

        default:
            return state; 

    }
    
}
    
    
export default reducer;
