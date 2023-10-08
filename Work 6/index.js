//#region Задание 1
// Создать html-страницу с формой для логина пользователя и  галочкой «Запомнить меня». 
// После заполнения формы вывести на экран: «Привет, Имя! Я тебя запомнил/не запомнил».

{
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var login = document.getElementById('login').value;
        var rememberMe = document.getElementById('rememberMe').checked;

        if (rememberMe) 
            alert("Hello, " + login + "! I remember you.");
        else 
            alert("Hello, " + login + "! I didn't remember you.");
        
    });
}

//#endregion

//#region Задание 2
// Создать html-страницу с формой для регистрации пользователя. Форма должна состоять из 
// указания почты, логина, пароля (2 раза). После заполнения формы вывести на экран: «На почту такую-то отправлено письмо с подтверждением».

{
    document.getElementById('registration-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var email = document.getElementById('email').value;
        var password = document.getElementById('passwd').value;
        var repeatPassword = document.getElementById('repeat-passwd').value;

        if (password != repeatPassword) {
            alert("Passwords don't match!");
            return;
        }

        alert("A confirmation email " + email + " was sent to the post office.");
    });
}

//#endregion

//#region Задание 3
// Создать html-страницу с формой для заполнения информации о пользователе. 
// После заполнения формы вывести всю введенную информацию в текстовом виде.

{
    document.getElementById('container').addEventListener('submit', function(event) {
        event.preventDefault();

        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var birthday = document.getElementById("birthday").value;
        var gender = document.querySelector('input[name="gender"]:checked').value;
        var country = document.getElementById("country").value;
        var city = document.getElementById("city").value;
        var table = document.getElementById("user-info");
        var skills = [];
        var skillCheckboxes = document.getElementsByName("skills");
  
        for (var i = 0; i < skillCheckboxes.length; i++) {
            if (skillCheckboxes[i].checked)
                skills.push(skillCheckboxes[i].value);
        }

        table.innerHTML = "<tr><th>Field</th><th>Value</th></tr>";
        table.innerHTML += "<tr><td>First Name</td><td>" + firstName + "</td></tr>";
        table.innerHTML += "<tr><td>Last Name</td><td>" + lastName + "</td></tr>";
        table.innerHTML += "<tr><td>BirthDay</td><td>" + birthday + "</td></tr>";
        table.innerHTML += "<tr><td>Gender</td><td>" + gender + "</td></tr>";
        table.innerHTML += "<tr><td>Country</td><td>" + country + "</td></tr>";
        table.innerHTML += "<tr><td>City</td><td>" + city + "</td></tr>";
        table.innerHTML += "<tr><td>Skills</td><td>" + skills.join(", ") + "</td></tr>";
    });
}


//#endregion

//#region Задание 4
// // Создать html-страницу с палитрой цветов и формой для добавления нового цвета.
// // После заполнения формы новый цвет должен добавиться в палитру

{
    document.getElementById('add-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var newColorBox = document.createElement('div');
        
        var redValue = parseInt(document.getElementById('red-val').value);
        var greenValue = parseInt(document.getElementById('green-val').value);
        var blueValue = parseInt(document.getElementById('blue-val').value);
        
        var newColor = 'rgb(' + redValue + ', ' + greenValue + ', ' + blueValue + ')';
        
        newColorBox.className = 'color-box';
        newColorBox.style.backgroundColor = newColor;
        
        var colorInfo = document.createElement('span');
        colorInfo.className = 'color-info';
        colorInfo.textContent = 'RGB(' + redValue + ', ' + greenValue + ', ' + blueValue + ')';
        
        newColorBox.appendChild(colorInfo);
        
        var newColors = document.getElementById('new-colors');
        newColors.appendChild(newColorBox);
    });
    
}

// //#endregion