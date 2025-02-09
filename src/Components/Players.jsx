import React from 'react'

export default function Players() {

    const cricketPlayers = [
        {
          id: 18,
          name: "Virat Kohli",
          age : 32,
          score : 145,
          isActive : true,
          role : "Batsman"
        },
        {
          id: 45,
          name: "Rohit Sharma",
          age : 35,
          score : 264,
          isActive : true,
          role : "Batsman"
        },
        {
          id: 154,
          name: "Pollard",
          age : 39,
          score : 189,
          isActive : false,
          role : "all-rounder"
        },
        {
          id: 14,
          name: "Gautam Gambhir",
          age : 41,
          score : 85,
          isActive : false,
          role : "Batsman"
        },
        {
          id: 95,
          name: "Japrit Bumrah",
          age : 33,
          score : 45,
          isActive : true,
          role : "Bowler"
        },
        {
          id: 8,
          name: "Mohamaad Shami",
          age : 38,
          score : 35,
          isActive : true,
          role : "Bowler"
        },
        {
          id: 17,
          name: "Hardik Pandya",
          age : 32,
          score : 106,
          isActive : true,
          role : "all-rounder"
        }
      ];

  return (
    <div style={{"padding":"8px"}}> 
      <h1 style={{"textAlign" : "center" , "color":"blue"}}>Cricketers Lists</h1>
    <table class="table table-dark" style={{"borderRadius":"10px"}}>
        <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Score</th>
            <th>isActive</th>
            <th>Role</th>
        </thead>

        <tbody>
        {
            cricketPlayers.map((player)=>{
                return <tr>
                    <td>{player.id}</td>
                    <td>{player.name}</td>
                    <td>{player.age >=40 ? player.age + " : "+"please retire" : player.age}</td>
                     <td style={{"color": player.score >=100 ? "green" : "white"}}>{player.score}</td> 
                    {/* <span style={{"color" : player.score >=100 ? "Green" : "black"}}>{player.score}</span> */}
                    <td>{player.age > 35 ? "Time to Retire" : "Fit to Play"}</td>
                    <td style={{"backgroundColor" : player.role == "all-rounder" ? "grey" : "default"}}>{player.role}</td>
                </tr>
            })
        }

        </tbody>

    </table>



       
    </div>
  )
}
