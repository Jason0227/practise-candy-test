// 編號：CANDY-001
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如：
//   [15, 28, 4, 2, 43] 印出 6
//   [23, 71, 33, 82, 1] 印出 24

function sumOfSmallestValues(arr) {
    let numbers=arr; //宣告一個常數numbers為arr陣列
    numbers.sort(function(a, b) {
      return a - b;
    }); //將numbers陣列做小到大的排序，在mdn找到的sort函式運算式
    return(numbers[0]+numbers[1]) //將陣列前兩個索引做相加並回傳
  }
  
  const list1 = [19, 5, 42, 2, 77]
  const list2 = [23, 15, 59, 4, 17]
  
  console.log(sumOfSmallestValues(list1)) // 印出 7
  console.log(sumOfSmallestValues(list2)) // 印出 19

//   我已完成此題，獲得糖果