import {DOM} from "../utility/DOM";
import {Card} from "./Card";

export class CardContainer extends DOM {
    cards = []

    constructor(data) {
        super();

        // add the cardContainer DOM
        this.DOM = this.addElement(this.DOM, "section");

        // add card for each data of cards
        data.forEach(item => {
            this.cards.push(new Card(item, this.DOM))
        });
    }
}