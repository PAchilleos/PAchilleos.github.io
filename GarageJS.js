var CarList = [];



function addcar(make, model, year, Reg) {
    var car = {
        Make: make,
        Model: model,
        year: year,
        reg: Reg,
        prc: ""
    };

    CarList.push(car);
    //console.log(CarList);
    var e = document.getElementById("prc");
    var strUser = e.options[e.selectedIndex].text;
    car.prc = strUser;
    return car;
}


function cardeets() {
    var container = document.getElementById("deets");
    container.innerHTML = "";
    let val = document.getElementById("deet").value;

    var a = CarList.filter((b) => {
        return b.reg === (val) || b.Make === (val) || b.Model === (val) || b.year === (val)
    });
    console.log(a);
    if (a.length !== 0) {
        for (let i = 0; i < a.length; i++) {
            if (a[i].prc.includes("Bracket")) {
                a[i].prc = "N/A";
            }
            var par = document.createElement("p");
            par.innerHTML = "Make: " + a[i].Make + "<br> Model: " + a[i].Model + "<br> Year: " + a[i].year + "<br> RegNo: " + a[i].reg + "<br> Price: " + a[i].prc;
            container.appendChild(par);
        }
    } else {
        container.innerHTML = "Car does not exist in the Garage";
    }
}

function remcar(pl) {
    var container = document.getElementById("rem");
    var index = CarList.findIndex((b) => {
        return b.reg === (pl);
    });
    container.innerHTML = "The " + CarList[index].Make + " with the registration number of  " + CarList[index].reg + " has been removed";
    console.log(index);
    CarList.splice(index, 1);
    console.log(CarList);


}

function allcar() {
    var container = document.getElementById("all");
    container.innerHTML = "";
    for (i = 0; i < CarList.length; i++) {
        if (CarList[i].prc.includes("Bracket")) {
            CarList[i].prc = "N/A";
        }
        j = i + 1;
        var a = document.createElement("p");
        a.innerHTML = "Car " + j + "<br> Make: " + CarList[i].Make + "<br> Model: " + CarList[i].Model + "<br> Year: " + CarList[i].year + "<br> RegNo: " + CarList[i].reg + "<br> Price: " + CarList[i].prc;
        container.appendChild(a);
    }

}

let read = (input) => {
    let c = input.toLowerCase();

    if (c.includes("add")) {
        c = c.split(/\s+/).pop();
        document.getElementById("cons").value = create(c);
    } else if (c.includes("remove")) {
        c = c.split(/\s+/).pop();
        document.getElementById("cons").value = rem(c);
    } else if (c.includes("show")) {
        allcar();
    } else if (c.includes("help")) {
        document.getElementById("cons").value = "Command List|| \r\nadd: adds a car, enter attributes like make,model,year,reg,pricebracket(number) \r\nremove: removes a car by number plate \r\nshow: shows all contents of garage"
    }


}

let create = (al) => {
    let param = al.split(',')
    //console.log(param[0] + param[3]);
    let car = addcar(param[0], param[1], param[2], param[3]);
    var e = document.getElementById("prc");
    var strUser = e.options[param[4]].text;
    car.prc = strUser;
    return "car added";
}

let rem = (al) => {
    remcar(al);
    return "car removed"
}