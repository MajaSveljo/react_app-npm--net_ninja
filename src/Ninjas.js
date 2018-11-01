import React from 'react';

const Ninjas = ({ninjas}) => {
    //regular if statement

    // const ninjaList = ninjas.map(ninja => {
    //     if (ninja.age > 20) {
    //         return (
    //             <div className="ninja" key={ninja.id}>
    //                 <div>{ninja.name}</div>
    //                 <div>{ninja.age}</div>
    //                 <div>{ninja.belt}</div>
    //             </div>
    //         )
    //     } else {
    //         return null
    // //     }
    // })

    //ternary solution

    // const ninjaList = ninjas.map(ninja => {
    //     // condition ? (returns if true) : (returns if false)
    //     return ninja.age > 20 ? (
    //         <div className="ninja" key={ninja.id}>
    //             <div>{ninja.name}</div>
    //             <div>{ninja.age}</div>
    //             <div>{ninja.belt}</div>
    //         </div>             
    //     ) : null
    //     //this is one way. it can also be output (nested) directly
    //     //in the template
    // });
    return(
        <div className="ninja-list">
            {
                ninjas.map(ninja => {
                    return ninja.age > 20 ? (
                        <div className="ninja" key={ninja.id}>
                            <div>{ninja.name}</div>
                            <div>{ninja.age}</div>
                            <div>{ninja.belt}</div>
                        </div>             
                    ) : null;
            })
            }
        </div>
    )
}

export default Ninjas