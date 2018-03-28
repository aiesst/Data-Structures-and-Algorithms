/*
 * @Author: yt.gan 
 * @Date: 2018-03-27 15:26:05 
 * @Last Modified by: yt.gan
 * @Last Modified time: 2018-03-27 21:11:45
 */

var arr = [];
var xy = [];
var num = 0;
var count = 0;
for (var i = 0; i <= 5; ++i) {
    for (var s = 0; s <= 5; ++s) {
        xy[num++] = [i, s];
        if (i % s >= 2) {
            count++;
            console.log(i + "," + s);
        }
    }
}
console.log(count);