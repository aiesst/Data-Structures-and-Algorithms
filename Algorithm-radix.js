/*
 * @Author: yt.gan 
 * @Date: 2018-04-17 09:53:22 
 * @Last Modified by: yt.gan
 * @Last Modified time: 2018-04-17 10:09:59
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

    this.radix = function(arr, maxBit) {
        //LSD 从低位开始进行排序
        //maxBit 元素的最高位数
        var mod = 10;
        var dev = 1;
        var temp = [];
        for (var i = 0; i < maxBit; i++, dev *= 10, mod *= 10) {
            //第一轮mod=10，dev=1 取个位
            //第二轮mod=100，dev=10 去十位
            for (var j = 0; j < arr.length; j++) {
                var bucket = parseInt((arr[j] % mod) / dev);
                if (temp[bucket] == null) {
                    temp[bucket] = [];
                }
                temp[bucket].push(arr[j]);
            }
            console.log(temp);
            var pos = 0;
            for (var j = 0; j < temp.length; j++) {
                var value = null;
                if (temp[j] != null) {
                    //从头开始取
                    while ((value = temp[j].shift()) != null) {
                        arr[pos++] = value;
                    }
                }
            }
        }
    }
}

var myNums = new CArray(14);
myNums.setData();
myNums.show();
myNums.radix(myNums.dataStore, 2);
myNums.show();

// 3 0 6 12 12 7 8 12 13 12 8 11 12 4

// [ [ 0 ],
//   [ 11 ],
//   [ 12, 12, 12, 12, 12 ],
//   [ 3, 13 ],
//   [ 4 ],
//   ,
//   [ 6 ],
//   [ 7 ],
//   [ 8, 8 ] ]

// [ [ 0, 3, 4, 6, 7, 8, 8 ],
//   [ 11, 12, 12, 12, 12, 12, 13 ],
//   [],
//   [],
//   [],
//   ,
//   [],
//   [],
//   [] ]

// 0 3 4 6 7 8 8 11 12 12 12 12 12 13