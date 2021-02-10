import calc from "../../middlewares/calc";

export default () => {
    return (dispatch, getState)=>{
        let state = getState();

        let periodModel = state.period;
        let matrixModel = state.matrix;
        let resultDatesModel = state.resultDates;

        let results = [];

        Date.prototype.addDays = function(days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        }
        
        function getDates(startDate, stopDate) {
            var dateArray = new Array();
            var currentDate = startDate;
            while (currentDate <= stopDate) {
                dateArray.push(new Date (currentDate));
                currentDate = currentDate.addDays(1);
            }
            return dateArray;
        }

        console.log("!!!!!!1", ["11111", "2", "3", "4", "55", "", "7", "8", "99"], calc(
            new Date(2000, 0, 19)
        ), new Date(2000, 0, 19).toDateString())

        getDates(periodModel.gValue.start, periodModel.gValue.end).forEach(d => {
            let result = calc(d);

            let check = true;

            matrixModel.gValue.forEach((mv, mi) => {
                if(mv){
                    if(result[mi] !== mv) check = false;
                }
            });

            if(check) results.push(d);
        });

        dispatch(
            resultDatesModel.gUpdate(resultDatesModel.gKey, results)
        );
    }
};