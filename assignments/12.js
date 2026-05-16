

let correctPassword = "DhariniKS2006";

let attempts = 3;

document
.getElementById("password")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        event.preventDefault();

        document
        .getElementById("loginBtn")
        .click();
    }

});

document
.getElementById("loginBtn")
.onclick = function(){

    let userPassword =
    document
    .getElementById("password")
    .value;

    let isChecked = false;


    
    let stars = "";

    let i = 0;

    while(i < userPassword.length){

        stars += "*";

        i++;
    }

    console.log("Hidden Password :", stars);



    
    do{

        if(userPassword == correctPassword){

            document
            .getElementById("status")
            .innerHTML =
            "✅ Access Granted";

            alert("Access Granted!");

            isChecked = true;
        }

        else{

            attempts--;

            document
            .getElementById("attempts")
            .innerHTML =
            "Attempts Left : " + attempts;

            if(attempts == 0){

                document
                .getElementById("status")
                .innerHTML =
                "❌ Access Locked";

                document
                .getElementById("loginBtn")
                .disabled = true;

                document
                .getElementById("password")
                .disabled = true;
            }

            else{

                document
                .getElementById("status")
                .innerHTML =
                "❌ Incorrect Password";

                document
                .getElementById("password")
                .value = "";
            }

            isChecked = true;
        }

    }while(!isChecked);

}

