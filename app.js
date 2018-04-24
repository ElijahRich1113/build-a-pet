window.onload = function() {
    var form = document.getElementById("form");
    var animalName = document.getElementById("name");
    var typePet = document.getElementById("type");
    var numberLegs = document.getElementsByClassName("legs");
    var petEmail = document.getElementById("email");
    var petPassword = document.getElementById("password");
    var petDescription = document.getElementById("desc");
    var sA = document.getElementsByClassName("s-a");
    var obj = {};

    form.addEventListener("submit", function(event){
        event.preventDefault();
        obj.name = animalName.value;
        obj.type = typePet.value;
        obj.legs = numberLegs.value;
        obj.spec = sA.value;
        obj.email = petEmail.value;
        obj.pass = petPassword.value;
        obj.desc = petDescription.value;
        console.log(obj);
    });
};

// var obj = {};

// console.log("obj", obj);
// obj.petName = "Shockwave";
// console.log("obj", obj);