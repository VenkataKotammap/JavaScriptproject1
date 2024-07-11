function calculate(){
    //get input values from the form elements
    const principle= parseFloat(document.getElementById('principle').value);
    const interestrate= parseFloat(document.getElementById('interestrate').value);
    const tenure= parseFloat(document.getElementById('tenure').value);
    //perform the calculation
    const maturityamount=principle +((principle *interestrate*tenure)/10)
    //display the result
    document.getElementById('result').innerText=`Maturity Amount: ${maturityamount}`;

}
//Attach the eventlistener to button
document.getElementById('calculate').addEventListener('click',calculate);