let parsedNumber;

do 
{
    let number = prompt('Enter a number :', '');  
    parsedNumber = parseInt(number);            
} while(isNaN(parsedNumber))