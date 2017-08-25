let condition = false;


function create_warden(r, g) {

    let warden = {
        route: r,
        gossips: g,
        cs: 0,
        pos: r[0]
    }
    return warden;
};

// let war1 = create_warden([3, 1, 2, 3], ["a"]);
// let war2 = create_warden([3, 2, 3, 1], ["b"]);
// let war3 = create_warden([4, 2, 3, 4, 5], ["c"]);
let s = 1; //stop

let wardens = [
    create_warden([12, 23, 15, 2, 8, 20, 21, 3, 23, 3, 27, 20, 0], ["a"]),
    create_warden([21, 14, 8, 20, 10, 0, 23, 3, 24, 23, 0, 19, 14, 12, 10, 9, 12, 12, 11, 6, 27, 5], ["b"]),
    create_warden([8, 18, 27, 10, 11, 22, 29, 23, 14], ["c"]),
    create_warden([13, 7, 14, 1, 9, 14, 16, 12, 0, 10, 13, 19, 16, 17], ["d"]),
    create_warden([24, 25, 21, 4, 6, 19, 1, 3, 26, 11, 22, 28, 14, 14, 27, 7, 20, 8, 7, 4, 1, 8, 10, 18, 21], ["e"]),
    create_warden([13, 20, 26, 22, 6, 5, 6, 23, 26, 2, 21, 16, 26, 24], ["f"]),
    create_warden([6, 7, 17, 2, 22, 23, 21], ["g"]),
    create_warden([23, 14, 22, 28, 10, 23, 7, 21, 3, 20, 24, 23, 8, 8, 21, 13, 15, 6, 9, 17, 27, 17, 13, 14], ["h"]),
    create_warden([23, 13, 1, 15, 5, 16, 7, 26, 22, 29, 17, 3, 14, 16, 16, 18, 6, 10, 3, 14, 10, 17, 27, 25], ["i"]),
    create_warden([25, 28, 5, 21, 8, 10, 27, 21, 23, 28, 7, 20, 6, 6, 9, 29, 27, 26, 24, 3, 12, 10, 21, 10, 12, 17], ["j"]),
    create_warden([26, 22, 26, 13, 10, 19, 3, 15, 2, 3, 25, 29, 25, 19, 19, 24, 1, 26, 22, 10, 17, 19, 28, 11, 22, 2, 13], ["k"]),
    create_warden([8, 4, 25, 15, 20, 9, 11, 3, 19], ["l"]),
    create_warden([24, 29, 4, 17, 2, 0, 8, 19, 11, 28, 13, 4, 16, 5, 15, 25, 16, 5, 6, 1, 0, 19, 7, 4, 6], ["m"]),
    create_warden([16, 25, 15, 17, 20, 27, 1, 11, 1, 18, 14, 23, 27, 25, 26, 17, 1], ["n"])


]


//let wardens = [war1, war2, war3];

console.log(wardens);

function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

function swapgossip(array) {
    var a = array.concat();
    for (var i = 0; i < a.length; ++i) {
        for (var j = i + 1; j < a.length; ++j) {
            if (a[i] === a[j])
                a.splice(j--, 1);
        }
    }
    return a;
}



//var array3 = swapgossip(war1.gossips.concat(war2.gossips));


function test() {
    while (!condition) {
        let totalFull = 0;

        for (let i = 0; i < wardens.length; i++) {
            let l = (wardens[i].route.length);
            if (s % l !== 0) {
                wardens[i].cs = (s % l) - 1; //ARRAYS START AT ZERO!!
            } else {
                wardens[i].cs = l - 1;
            }
            wardens[i].pos = wardens[i].route[wardens[i].cs];
        }
        console.log(wardens);

        for (let i = 0; i < wardens.length; i++) {

            for (let j = 0; j < wardens.length; j++) {

                if (wardens[i].pos === wardens[j].pos) {
                    wardens[i].gossips = swapgossip(wardens[i].gossips.concat(wardens[j].gossips));
                    wardens[j].gossips = wardens[i].gossips;
                }

            }
            if (wardens[i].gossips.length === wardens.length) {
                totalFull++;
            }
        }
        console.log(totalFull)
        if (totalFull === wardens.length) {
            condition = true;

        }
        //console.log(s);












        s++;
        //wait(1000);

    }
    console.log("stops taken: " + (s - 1));
}