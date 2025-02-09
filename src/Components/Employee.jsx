import React from 'react'

export const Employee = () => {

    const employees = [
        {
          id: 1,
          name: "Alice Johnson",
          position: "Software Engineer",
          department: "Engineering",
          salary: 85000,
        },
        {
          id: 2,
          name: "Bob Smith",
          position: "Marketing Manager",
          department: "Marketing",
          salary: 75000,
        },
        {
          id: 3,
          name: "Charlie Davis",
          position: "Product Manager",
          department: "Product",
          salary: 95000,
        },
        {
          id: 4,
          name: "Diana Taylor",
          position: "HR Specialist",
          department: "Human Resources",
          salary: 60000,
        },
        {
          id: 5,
          name: "Ethan Lee",
          position: "Software Engineer",
          department: "Error Solving",
          salary: 105000,
        },
      ];
      

  return (
    <div style={{"padding" : '10px'}}>
        <h1 style={{'textAlign' : 'center'}}>Employee List</h1>
        <table class='table table-dark' style={{"marginTop" : "2%" , "backgroundColor":"black"}}>
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Position</th>
                <th>Department</th>
                <th>Salary</th>
            </thead>

            <tbody>

            {
                employees.map((emp)=>{
                    return <tr>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td style={{"backgroundColor" : emp.position=="Software Engineer" ? "Green" : "black"}}>{emp.position}</td>
                        <td>{emp.department}</td>
                        <td>
                            <span style={{"color" : emp.salary >=90000 ? "red" : "white"}}>{emp.salary}</span>
                
                        </td>
                    </tr>
                })
            }

            </tbody>
        </table>
            
    </div>
  )
}
