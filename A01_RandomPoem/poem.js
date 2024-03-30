"use strict";
var aufgabe1;
(function (aufgabe1) {
    let subject = ["Lena", "Clara", "Fabian", "Tobi", "Rosalie", "Alicia"];
    let predicate = ["liebt", "hasst", "mag", "findet", "sucht", "sieht"];
    let object = ["Hasen", "Kühe", "Zauberer", "Beeren", "Äpfel", "Bücher"];
    for (let i = subject.length; i >= 1; i--) {
        let verse = getverse(subject, predicate, object);
        console.log(verse);
    }
    function getverse(_subject, _predicate, _object) {
        let verse = "";
        let randomNumber = Math.floor(Math.random() * _subject.length);
        verse += _subject.splice(randomNumber, 1)[0] + " ";
        randomNumber = Math.floor(Math.random() * _predicate.length);
        verse += _predicate.splice(randomNumber, 1)[0] + " ";
        randomNumber = Math.floor(Math.random() * _object.length);
        verse += _object.splice(randomNumber, 1)[0];
        return verse;
    }
})(aufgabe1 || (aufgabe1 = {}));
//# sourceMappingURL=poem.js.map