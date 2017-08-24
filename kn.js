function go(){
let distarray = [];
let dist;
let n =0;

let start = {
    xi: 0,
    yi: 0
};

let final = {
    xf: document.getElementById("x").value,
    yf: document.getElementById("y").value
}

let avp = [
    {x: -2, y: -1},
    {x: -2, y: +1},
    {x: -1, y: -2},
    {x: -1, y: +2},
    {x: +1, y: -2},
    {x: +1, y: +2},
    {x: +2, y: -1},
    {x: +2, y: +1},
];

while (dist !==0){

    distarray = [];
    for(let i =0; i<avp.length;i++){
        let xn = start.xi + avp[i].x;
        let yn= start.yi +avp[i].y; 
        dist = Math.sqrt(Math.pow(final.xf-xn,2)+Math.pow(final.yf-yn,2));
        distarray.push(dist);
    }
    //console.log(distarray);
    var max = 100000000000;
    var maxIndex = 0;

    for (let i = 0; i < distarray.length; i++) {
        if (distarray[i] < max) {
            maxIndex = i;
            max = distarray[i];
        }
    }
    dist= max;
    console.log(maxIndex)
    
    start.xi = start.xi + avp[maxIndex].x;
    start.yi = start.yi + avp[maxIndex].y;

    console.log(start);
    n++;
}
console.log(n);
}
