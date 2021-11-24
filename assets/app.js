const LEFT_BUTTON = 0;
const RIGHT_BUTTON = 2;

const cases = document.getElementsByClassName("case");

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

function test() {
    alert('coucou')
}


for (let i = 0; i < cases.length; i++) {
    cases[i].addEventListener('mouseup', function (event) {
        if (event.button === LEFT_BUTTON) {



            insertText(this, 'X', 'green')}
        else if (event.button === RIGHT_BUTTON)
            insertText(this, 'O', 'red')
    });
}

function insertText(element, lettreJoueur, classCss) {
    element.innerHTML = lettreJoueur;
    element.classList.add(classCss);
}


/*empecher le double clic sur la même case avec un innerHTML*/