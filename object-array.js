/*
 * @Author: yt.gan 
 * @Date: 2018-03-27 15:22:49 
 * @Last Modified by: yt.gan
 * @Last Modified time: 2018-03-27 15:28:13
 */

//对象数组
function Point(x, y) {
    this.x = x;
    this.y = y;
};

function display(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].x + "," + arr[i].y);
    }
}

var p1 = new Point(1, 2);
var p2 = new Point(2, 3);
var points = [p1, p2];
display(points);

//对象数组
function weekTemps() {
    this.dataStore = [];
    //this.average = average;
    this.add = function(temp) {
        this.dataStore.push(temp);
    };
    this.average = function() {
        var total = 0;
        for (var i = 0; i < this.dataStore.length; ++i) {
            total += this.dataStore[i];
        }
        return total / this.dataStore.length;
    }
};

var thisWeek = new weekTemps();
thisWeek.add(3);
thisWeek.add(2);
thisWeek.add(1);
console.log(thisWeek.average());