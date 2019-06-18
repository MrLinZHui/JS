//1.将字符串逆序
function reverseString(message){
    // wirte your code here
    var message1 = "";
    for(var i = message.length;i>=0;i--){
        message1+=message.charAt(i);
    }
    console.log(message1);
  }
  reverseString("Hello");
  //2.回文
  function palindrome(message){
    // wirte your code here
    var message1 = "";
    for(var i = message.length;i>=0;i--){
        message1+=message.charAt(i);
    }
    if(message==message1){
        console.log(true);
    }else{
        console.log(false);
    }
  }
  palindrome('hello'); // should return false
  palindrome('abcba'); // should return true
  //3.按字母表顺序输出传入的参数字符串。
 
  function alphabetSort(message){
  // wirte your code here
   var array = new Array();
  for(var i=0;i<message.length;i++){
    array.push(message[i]);
  }
  //dinosaurs.sort();
  console.log(dinosaurs);
}
alphabetSort('hello'); // should return 'ehllo'