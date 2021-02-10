
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from 'redux';
import todos from "../components/Todos/model";
import matrix from "../components/Matrix/model";
import targetDate from "../components/TargetDate/model";
import period from "../components/Period/model";
import resultDates from "../components/ResultDates/model";
import GlobalModel from "global-model";

const reducer = (state, action) => {
    if(state){
        return state.gReducer(action);

    }else{
        return new GlobalModel(
            false,
            "app",
            {
                targetDate: targetDate("app").gInitialValue,
                matrix: matrix("app").gInitialValue,
                period: period("app").gInitialValue,
                resultDates: resultDates("app").gInitialValue,
            },
            {
                targetDate: targetDate("app").gStructure,
                matrix: matrix("app").gStructure,
                period: period("app").gStructure,
                resultDates: resultDates("app").gStructure,
            },
        ).gReducer(action);
    }
};

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
);

store.subscribe(()=>{
    console.log("sToRe",store.getState())
});

console.log("sToRe",store.getState());

export default store;