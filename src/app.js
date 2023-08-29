import "../css/style.scss";
import {parseJSON} from "./utility/json";
import {Card} from "./league-site/Card";
import {CardContainer} from "./league-site/CardContainer";
import json from "../assets/json/CharacterData.json";
import { DOM } from "./utility/DOM";





    


const data = json.content;
// add Dom

const header= document.createElement("header");
header.id = "header";
document.body.appendChild(header);

new CardContainer(data);
