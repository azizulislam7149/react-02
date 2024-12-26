import React, { useState } from 'react';

const Team = () => {
    const [team,setTeam]=useState(11);

    const teamPlayer = ()=>{
        const newPlayer = team + 10;
    setTeam(newPlayer)
    }
    const teamPlayer1 = ()=>{
        const newPlayer = team - 10;
    setTeam(newPlayer)
    }

    const teamStyle = {
        border :'2px solid red',
        borderRadius :'15px'
    }
    return (
        <div style={teamStyle}>
            <h2>Cricket Players :{team} </h2>
            <button onClick={teamPlayer}>Add Player</button>
            <button onClick={teamPlayer1}>Reduce Player</button>
        </div>
    );
};

export default Team;