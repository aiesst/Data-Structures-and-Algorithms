/*
 * @Author: yt.gan 
 * @Date: 2018-04-04 21:28:15 
 * @Last Modified by: yt.gan
 * @Last Modified time: 2018-04-05 21:08:06
 */

function Dictionary() {
    this.dataStore = new Array();

    this.add = function(key, value) {
        this.dataStore[key] = value;
    }

    this.find = function(key) {
        return this.dataStore[key];
    }

    this.remove = function(key) {
        delete this.dataStore[key];
    }

    this.show = function() {
        var dataKeys = Array.prototype.slice.call(Object.keys(this.dataStore));
        for (var key in dataKeys) {
            console.log(dataKeys[key] + "->" + this.dataStore[dataKeys[key]]);
        }
    }

    this.showAll = function() {
        //原生js方法Object.keys返回索引
        Object.keys(this.dataStore).forEach(element => {
            console.log(element + "->" + this.dataStore[element]);
        });
    }

    this.count = function() {
        //不能用length来测长度
        //当键为字符串时，不管用
        var n = 0;
        Object.keys(this.dataStore).forEach(element => {
            ++n;
        })
        console.log(n);
        return n;
    }

    this.clear = function() {
        Object.keys(this.dataStore).forEach(element => {
            delete this.dataStore[element];
        })
    }

    this.sortShow = function() {
        Object.keys(this.dataStore).sort().forEach(element => {
            console.log(element + "->" + this.dataStore[element]);
        })
    }



}


var message = new Dictionary();
message.add("name", "Mick");
message.add("sex", "male");
message.add("year", "23");
message.add("si", "di");
message.show();
message.showAll();
message.count();
message.sortShow();


//例题：判断字符串中相同信息
var str = "the brown fox jumped over the blue fox";
var array = str.split(" ");
var addArr = function(arr) {
    //字符串相同单词信息
    var str = new Dictionary()
    var num = 0;
    for (var i = 0; i < arr.length; i++) {
        //遍历字符串
        for (var s = 0; s < arr.length; s++) {
            if (arr[i] == arr[s]) {
                num++;
            }
        }
        str.add(arr[i], num);
        num = 0;
    }
    str.showAll();
}
addArr(array.sort());