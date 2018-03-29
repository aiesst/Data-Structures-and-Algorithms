/*
 * @Author: yt.gan 
 * @Date: 2018-03-29 12:13:51 
 * @Last Modified by: yt.gan
 * @Last Modified time: 2018-03-29 16:26:39
 */


function Stack() {
    this.dataStore = [];
    this.top = 0;

    //压入栈
    this.push = function(element) {
        //++放在后面，是将元素放在此位置了，然后再进行加运算
        this.dataStore[this.top++] = element;
    };

    //出栈
    this.pop = function() {
        return this.dataStore[--this.top];
    };

    //返回栈顶元素，不操作
    this.peek = function() {
        return this.dataStore[this.top - 1];
    }

    //返回栈内元素个数
    this.length = function() {
        return this.top;
    };

    //清空栈内所有元素
    this.clear = function() {
        this.top = 0;
    };

}

var stack = new Stack();
stack.push('Divid');
stack.push('Tom');
stack.push('Jemy');
console.log(stack.peek());
console.log(stack.dataStore);
console.log(stack.length());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.dataStore);
console.log(stack.length());

/*
 * 通过栈进行进制转换
 * 1.最高位为n%b,并压入栈
 * 2.使用n/b替换n 
 * 3.重复步骤1和2，直到n=0，且没有余数
 * 4.持续弹出栈元素，排列即可
 */
function mulBase(num, base) {
    var stackMul = new Stack();
    do {
        stackMul.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    var converted = "";
    while (stackMul.length() > 0) {
        converted += stackMul.pop();
    }
    return converted;
}



console.log("mul:" + mulBase(2, 8));