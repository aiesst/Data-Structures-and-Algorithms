/*
 * @Author: yt.gan 
 * @Date: 2018-04-16 11:47:59 
 * @Last Modified by: yt.gan
 * @Last Modified time: 2018-04-16 20:13:36
 */

//桶排序
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


    //桶排序
    this.backet = function(arr) {
        //定义放入数组个数的数组
        if (this.dataStore.length < 1) {
            return;
        }
        var max = Math.max.apply(Math, this.dataStore);
        var min = Math.min.apply(Math, this.dataStore);
        if (min === max) {
            return;
        }
        var capcacity = (max - min + 1) / 5; //桶的容量,其中5为桶的个数
        var buckets = new Array(Math.floor((max - min) / capcacity + 1)); //桶的个数
        for (var i = 0; i < buckets.length; ++i) {
            buckets[i] = [];
        }
        for (var i = 0; i < this.dataStore.length; ++i) {
            //桶索引
            var index = Math.floor((this.dataStore[i] - min) / capcacity);
            //放入桶
            buckets[index].push(this.dataStore[i]);
        }
        console.log(buckets);
        var m = 0;
        this.clear();
        for (var i = 0; i < buckets.length; ++i) {
            if (buckets[i] != null) {
                buckets[i].sort(); //桶内排序
                for (var s = 0; s < buckets[i].length; ++s) {
                    this.dataStore[m++] = buckets[i][s];
                }
            }
        }

    }
}

var myNums = new CArray(50);
myNums.setData();
myNums.show();
myNums.backet();
myNums.show();


// 1 9 6 8 3 3 6 7 2 2 
// backet=> [ [ 1, 2, 2 ], [ 3, 3 ], [ 6, 6 ], [ 8, 7 ], [ 9 ] ]
// 1 2 2 3 3 6 6 7 8 9