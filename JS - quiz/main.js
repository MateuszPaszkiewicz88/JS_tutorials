alert("WItam w Ninja Quiz!");

const quiz = [
    ["Jak na imię miał Superman?","Clark Kent"],
    ["Jak na imie miała Wonder Woman?","Diana Prince"],
    ["Jak na imię miał Batman?","Bruce Wayne"]
]

function start(quiz){
    let score = 0;
    for (const[question,answer] of quiz){
        const response = ask(question);
        check(response,answer);
    }
gameOver();

function ask(question){
    return prompt(question);
}
function check(response,answer){
    if(response===answer){
        alert("Prawidłowa odpowiedź!");
        score++;
    }else{
        alert(`Źle. Prawidłowa odpowiedź to ${answer}`)
    }
}
function gameOver(){
    alert(`Koniec gry. Uzyskany wynik to: ${score}`)
}
}
start(quiz);