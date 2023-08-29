import "../css/style.scss";
import {parseJSON} from "./utility/json";
import {Card} from "./league-site/Card";
import {CardContainer} from "./league-site/CardContainer";


const json = `
{
    "content":[
        {
            "name":"Lars", 
            "champions":[
                "Taliyah", "Fizz", "Sylas", 
                "Viktor", "Kennen", 
                "Kalista", "Yasuo"
            ]
        },
        {
            "name":"Jonathan", 
            "champions":[
                "Sion"
            ]
        }
    ]
}`;

let data = parseJSON(json);
if(data == null){
    alert("json data invalid")
}

data = data.content;

new CardContainer(data);
