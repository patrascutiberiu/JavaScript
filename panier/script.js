function control(champs) {
    if (!isNaN(document.getElementById(champs).value) && (document.getElementById(champs).value).length > 0) {
        return true;
    } else {
        alert("Le champ est vide ou non valide");
        document.getElementById(champs).value = "";
        document.getElementById(champs).focus();
        return false;
    }
}

function calcul(champs) {
    var result = control(champs);
    if (result = true) {
        var prixTotal1 = document.getElementById("quantite1").value * document.getElementById("prix1").value;
        var prixTotal2 = document.getElementById("quantite2").value * document.getElementById("prix2").value;

        document.getElementById("prixT1").value = prixTotal1;
        document.getElementById("prixT2").value = prixTotal2;

        var somme = prixTotal1 + prixTotal2;
        document.getElementById("totalPrix").value = somme;
    }
}

var testQuantite1 = document.getElementById("quantite1");
testQuantite1.addEventListener('blur', function () {
    calcul("quantite1");
}, true);

var testPrix1 = document.getElementById("prix1");
testPrix1.addEventListener('blur', function () {
    calcul("prix1");
}, true);

var testQuantite2 = document.getElementById("quantite2");
testQuantite1.addEventListener('blur', function () {
    calcul("quantite1");
}, true);

var testPrix2 = document.getElementById("prix2");
testPrix2.addEventListener('blur', function () {
    calcul("prix2");
}, true);