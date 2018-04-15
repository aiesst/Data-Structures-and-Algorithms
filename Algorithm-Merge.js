/*
 * @Author: yt.gan 
 * @Date: 2018-04-15 15:13:10 
 * @Last Modified by: yt.gan
 * @Last Modified time: 2018-04-15 15:47:35
 */


//归并排序
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

    var merge = function(left, right) {
        //实现治理和合并
        var temp = [];
        while (left.length > 0 && right.length > 0) {
            //小的放前面，将整个left和right排序插入
            if (left[0] < right[0]) {
                temp.push(left.shift());
            } else {
                temp.push(right.shift());
            }
        }

        return temp.concat(left).concat(right);
    }

    this.mergeSort = function(arr) {
        //实现分解
        if (arr.length == 1) {
            //长度为1递归终止
            return arr;
        }

        var mid = Math.floor(arr.length / 2),
            left = arr.slice(0, mid),
            right = arr.slice(mid);
        console.log(left + ' & ' + right);
        return merge(this.mergeSort(left), this.mergeSort(right));


    }

}

var myNums = new CArray(10);
myNums.setData();
myNums.show();
console.log(myNums.mergeSort(myNums.dataStore));

// 3 0 3 1 1 6 6 1 5 10 
// 3,0,3,1,1 & 6,6,1,5,10
// 3,0 & 3,1,1
// 3 & 0
// 3 & 1,1
// 1 & 1
// 6,6 & 1,5,10
// 6 & 6
// 1 & 5,10
// 5 & 10
// [ 0, 1, 1, 1, 3, 3, 5, 6, 6, 10 ]