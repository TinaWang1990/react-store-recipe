import React from 'react'

function Title({name, title}) {
    return (
            <div className="text-center text-title">
                <h1 className="text-capitalize font-weigh-bold">
                    {name} <strong style={{color:'#b36452'}}>{title} </strong>
                </h1>
            </div>
    )
}

export default Title
