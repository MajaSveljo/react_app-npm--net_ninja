import React from 'react';
import './Ninjas.css'

const Ninjas = ({ninjas, deleteNinja}) => {
    const ninjaList = ninjas.map(ninja => {
        if (ninja.age > 20){
            return (
                <div className="ninja" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    {/* if we need to pass a parameter directly we need to
                    surround it with anonimous function */}
                    <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
                </div>
            )    
        } else {
            return null
        }
    })

    return(
        <div className="ninja-list">
            {ninjaList}
        </div>
    )
}

export default Ninjas