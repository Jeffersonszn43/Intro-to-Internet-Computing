// Here is the Javascript Function that will perform the calculations.
function Statscalc()
{   
    //Here is where we get input values from the user and convert those numbers to floating-point.
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const number3 = parseFloat(document.getElementById('number3').value);
    
    //Here is where we have an error check to make sure that the user enters numbers and not non-numerical values. This error check also covers the case where the user leaves one of the textboxes blank.
    if (isNaN(number1) || isNaN(number2) || isNaN(number3))
    {
        const results_Div = document.getElementById('results');
        results_Div.innerHTML = '<h4>Error:</h4><p>Please enter numbers for the calculations.</p>';
        errorDisplayed = true;
        return;  
    }
    else
    {
        errorDisplayed = false;
        document.getElementById('results').innerHTML = `
        <h4>Results:</h4>
        <p>Max = <span id = "maxResult"></span></p>
        <p>Min = <span id = "minResult"></span></p>
        <p>Mean = <span id = "meanResult"></span></p>
        <p>Median = <span id = "medianResult"></span></p>
        <p>Range = <span id = "rangeResult"></span></p>`;
    } 
    
    // Here is where we are doing the calculations.
    const max = Math.max(number1, number2, number3);
    const min = Math.min(number1, number2, number3);
    const mean = (number1 + number2 + number3 ) / 3;

    //Here is where we are basically sorting the input values from the user. We are using the sort function using the variables x and y, to do a comparison between x and y to determine how the numbers will be sorted in ascending order.
    // If x is greater than y, then y will be before x in the sorted array. If y is greater than x, then x will be before y in the sorted array.
    const sortedNumbers = [number1, number2, number3].sort((x, y) => x - y);
    
    //Here the input values are now sorted in ascending order and the median is sortedNumbers[1].
    const median = sortedNumbers[1];
    const range = max - min;
    
    //Here we are displaying the results of the calculations.
    document.getElementById('maxResult').textContent = max;
    document.getElementById('minResult').textContent = min;
    //Here we are displaying the mean value to have one space after the decimal point.
    document.getElementById('meanResult').textContent = mean.toFixed(1); 
    document.getElementById('medianResult').textContent = median;
    document.getElementById('rangeResult').textContent = range;

    
}
