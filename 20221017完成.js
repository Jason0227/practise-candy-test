// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"]

function moveZerosToEnd(arr) {
    arr.forEach((element,i) => { //這行的element是function正在處理的元素，i是他的index
        if(element === 0){ //把此元素對0做比對，如果是trun繼續做
            arr.splice(i,1) //從當前index刪掉一個元素，就是刪掉0
            arr.push(element) //將當前元素加到陣列最後面
        }
    })
    return arr //回傳現在的陣列
}

let result = moveZerosToEnd(list)
console.log(result) // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

//   我已完成此題，獲得一個ok