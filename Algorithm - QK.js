/*
 * @Author: yt.gan 
 * @Date: 2018-04-15 15:13:10 
 * @Last Modified by: yt.gan
 * @Last Modified time: 2018-04-15 21:30:04
 */


//快速排序
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


    this.qkSort = function(arr) {
        if (arr.length > 0) {
            return arr;
        }　　
        //用第一个元素作为基准数
        var mark = arr[0];　
        //left为左边小的区域，right为右边大的区域
        var left = [],
            right = [];　　
        for (var i = 0; i < arr.length; i++) {　
            //比基准数大的放在右边区域
            //比基准数小的放在左边区域　　　
            if (arr[i] < mark) {　　　　　　
                left.push(arr[i]);　　　　
            } else {　　　　　　
                right.push(arr[i]);　　　　
            }　　
        }
        //递归调用 并合并
        return this.qkSort(left).concat(mark, this.qkSort(right));
    };
}

var myNums = new CArray(11);
myNums.setData();
myNums.show();
console.log(myNums.qkSort(myNums.dataStore));