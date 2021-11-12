/*
localstorage'yi daha kısa kullanım için kullanılabilir.
kullanıcıya tarayıcısında site ayarı kaydetmesi için kullanılabilir.
*/
function clickCounter() {
if(typeof(Storage) !== "undefined") {
if (localStorage.clickcount) {
localStorage.clickcount = Number(localStorage.clickcount)+1;
} else {
localStorage.clickcount = 1;
}
document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
} else {
document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
}
}
*/


/*
json veri kodlama örneği
*/
{
"btc":
[
  { "Name":"Btc-1", "link":"Doe"   },
  { "Name":"Btc-2", "link":"Smith" },
  { "Name":"Btc-3", "link":"Jones" }
]

"doge":
[
 {"Name":"Doge-1", "link":"Does"}
]

"trx":
[
 {"Name":"Doge-1", "link":"Does"}
]

"usdt":
[
 {"Name":"Doge-1", "link":"Does"}
]
}
