import {DOM} from "../utility/DOM";
import {ChampionCard} from "./ChampionCard";

export class CardContainer extends DOM {
    cards = []

    constructor(data) {
        super();

        // add the cardContainer DOM
        this.DOM = this.addElement(this.DOM, "section");
        this.DOM.id = data.name
        this.DOM.classList.add("cards");
        
        // add card for each data of cards
        data.champions.forEach(item => {
            this.cards.push(new ChampionCard(item, this.DOM))
        });
    }
}