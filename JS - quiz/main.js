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
    const question = `Jak ma na imię ma ${this.question.name}?`;
    const response = prompt(question);
    this.check(response);
  },

  check(response) {
    const answer = this.question.realName;
    if (response === answer) {
      alert("Prawidłowa odpowiedź!");
      this.score++;
    } else {
      alert(`Źle. Prawidłowa odpowiedź to ${answer}`);
    }
  },

  gameOver() {
    alert(`Koniec gry. Uzyskany wynik to: ${this.score}`);
  },
};
game.start(quiz);
