import { combineReucers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReucers({
    counter,
    todos,
});
export default rootReducer;