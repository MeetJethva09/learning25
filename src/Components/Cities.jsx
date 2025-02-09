import React from "react";
export const Cities = ()=>{

    let cities = [
        {
          "id": 1,
          "name": "New York",
          "population": 8419600,
          "AQI": 45
        },
        {
          "id": 2,
          "name": "Los Angeles",
          "population": 1980400,
          "AQI": 365
        },
        {
          "id": 3,
          "name": "Chicago",
          "population": 2716000,
          "AQI": 130
        },
        {
          "id": 4,
          "name": "Houston",
          "population": 1128000,
          "AQI": 85
        },
        {
          "id": 5,
          "name": "Phoenix",
          "population": 2690000,
          "AQI": 300
        },
        {
          "id": 6,
          "name": "San Francisco",
          "population": 870887,
          "AQI": 55
        }
      ];
      
    return (
        <>
            <h2 style={{"textAlign":"center"}}>Cities Data</h2>
            <table className="table table-striped table-dark">

                <thead>
                        <th>Id</th>
                        <th>CityName</th>
                        <th>Population</th>
                        <th>AQI</th>
                </thead>

                <tbody>
                    {
                            cities.map((city)=>{
                                   return (
                                    <tr>
                                        <td>{city.id}</td>
                                        <td>{city.name}</td>
                                        <td style={{"color" : city.population >=2000000 ? "red" : "default"}}>{city.population}</td>
                                        <td style={{"color" : city.AQI >=300 ? "red" : "Green"}}>{city.AQI}</td>
                                    </tr>
                                   )
                            })
                    }

                </tbody>

            </table>
        </>
    )
}