import {DOM} from "../utility/DOM";
import {ChampionCard} from "./ChampionCard";

export class CardContainer extends DOM {
    cards = []

    constructor(data, DOM) {
        super();

        // add the cardContainer DOM
        this.DOM = this.addElement(this.DOM, "section");

        // add card for each data of cards
        data.forEach(item => {
            this.cards.push(new ChampionCard(item, this.DOM))
        });
    }
}