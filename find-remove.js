/*
 * @Author: yt.gan 
 * @Date: 2018-03-27 17:33:16 
 * @Last Modified by:   yt.gan 
 * @Last Modified time: 2018-03-27 17:33:16 
 */


var arr = [1, 2, 3, 4, 5, 6, 7];

function find(element) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == element) {
            return i;
        }
    }
    return -1;
}
var remove = function(element) {
    var foundAt = find(element);
    if (foundAt > -1) {
        arr.splice(foundAt, 1);
        return 1;
    }
    return -1;
}
console.log(arr);
remove(2);
console.log(arr);