/*
 * @Author: yt.gan 
 * @Date: 2018-04-17 11:20:45 
 * @Last Modified by: yt.gan
 * @Last Modified time: 2018-04-17 11:44:24
 */

//二分查找
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

    //插入排序
    this.insertion = function() {
        var num = this.dataStore.length;
        var buffer = 0;
        for (var i = 1; i < num; ++i) {
            buffer = this.dataStore[i];
            for (var s = i - 1; s >= 0; --s) {
                if (buffer < this.dataStore[s]) {
                    //比较出现逆序则交换，并移位
                    this.swap(this.dataStore, i, s);
                    //移位，保持相邻比较
                    i--;
                } else {
                    //直到没逆序，跳出
                    break;
                }
            }
        }

    }

    this.binSearch = function(target) {
        var upper = this.dataStore.length - 1;
        var lower = 0;
        while (lower <= upper) {
            var mid = Math.floor((upper + lower) / 2);
            console.log("MID:" + mid);
            if (this.dataStore[mid] < target) {
                lower = mid + 1;
            } else if (this.dataStore[mid] > target) {
                upper = mid - 1;
            } else {
                return mid;
            }
        }
        return false;
    }

}

var myNums = new CArray(100);
myNums.setData();
myNums.insertion();
myNums.show();
console.log(myNums.binSearch(30));

// 0 2 2 3 4 4 6 7 9 9 9 
// 11 11 13 13 14 15 17 17 17 18 
// 19 23 24 24 25 25 27 28 28 30 
// 30 34 34 35 36 37 37 38 39 39 
// 39 40 43 43 44 46 50 51 51 52 
// 53 53 53 54 54 55 58 58 58 58 
// 60 60 60 60 63 65 66 67 68 70 
// 73 74 76 76 77 77 77 77 80 80 
// 81 82 82 83 85 86 89 91 92 92 
// 95 96 97 99 99 99 100 100 100 
// MID:49
// MID:24
// MID:36
// MID:30
// 30