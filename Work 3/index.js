////////////////////////////////////////// TASK 1 ///////////////////////////////////////////

//#region 
    // Создать объект, описывающий автомобиль (производитель, 
    //     модель, год выпуска, средняя скорость), и следующие функции 
    //     для работы с этим объектом.
    //     1. Функция для вывода на экран информации об автомобиле.
    //     2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
    //     Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
//#endregion

{
    let car = {
        manufacturer: "Volvo",
        model: "XC90",
        publishingDate: 2021,
        averageSpeed: 60,

        ShowCarDetails: function() { console.log("Manufacter - " + this.manufacturer + "\nModel - " + this.model + "\nDate - " + this.publishingDate + "\nAverage Speed - " + this.averageSpeed + " km/h"); },

        TimeCounting_AverageSpeed: function(distance) {
            let time = distance / this.averageSpeed; // S = T * V => T = S / V
            let restTime = Math.floor(time / 4); 
            let minutes = Math.round(time * 60) % 60;
            let hours = Math.floor(time) % 24; 
            let totalTime = time + restTime;
            
            if (time < 1)
                console.log("Minutes - " + minutes.toFixed(0));
            else if (hours > 0)
                console.log(hours.toFixed(0) + " Hours | " + minutes.toFixed(0) + " Minutes");
            else 
                console.log("Total Time - " + totalTime.toFixed(0));

        }
    }

    car.ShowCarDetails();
    car.TimeCounting_AverageSpeed(321);
}

////////////////////////////////////////// TASK 2 ///////////////////////////////////////////

//#region 
    // Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом.
    // 1. Функция сложения 2-х объектов-дробей.
    // 2. Функция вычитания 2-х объектов-дробей.
    // 3. Функция умножения 2-х объектов-дробей.
    // 4. Функция деления 2-х объектов-дробей.
    // 5. Функция сокращения объекта-дроби
//#endregion

{
    console.log("======================================================================");
    let fraction = {
        numerator: 2,
        denominator: 3,

        addition: function(otherFraction) {
            let res = {};
            res.numerator = this.numerator * otherFraction.denominator + otherFraction.numerator * this.denominator;
            res.denominator = this.denominator * otherFraction.denominator;

            this.numerator = res.numerator;
            this.denominator = res.denominator;
            
            return "Addiotion - " + this.abbreviate();
        },
        subtraction: function(otherFraction) {
            let res = {};
            res.numerator = this.numerator * otherFraction.denominator - otherFraction.numerator * this.denominator;
            res.denominator = this.denominator * otherFraction.denominator;

            this.numerator = res.numerator;
            this.denominator = res.denominator;
            
            return "Subtraction - " + this.abbreviate();
        },
        multiplication: function(otherFraction) {
            let res = {};
            res.numerator = this.numerator * otherFraction.numerator;
            res.denominator = this.denominator * otherFraction.denominator;

            this.numerator = res.numerator;
            this.denominator = res.denominator;
            
            return "Multiplication - " + this.abbreviate();
        },
        division: function(otherFraction) {
            let res = {};
            res.numerator = this.numerator * otherFraction.denominator;
            res.denominator = this.denominator * otherFraction.numerator;

            this.numerator = res.numerator;
            this.denominator = res.denominator;
            
            return "Dision - " + this.numerator + "/" + this.denominator;
        },
        abbreviate: function() {
            let gcd = function(a, b) { if (b == 0) return a; return gcd(b, a % b); };
          
            let commonDivisor = gcd(this.numerator, this.denominator);
            this.numerator = this.numerator / commonDivisor;
            this.denominator = this.denominator / commonDivisor;
            
            return this.numerator + "/" + this.denominator;
        }
    }
      
    let fraction2 = {
        numerator: 1,
        denominator: 4,
    };
    
    let reduceFr = fraction.abbreviate();
    console.log(reduceFr);

    let add = fraction.addition(fraction2);
    console.log(add);
    
    let sub = fraction.subtraction(fraction2);
    console.log(sub);

    let multip = fraction.multiplication(fraction2);
    console.log(multip);

    let divis = fraction.division(fraction2);
    console.log(divis);

}