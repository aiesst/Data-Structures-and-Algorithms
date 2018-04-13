/*
 * @Author: yt.gan 
 * @Date: 2018-04-13 10:39:15 
 * @Last Modified by: yt.gan
 * @Last Modified time: 2018-04-13 14:10:27
 */

//实现一个数组测试平台，辅助完成排序算法
//组建数组类，实现插入数据，显示数据，调用不同的排序算法

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

    //冒泡排序算法
    this.bubbleSort = function() {
        var num = this.dataStore.length;
        var temp = 0;
        for (var i = num - 1; i > 0; --i) {
            for (var s = 0; s < i; s++) {
                temp = temp + s + '&' + (s + 1) + ' ';
                if (this.dataStore[s] > this.dataStore[s + 1]) {
                    this.swap(this.dataStore, s, s + 1);
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
myNums.bubbleSort();
myNums.show();

// 5 9 4 7 3 6 3 3 3 1 
// 0&1 1&2 2&3 3&4 4&5 5&6 6&7 7&8 8&9 
// 0&1 1&2 2&3 3&4 4&5 5&6 6&7 7&8 
// 0&1 1&2 2&3 3&4 4&5 5&6 6&7 
// 0&1 1&2 2&3 3&4 4&5 5&6 
// 0&1 1&2 2&3 3&4 4&5 
// 0&1 1&2 2&3 3&4 
// 0&1 1&2 2&3 
// 0&1 1&2 
// 0&1 
// 1 3 3 3 3 4 5 6 7 9