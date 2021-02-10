import {connect} from "react-redux";
import calcDate from "../../operations/calcDate";
import View from './view';

const controller=connect(
    state=>({
        model: state.targetDate,
        calcDate: calcDate
    }),
    dispatch=>{
        return {
            dispatch:dispatch
        }
    })(View);

export default controller;