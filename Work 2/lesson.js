//#region Задания, в которых необходимо использовать WHILE

//#region 1. Вывести # столько раз, сколько указал пользователь.

{
    let number = prompt("1. Enter the number of # characters to output => ");
    let symbol = "#";
    
    let i = 0;
    while (i < number) {
        console.log(symbol + ' ');
        i++;
    }
}

//#endregion

//#region 2. Пользователь ввел число, а на экран вывелись все числа от введенного до 0.

{
    let number = prompt("2. Enter a number => ");
    
    let i = number;
    while (i > 0) {
        console.log(i + " ");
        i--;
    }
}

//#endregion

//#region 3. Запросить число и степень. Возвести число в указанную степень и вывести результат.

{
    let number = prompt("3. Enter a number => ");
    let degree = prompt("3. Enter a degree => ");
    let res = 1;
    
    let i = 0;
    while (i < degree) 
    {
        res *= number;
        i++;
    }

    console.log("Result - " + res);
}

//#endregion

//#region 4. Запросить 2 числа и найти все общие делители.

{
    let f_num = prompt("4. Enter the first number => ");
    let s_num = prompt("4. Enter the second number => ");
    let greatest_common_divisor = 1;
    
    let i = 1;
    while (i <= f_num && i <= s_num) 
    {
        if (f_num % i == 0 && s_num % i == 0)
            greatest_common_divisor = i;

        i++;
    }

    console.log("Greatest common divisor - " + greatest_common_divisor);
}

//#endregion

//#region 5. Посчитать факториал введенного пользователем числа.

{
    let number = prompt("5. Enter a number =>");
    let factorial = 1;
    let i = 1;

    while (i <= number) {
        factorial *= i;
        i++;
    }

    console.log("Factorial - " + factorial);
}

//#endregion

//#endregion

//#region Задания, в которых необходимо использовать DO WHILE

//#region 6. Предлагать пользователю решить пример 2 + 2 * 2 до тех пор, пока он не решит его правильно.

{
    let answer;

    do {
        answer = parseInt(prompt("6. Answer of 2 + 2 * 2 => "));

        if (answer === 6) 
            console.log("Correctly!!!");
        else
            console.log("Wrong, please try again");
    } while (answer !== 6);
}

//#endregion

//#region 7. Делить число 1000 на 2 до тех пор, пока не получится число меньше 50. Вывести это число и сколько делений произвели

{
    let num = 1000;
    let divisions = 0;

    do {
        num /= 2;
        divisions++;
    } while (num >= 50)

    console.log("7. Result - " + num);
    console.log("7. Number of divisions - " + divisions);
}

//#endregion

//#endregion

//#region Задания, в которых необходимо использовать FOR

//#region 8. Вывести все числа от 1 до 100, которые кратные указанному пользователем числу.

{
    let num = prompt("8. Enter a number: ");

    for (let i = 1; i <= 100; i++) {
        if (i % num == 0)
            console.log(i + " ");
    }
}

//#endregion

//#region 9. Вывести каждый 4-й элемент из указанного пользователем диапазона. Пользователь указывает минимальное и максимальное значения диапазона.

{
    let min = prompt("9. Enter the minimum value of the range => ");
    let max = prompt("9. Enter the maximum value of the range => ");

    for(let i = min; i <= max; i++) {
        if(i % 4 == 0)
            alert(i + " ");
    }
}

//#endregion

//#region 10. Запросить число и проверить, простое ли оно. Простое число делится без остатка только на себя и на единицу.

{
    let num = prompt("10. Enter a number => ");

    let flag = true;
    if(num <= 1)
        alert("Such a number cannot be prime!!!")
    else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if(num % i == 0) {
                flag = false;
                break;
            }
        }

        if (flag)
            alert("It is a prime number");
        else
            alert("It's not a prime number");
    }
}

//#endregion

//#endregion
