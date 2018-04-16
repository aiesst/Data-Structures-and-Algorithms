/*
 * @Author: yt.gan 
 * @Date: 2018-04-16 11:37:58 
 * @Last Modified by:   yt.gan 
 * @Last Modified time: 2018-04-16 11:37:58 
 */

//计数排序
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

    var swap = function(arr, index1, index2) {
        //交换位置
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    this.count = function() {
        //定义放入数组个数的数组
        var max = Math.max.apply(Math, this.dataStore);
        var arrCount = new Array(max + 1);
        var index = 0;
        //初始化
        for (var i = 0; i < arrCount.length; ++i) arrCount[i] = 0;
        for (var i = 0; i < this.dataStore.length; ++i) {
            //计算每个元素出现的次数，并放入数组中
            arrCount[this.dataStore[i]]++;
        }
        console.log('count=>' + arrCount);
        for (var value = 0; value < arrCount.length; ++value) {
            //不为0的值依此放入数组中，达到排序目的
            while (arrCount[value] > 0) {
                this.dataStore[index++] = value;
                arrCount[value]--;
            }
        }
    }
}

var myNums = new CArray(10);
myNums.setData();
myNums.show();
myNums.count();
myNums.show();

// 1 4 5 0 2 8 5 0 2 2 
// count=>2,1,3,0,1,2,0,0,1
// 0 0 1 2 2 2 4 5 5 8