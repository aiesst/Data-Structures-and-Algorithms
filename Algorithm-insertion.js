/*
 * @Author: yt.gan 
 * @Date: 2018-04-13 16:20:30 
 * @Last Modified by: yt.gan
 * @Last Modified time: 2018-04-16 20:17:08
 */


//插入排序
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

    //插入排序
    this.insertion = function() {
        var num = this.dataStore.length;
        var temp = '';
        var buffer = 0;

        for (var i = 1; i < num; ++i) {
            buffer = this.dataStore[i];
            for (var s = i - 1; s >= 0; --s) {
                if (buffer < this.dataStore[s]) {
                    temp += i + '&' + s + ' ';
                    //比较出现逆序则交换，并移位
                    this.swap(this.dataStore, i, s);
                    //移位，保持相邻比较
                    i--;
                } else {
                    //直到没逆序，跳出
                    break;
                }
            }
            temp += '=>' + this.dataStore + '\n';
        }
        console.log(temp);
    }
}

var myNums = new CArray(10);
myNums.setData();
myNums.show();
myNums.insertion();
myNums.show();


// 4 2 0 8 1 1 1 6 3 7 
// 1&0 =>2,4,0,8,1,1,1,6,3,7
// =>2,4,0,8,1,1,1,6,3,7
// 2&1 1&0 =>0,2,4,8,1,1,1,6,3,7
// =>0,2,4,8,1,1,1,6,3,7
// =>0,2,4,8,1,1,1,6,3,7
// =>0,2,4,8,1,1,1,6,3,7
// 4&3 3&2 2&1 =>0,1,2,4,8,1,1,6,3,7
// =>0,1,2,4,8,1,1,6,3,7
// =>0,1,2,4,8,1,1,6,3,7
// =>0,1,2,4,8,1,1,6,3,7
// 5&4 4&3 3&2 =>0,1,1,2,4,8,1,6,3,7
// =>0,1,1,2,4,8,1,6,3,7