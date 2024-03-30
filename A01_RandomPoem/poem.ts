namespace aufgabe1 {

let subject: string[] = ["Lena", "Clara", "Fabian", "Tobi", "Rosalie", "Alicia"]
let predicate: string[] = ["liebt", "hasst", "mag", "findet", "sucht", "sieht"]
let object: string[] = ["Hasen", "Kühe", "Zauberer", "Beeren", "Äpfel", "Bücher"]

for (let i = subject.length; i >= 1; i--){
    let verse = getverse(subject, predicate, object);
    console.log(verse);
}

function getverse(_subject: string[],_predicate: string[],_object: string[]) {
    let verse: string ="";

    let randomNumber: number = Math.floor(Math.random() * _subject.length);
    verse += _subject.splice(randomNumber, 1)[0] + " "; 

    randomNumber = Math.floor(Math.random() * _predicate.length);
    verse += _predicate.splice(randomNumber, 1)[0] + " "; 

    randomNumber = Math.floor(Math.random() * _object.length);
    verse += _object.splice(randomNumber, 1)[0]; 

    return verse; 
}
}


