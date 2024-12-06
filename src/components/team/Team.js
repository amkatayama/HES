import React from "react" 
import "./TeamStyles.css"
import TeamImg from "../teamimg/TeamImg"

import BoraBora from "../../assets/borabora.jpg"
import BoraBora2 from "../../assets/borabora2.jpg"
import Maldives from "../../assets/maldives.jpg"
import Maldives2 from "../../assets/maldives2.jpg"
import Maldives3 from "../../assets/maldives3.jpg"
import KeyWest from "../../assets/keywest.jpg"



function Team () {
    return (
        <div name = "team" className = "team">
            <div className = "MeetTheTeam">
                <h1>Meat The Team</h1>
            </div>
            <div className = "container">
                <TeamImg bgImg={BoraBora} text="Bora Bora" />
                <TeamImg bgImg={BoraBora2} text="Emerald Bay" />
                <TeamImg bgImg={Maldives} text="Maldives" />
                <TeamImg bgImg={Maldives2} text="Grenada" />
                <TeamImg bgImg={Maldives3} text="Barbados" />
                <TeamImg bgImg={KeyWest} text="Key West" />
            </div>
          
    
        </div>
    )
}

export default Team