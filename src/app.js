import "../css/style.scss";
import {parseJSON} from "./utility/json";
import {Card} from "./league-site/Card";
import {CardContainer} from "./league-site/CardContainer";
import json from "../assets/json/CharacterData.json";
import { DOM } from "./utility/DOM";
import { Person } from "./league-site/Person";




const data = json.content;
// add Dom

const header= document.createElement("header");
header.id = "header";
document.body.appendChild(header);
header.innerText = "League of Legends";

const container = document.createElement("section");
container.id = "person-container";
document.body.appendChild(container);

new Person(data[0], container);
new Person(data[1], container);
new CardContainer(data[0]);
new CardContainer(data[1]);
