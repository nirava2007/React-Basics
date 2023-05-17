import React from 'react'

function NamesList() {
//     const names=['Nirava','Swapna','Rahul']
//   return (
//     <div>
//         {
//             names.map(name => <p>{name}</p>)
//         }
//     </div>
//   )
    const person = [
        {
            id: '01',
            name : 'Nirava',
            skill: 'React'
        },
        {
            id: '02',
            name : 'Vatsal',
            skill: 'Node'
        },
        {
            id: '03',
            name : 'Keya',
            skill: 'PHP'
        }
    ]
    const personList = person.map(person => <h2 key={person.id}>I am {person.name}. I am a {person.skill} enthusiast.</h2>)
    return(
        <div>
            {
                personList
            }
        </div>
    )
}

export default NamesList