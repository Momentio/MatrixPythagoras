export default function(date){
    let value = new Date(date);

    let day = value.getDate();
    let month = value.getMonth() + 1;
    let year = value.getFullYear() + 5508; // To hell with Peter I!

    function calcNumeral(number){
        return String(number).split("").reduce((a, e) => Number(a) + Number(e), 0);
    }

    let firstNumber = calcNumeral(day) + calcNumeral(month) + calcNumeral(year);
    let secondNumber = calcNumeral(firstNumber);
    let thirdNumber = firstNumber - Number(String(day).split("")[0]) * 2;
    let fourthNumber = calcNumeral(thirdNumber);

    let total = String(day)
        + String(month)
        + String(year)
        + String(firstNumber)
        + String(secondNumber)
        + String(thirdNumber)
        + String(fourthNumber);

    let result = ["","","","","","","","",""];

    String(total).split("").forEach(n => {
        if(n !== "0"){
            result[
                Number(n) - 1
            ] += n;
        }
    });

    return result;
}