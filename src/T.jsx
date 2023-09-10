import React, { useState } from 'react';

const T = () => { 

    const [s,setS]=useState(0);
    const [m,setM]=useState(0);
    const [h,setH]=useState(0);
    const [str,sterStr]=useState(false)

    function start(){

    
            setInterval(()=>{
                setS(s+1)
                if(this.state.s==60){
                    setM(m+1)
                    setS(0)
                }
                if(this.state.m==60){
                    setH(h+1)
                    setM(0)
                }
            },1000)
            
        }
    }
    return(
        <div>
            <h1>{h}:{m}:{s} </h1>
            <button onClick={()=>{
                 start()
            }}>start</button>
            <button onClick={stop}>stop</button>

        </div>
    );


export default T;