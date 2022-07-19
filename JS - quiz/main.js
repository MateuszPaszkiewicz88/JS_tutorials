alert("WItam w Ninja Quiz!");

const quiz = [
    ["Jak na imię miał Superman?","Clark Kent"],
    ["Jak na imie miała Wonder Woman?","Diana Prince"],
    ["Jak na imię miał Batman?","Bruce Wayne"]
]

let score = 0;

for (const[question, answear] of quiz){
    const response = prompt(question);
    if (response === answear){
        alert("Prawidłowa odpowiedź!");
        score++
    }else{
        alert(`Niestety, prawidłowa odpowiedź to ${answear}`)
    }
}
alert(`Zdobyłeś łącznie ${score} punktów.`)