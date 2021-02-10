import calc from "../../middlewares/calc";

export default (date) => {
    return (dispatch, getState)=>{
        let result = calc(date);

        let matrixModel = getState().matrix;

        dispatch(
            matrixModel.gUpdate(matrixModel.gKey, result)
        );
    }
};