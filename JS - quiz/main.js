const view = {
  score: document.querySelector("#score strong"),
  question: document.getElementById("question"),
  result: document.getElementById("result"),
  info: document.getElementById("info"),
  render(target,content,attributes){
    for(const key in attributes){
      target.setAttribute(key,attributes[key]);
    }
    target.innerHTML = content;
  }
};

alert("WItam w Ninja Quiz!");
const quiz = [
  { name: "Superman", realName: "Clark Kent" },
  { name: "Wonder Woman", realName: "Diana Prince" },
  { name: "Batman", realName: "Bruce Wayne" },
];

const game = {
  start(quiz) {
    this.questions = [...quiz];
    this.score = 0;

    for (const question of this.questions) {
      this.question = question;
      this.ask();
    }
    this.gameOver();
  },

  ask() {
    const question = `Jak ma na imię ${this.question.name}?`;
    view.render(view.question,question);
    const response = prompt(question);
    this.check(response);
  },

  check(response) {
    const answer = this.question.realName;
    if (response === answer) {
      view.render(view.result,"Prawidłowa odpowiedź!",{'class':'correct'});
      alert("Prawidłowa odpowiedź!");
      this.score++;
      view.render(view.score,this.score)
    } else {
      view.render(view.result,`Źle. Prawidłowa odpowiedź to ${answer}.`,{"class":"wrong"})
      alert(`Źle. Prawidłowa odpowiedź to ${answer}`);
    }
  },

  gameOver() {
    view.render(view.info,`Koniec gry. Uzyskany wynik to: ${this.score}`)
  },
};
game.start(quiz);
