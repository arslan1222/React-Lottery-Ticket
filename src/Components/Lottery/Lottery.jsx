import { useState } from "react";
import "./Lottery.css"
import { generatRandom, sum} from "./utils";

function Lottery(){

    let [ticket, setTicket] = useState(generatRandom(3));
    let isWinning = sum(ticket) === 15;

    function buyTicket(){
        setTicket(generatRandom(3));
    }
     
    return (

        <div>
            <h1>Lottery Ticket!</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br />
            <button onClick={buyTicket}>Buy New Ticket!</button>

            <h3>{isWinning && "Congratultions, You Won!"}</h3>
            

        </div>
    )
}

export default Lottery;