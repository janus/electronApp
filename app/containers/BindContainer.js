import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../utils/reducer'


const store = createStore(reducer);







export default store; 