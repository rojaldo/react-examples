export class CardModel {
    constructor(jsonCard) {
        this.question = jsonCard.question;
        this.rightAnswer = jsonCard.correct_answer;
        this.answers = [...jsonCard.incorrect_answers, this.rightAnswer];
        this.category = jsonCard.category;
        this.type = jsonCard.type;
        this.difficulty = jsonCard.difficulty;
    }
}