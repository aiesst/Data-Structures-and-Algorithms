/*
 * @Author: yt.gan 
 * @Date: 2018-04-13 15:37:06 
 * @Last Modified by: yt.gan
 * @Last Modified time: 2018-04-13 15:49:36
 */

//选择排序
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

    //选择排序
    this.seletion = function() {
        var num = this.dataStore.length;
        var temp = 0;
        for (var i = 0; i < num; ++i) {
            for (s = i + 1; s < num; ++s) {
                temp = temp + i + '&' + s + ' ';
                if (this.dataStore[i] > this.dataStore[s]) {
                    this.swap(this.dataStore, i, s);
                }
            }
            temp += '\n';
        }
        console.log(temp);
    }

}

var myNums = new CArray(10);
myNums.setData();
myNums.show();
myNums.seletion();
myNums.show();

// 3 7 10 4 3 3 4 2 7 2 
// 0&1 0&2 0&3 0&4 0&5 0&6 0&7 0&8 0&9 
// 1&2 1&3 1&4 1&5 1&6 1&7 1&8 1&9 
// 2&3 2&4 2&5 2&6 2&7 2&8 2&9 
// 3&4 3&5 3&6 3&7 3&8 3&9 
// 4&5 4&6 4&7 4&8 4&9 
// 5&6 5&7 5&8 5&9 
// 6&7 6&8 6&9 
// 7&8 7&9 
// 8&9 
// 2 2 3 3 3 4 4 7 7 10