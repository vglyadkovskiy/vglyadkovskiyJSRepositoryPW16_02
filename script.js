"use strict";
new Promise(function (resolve, reject) {
	setTimeout(function () {

	let number = prompt("Number?", "");
	if (number == null || isNaN(number) || number === "") {
		
         reject();
      } else {
         resolve(number);
      }
    }, 1000);


    // Запрашиваем у пользователя число number при помощи prompt()
    // Если пользователь ввел не число - вызвать reject()
    // Если пользователь ввел число - вызвать resolve(number)
}).catch(function (error) {
   return new Promise(function (resolve, reject) {
   		setTimeout(function () {
   			let number = null;
		    do {
		    	number = prompt("Number?", "");
		    }
		    while (number == null || isNaN(number) || number === "");
		    resolve(number);
	    }, 1000);
	// Запрашиваем у пользователя число number, пока он его не введет
    // после ввода числа - вызвать resolve(number)

	   });
}).then(function (result) {
   return new Promise(function (resolve, reject) {
   		setTimeout(function () {
   		resolve(result);
      	
      }, 1000);
   		console.log(result);
   		document.write(result);
    // Вывод number на экран
   });
   
});

/*
Задание №2. Promise
Создайте асинхронную цепочку из трех promise:
new Promise(function (resolve, reject) {
   // Запрашиваем у пользователя число number при помощи prompt()
   // Если пользователь ввел не число - вызвать reject()
   // Если пользователь ввел число - вызвать resolve(number)
}).catch(function (error) {
   return new Promise(function (resolve, reject) {
      // Запрашиваем у пользователя число number, пока он его не введет
      // после ввода числа - вызвать resolve(number)
   });
}).then(function (result) {
   return new Promise(function (resolve, reject) {
      // Вывод number на экран
   });
});


*/