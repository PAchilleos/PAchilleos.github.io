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
    container.innerHTML = CarList[0].Make;

}