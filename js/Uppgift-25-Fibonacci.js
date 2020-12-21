/*
Skriv en rekursiv funktion som räknar ut fibonacci-serien från 0 till ett godtyckligt tal.
*/

function fibonacci(number) {
    if (1 === number) {
        return [0, 1];
    } else {
        let series = fibonacci(number - 1);
        series.push(series[series.length - 2] + series[series.length - 1]);
        return series;
    }
}

console.log(fibonacci(8));