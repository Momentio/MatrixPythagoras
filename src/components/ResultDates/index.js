import {connect} from "react-redux";
import View from './view';

const controller=connect(
    state=>({
        model: state.resultDates,
    }),
    dispatch=>{
        return {
            dispatch:dispatch
        }
    })(View);

export default controller;