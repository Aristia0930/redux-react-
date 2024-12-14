//스토어를 만들때에는 리듀서를 하나만 사용해야한다
//만든 리듀서를 모아서 한번에 적용하는 과정


import {combineReducers} from 'redux';
import counter from './counter';
import todos from './todos';
const rootReducer=combineReducers({
    counter,todos,
})
export default rootReducer