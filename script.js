//alert('Hello world');

//console.log('Hello World');

//let first_name = "Michael";// string
//
//let num = 25;//number
//
//let question = true;//boolean
//
//num = 10;
//const pi = 3.14;
//console.log(first_name);
//console.log(num);
//let result = prompt("Enter the number");
//console.log(typeof(result));

//let str1 = "Hello";
//let str2 = 'Hello';
//let str3 = (`Hello ${num}`);

//console.log(2+3);
//console.log(4-2);
//console.log(2*5);
//console.log(6/2);
//console.log(5**2);//возведение числа в степень
//console.log(11%2);
//Задача: есть переменные r, g, b с числовыми значениями. Вывести в консоль строку “rgb(12, 34, 14)” используя конкатенацию и интерполяцию.

//let r = 12;
//let g = 34;
//let b = 14;
//let num = "rgb";
//console.log(num + "("+ r + ", " + g +", " + b + ")");
//console.log(`rgb(${12}, ${34}, ${14})`);

//let num = 123;
//let str = String(num);

//console.log(num);
//console.log(typeof(str));

//let str = "123";
//let num = +str;

//console.log(typeof(str));
//console.log(typeof(num));

//console.log('3' * 2);// 6
//console.log('3' + 2);// 32 конкатанация
//console.log(+'3' + 2);// 5

//Задача: Написать программу, которая запрашивает у пользователя его возраст (в годах) и выводит, сколько ему минут.
//let result = prompt("Enter you age", "Years");
//let num = 525.600;
//console.log(num * Years);


//Задача: Написать программу, которая считывает через prompt число и выводит в консоль ее квадрат.
//let number = prompt("Zahl?");
//number = Number(number);
//console.log(number ** 2);

//Задача: Написать программу, которая считывает два числа (объявляем две переменные и записываем туда результат работы двух вызовов prompt) и выводит их сумму. Не забудьте преобразовать полученные значения в число.
//let number1 = Number(prompt("Zahl1?"));
//let number2 = Number(prompt("Zahl2?"));
//console.log(+ number1 + number2);
//let num = Number(prompt("Enter the number"));
// if(num == 0){
//    console.log("null");
// }
// else if(num > 0){
//    console.log("negativ");
// }

 //Задача.  Написать программу, которая получает два числа и выводит наибольшее.
 //let a = Number(prompt("Zahl1"));
 //let b = Number(prompt("Zahl2"));
 //if(a == b){
 //   console.log("ab");
 //}
 //else if(b > a){
 //   console.log(b);
 //}

 //Задача. Написать программу, которая считывает через prompt одно число и выводит одну из строк “число четное”, “число нечетное”, “число равно нулю”.
 let num = Number(prompt("Enter the number"));
 if(num == 0){
    console.log("число равно нулю");
    }
    else if(num / 2 == 0){
      console.log("число четное");
    }
    else{
        console.log("число не четное");  
    }