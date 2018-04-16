/*
 * @Author: yt.gan 
 * @Date: 2018-04-14 10:04:01 
 * @Last Modified by: yt.gan
 * @Last Modified time: 2018-04-16 21:43:09
 */

//基数排序
function CArray(elements) {
    this.dataStore = [];
    this.pos = 0;
    this.elements = elements;
    for (var i = 0; i < this.elements; ++i) {
        this.dataStore[i] = i;
    }
    this.setData = function() {
        //生成随机数
        //floor保留整数 random [0,1)
        for (var i = 0; i < this.elements; ++i) {
            this.dataStore[i] = Math.floor(Math.random() * (this.elements + 1));
        }
    }

    this.clear = function() {
        //清空数据
        for (var i = 0; i < this.dataStore.length; ++i) {
            this.dataStore[i] = 0;
        }
    }

    this.insert = function(element) {
        //插入数据
        this.dataStore[this.pos++] = element;
    }

    this.show = function() {
        //装换为字符串
        var reStr = '';
        for (var i = 0; i < this.dataStore.length; ++i) {
            reStr += this.dataStore[i] + " ";
            if (i > 0 & i % 10 == 0) {
                reStr += "\n";
            }
        }
        console.log(reStr);
    }

    this.swap = function(arr, index1, index2) {
        //交换位置
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    this.radix = function() {
        var mod = 10,
            dev = 1,
            temp = [];
        for (var i = 0; i < 2; i++, dev *= 10, mod *= 10) {
            for (var j = 0; j < this.dataStore.length; j++) {
                var bucket = parseInt((this.dataStore[j] % mod) / dev);
                if (temp[bucket] == null) {
                    temp[bucket] = [];
                }
                temp[bucket].push(this.dataStore[j]);
            }
            console.log(temp);
        }

        var pos = 0;
        for (var i = 0; i < temp.length; ++i) {
            if (temp[i] != null) {
                while (temp[i].shift() != null) {
                    this.dataStore[pos++] = temp[i].shift();
                }
            }
        }

    }
}

var myNums = new CArray(14);
myNums.setData();
myNums.show();
myNums.radix();
myNums.show();


// 8 9 6 8 6 2 3 7 2 2 
// 0&5 1&6 2&7 3&8 4&9 5&10 =>2,3,6,2,2,8,9,7,8,6
// 0&2 1&3 2&4 3&5 4&6 5&7 6&8 7&9 8&10 =>2,2,2,3,6,7,8,6,9,8
// 0&1 1&2 2&3 3&4 4&5 5&6 6&7 7&8 8&9 9&10 =>2,2,2,3,6,7,6,8,8,9
// 2 2 2 3 6 7 6 8 8 9