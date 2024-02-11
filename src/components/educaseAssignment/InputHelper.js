import React from 'react'

function InputHelper({state}) {
    return<>
    {
        state.map((val,index)=>{
            return <div key={index} className='inputSection'>
                        <span>{val.name}<span style={{color:'red'}}>{val.imp?'*':''}</span></span>
                        <input value={val.value} placeholder={val.placeholder} type="text">
                        </input>
                    </div>
        })
    }
    </>}
export default InputHelper