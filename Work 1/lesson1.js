// 1. Запросите у пользователя число, возведите это число во 2-ю степень и выведите на экран.

{
    let num = prompt("1. Enter number => ");

    console.log("Result - " + Math.pow(num, 2));
}

// 2. Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел

{
    let f_num = prompt("2. Enter first number => ");
    let s_num = prompt("2. Enter second number => ");
    let res = (Number(f_num) + Number(s_num)) / 2;

    console.log("Arithmetic mean - " + res);
}

// 3. Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.

{
    let len = prompt("3. Enter the length of the side of the square => ");

    console.log("Square Area - " + Math.pow(len, 2));
}

// 4. Реализуйте конвертор из километров в мили (пользователь вводит километры, программа выводит мили). 1 км = 0,621371 миль. 
// Это значение укажите в коде как константу.

{
    const km_to_ml = 0.621371;
    let km = prompt("4. Enter the distance in kilometers => ");

    console.log(" Miles - " + ((km * km_to_ml).toFixed(2)));
}

// 5. Реализуйте калькулятор. Пользователь вводит два числа, а программа выводит результаты действий + - * / между этими числами.

{
    let f_num = prompt("5. Enter first number => ");
    let s_num = prompt("5. Enter second number => ");

    let addit = Number(f_num) + Number(s_num);
    let substr = Number(f_num) - Number(s_num);
    let multip = Number(f_num) * Number(s_num);
    let div = Number(f_num) / Number(s_num);
    
    console.log("Addition - " + addit +"\nSubtraction - " + substr + "\nMultiplication - " + multip + "\nDivision - " + div);
}

// 6. Пользователь вводит значения a и b для формулы a * x + b = 0, а программа считает и выводит значение x.

{
    let a = prompt("6. Enter value os 'a' => ");
    let b = prompt("6. Enter value os 'b' => ");

    console.log("Value of x - " + (-b / a));
}

// 7. Запросите у пользователя текущее время (часы и минуты) и выведите, сколько часов и минут осталось до следующего дня.

{
    let cur_time = prompt("7. Enter the current time in HH:MM format: ");
    let h = 23 - Number(cur_time.split(":")[0]);
    let m = 60 - Number(cur_time.split(":")[1]);

    console.log("Until the beginning of the next day left - " + h + "hours and " + m + "minutes");
}

// 8. Запросите у пользователя трехзначное число и выведите вторую цифру этого числа. Для решения задачи используйте оператор % (остаток от деления).

{
    let num = prompt("8. Enter a three-digit number => ");
    let sec_digit_of_firstnum = ((Number(num) / 10) % 10).toFixed(0);

    console.log("Second digit - " + sec_digit_of_firstnum);
}

// 9. Запросите у пользователя пятизначное число и переместите последнюю цифру в начало (из числа 12345 должно получиться число 51234). 

{
    let num = prompt("9. Enter a five-digit number => ");
    
    let numberArr = num.split("");
    let lastNum = numberArr.pop();
    numberArr.unshift(lastNum);
    
    console.log("New number - " + numberArr.join(""));
}

// 10. Зарплата работника составляет $250 + 10% от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату.  

{
    let sales = prompt("10. Enter the total sales amount for the month => ");
    let salary = (250 + (sales * 0.1)).toFixed(0);

    console.log("Salary - " + salary);
}
