//#region   TASK 1


    const randomNumber = document.getElementById('random-number');
    const generateBtn = document.getElementById('generate-btn');

    generateBtn.addEventListener('click', function() {
        var randomNum = Math.floor(Math.random() * 101);
        randomNumber.innerText = randomNum;
    });


//#endregion

//#region   TASK 3

{
    var button = document.getElementById('toggle-button');
    var textHide = document.getElementById('text');

    button.addEventListener('click', function() {
        if (textHide.style.display == 'block') 
            textHide.style.display = 'none';
        else 
            textHide.style.display = 'block';
    });
}

//#endregion

//#region   TASK 4

{
    var buttonHTML = document.getElementById('button-HTML');
    var buttonCSS = document.getElementById('button-CSS');
    var buttonJS = document.getElementById('button-JS');

    var tabHTML = document.getElementById('tab-HTML');
    var tabCSS = document.getElementById('tab-CSS');
    var tabJS = document.getElementById('tab-JS');

    var text = document.getElementById('tab-content')

    buttonHTML.addEventListener('click', function() {
        tabHTML.style.display = 'block';
        tabCSS.style.display = 'none';
        tabJS.style.display = 'none';
    });
    buttonCSS.addEventListener('click', function() {
        tabHTML.style.display = 'none';
        tabCSS.style.display = 'block';
        tabJS.style.display = 'none';
    });
    buttonJS.addEventListener('click', function() {
        tabHTML.style.display = 'none';
        tabCSS.style.display = 'none';
        tabJS.style.display = 'block';
    });
}

//#endregion

//#region   TASK 6

{
    let progressBar = document.getElementById("progress");
    let currentProgress = 0;
    
    function increaseProgress() {
        if (currentProgress < 100) {
            currentProgress += 5;
            progressBar.style.width = currentProgress + "%";
        }
    }
}

//#endregion
