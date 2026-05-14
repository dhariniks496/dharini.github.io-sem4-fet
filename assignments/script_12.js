function showWhileLoop(){

    let i = 1;

    let result = "While Loop Numbers: ";

    while(i <= 5){

        result += i + " ";

        i++;

    }

    document.getElementById("output").innerHTML = result;

}

function showDoWhileLoop(){

    let i = 1;

    let result = "Do While Loop Numbers: ";

    do{

        result += i + " ";

        i++;

    }while(i <= 5);

    document.getElementById("output").innerHTML = result;

}
