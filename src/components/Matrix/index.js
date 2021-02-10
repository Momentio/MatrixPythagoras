import {connect} from "react-redux";
import findDates from "../../operations/findDates";
import View from './view';

const controller=connect(
    state=>({
        model: state.matrix,
        findDates
    }),
    dispatch=>{
        return {
            dispatch:dispatch
        }
    })(View);

export default controller;