var CarList = [];

function addcar() {
    var car = {
        Make: document.getElementById("make").value,
        Model: document.getElementById("model").value,
        year: document.getElementById("year").value,
        reg: document.getElementById("reg").value
    };

    CarList.push(car);
    console.log(CarList);
}

function cardeets() {
    var container = document.getElementById("deets");
    container.innerHTML = "";
    let val = document.getElementById("deet").value;
    //console.log(document.getElementById("pltdeet").value)
    var a = CarList.filter((b) => {
        return b.reg === (val) || b.Make === (val) || b.Model === (val) || b.year === (val)
    });
    console.log(a);
    if (a.length !== 0) {
        for (let i = 0; i < a.length; i++) {
            var par = document.createElement("p");
            par.innerHTML = "Make: " + a[i].Make + "<br> Model: " + a[i].Model + "<br> Year: " + a[i].year + "<br> RegNo: " + a[i].reg;
            container.appendChild(par);
        }
    } else {
        container.innerHTML = "Car does not exist in the Garage";
    }

}

function remcar() {
    var container = document.getElementById("rem");
    var index = CarList.findIndex((b) => {
        return b.reg === (document.getElementById("pltrem").value);
    });

    container.innerHTML = "The " + CarList[index].Make + "with the registration number of  " + CarList[0].reg + " has been removed";
    console.log(index);
    CarList.splice(index, 1);
    console.log(CarList);


}

function allcar() {
    var container = document.getElementById("all");
    container.innerHTML = "";
    for (i = 0; i < CarList.length; i++) {
        j = i + 1;
        var a = document.createElement("p");
        a.innerHTML = "Car " + j + "<br> Make: " + CarList[i].Make + "<br> Model: " + CarList[i].Model + "<br> Year: " + CarList[i].year + "<br> RegNo: " + CarList[i].reg
        container.appendChild(a);
    }

}