/*
 * @Author: yt.gan 
 * @Date: 2018-04-14 10:04:01 
 * @Last Modified by: yt.gan
 * @Last Modified time: 2018-04-16 20:18:52
 */

//希尔排序
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

    this.shell = function() {
        var num = this.dataStore.length;
        var temp = '';
        var gap = [];
        gap[0] = parseInt(num / 2);

        for (var i = 1; i < num; ++i) {
            for (var s = 0; s <= num - gap[i - 1]; ++s) {
                temp += s + '&' + (s + gap[i - 1]) + ' ';
                if (this.dataStore[s] > this.dataStore[s + gap[i - 1]]) {
                    this.swap(this.dataStore, s, s + gap[i - 1]);
                }
            }
            gap[i] = parseInt(gap[i - 1] / 2);
            temp += '=>' + this.dataStore + '\n';
            if (gap[i - 1] == 1) {
                break;
            }
        }
        console.log(temp);
    }
}

var myNums = new CArray(10);
myNums.setData();
myNums.show();
myNums.shell();
myNums.show();


// 8 9 6 8 6 2 3 7 2 2 
// 0&5 1&6 2&7 3&8 4&9 5&10 =>2,3,6,2,2,8,9,7,8,6
// 0&2 1&3 2&4 3&5 4&6 5&7 6&8 7&9 8&10 =>2,2,2,3,6,7,8,6,9,8
// 0&1 1&2 2&3 3&4 4&5 5&6 6&7 7&8 8&9 9&10 =>2,2,2,3,6,7,6,8,8,9
// 2 2 2 3 6 7 6 8 8 9