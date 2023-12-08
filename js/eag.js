var error = 0
var AllPlayerAnswer = []
var allanswer = []

function getvalue() {
    delErrorMessage();
    var valide = checkValidation();
    if (valide == 1){
        var point_joueur = []
        var reponses_joueur = document.querySelectorAll( 'input[type=radio]:checked' );
        for (var item of reponses_joueur) {
            if(item.checked == true) {
                point_joueur.push(item.value)
            }
        }
        stop_answer()
        score_creater(point_joueur)
        solver()
    }
    if (valide == 0) {
        ErrorMessage();
    }
}

function checkValidation() {
    let NbReponse = document.querySelectorAll("input[type=radio]:checked");
    if (NbReponse.length != 4) {
        return 0
    }
    if (NbReponse.length == 4) {
        return 1
    }
}

function stop_answer() {
    var radios = document.querySelectorAll('input[type=radio]')
    for (var item of radios) {
        item.disabled = true
    }
    var btn = document.getElementById('Btn-valider');
    btn.disabled = true
}

function score_creater(point_joueur){
    var points_total = 0;

    for (var item of point_joueur) {
        points_total += parseInt(item)
    }

    let newP = document.createElement('p');
    newP.textContent = 'Votre score est de ' + String(points_total) + '/4';

    let position = document.getElementById('Resultat');

    position.insertAdjacentElement('afterbegin', newP);
}
function solver() {
    var btnradio = document.querySelectorAll( 'input[type=radio]' );
    for (var item of btnradio) {
        if(item.value == 1) {
            let data = item.dataset.reponse;
            allanswer.push(data)
          }
    }
    for (var i = 0; i < allanswer.length; ++i){
        let newP = document.createElement('p');
        newP.textContent = 'La bonne réponse à  la question '+ String(i+1) +' était: '+ allanswer[i];
        newP.setAttribute("class","rep")

        let position = document.getElementById('correction');

        position.insertAdjacentElement('beforeend', newP);
    }
}

function ErrorMessage() {
    error = 1
    let message = document.createElement("p");
    let contener = document.getElementById("Resultat")
    message.setAttribute("id","errormessage")
    message.textContent = "Vous n'avez pas répondu à  toute les questions, veuillez répondre à  toute les questions..."
    contener.insertAdjacentElement("beforeBegin", message)
}

function delErrorMessage() {
    if (error == 1) {
        let error = document.getElementById("errormessage")
        error.remove()
        error = 0
    }}