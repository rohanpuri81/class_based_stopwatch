import React, { Component } from 'react'

export default class StopWatch extends Component{

    constructor(){
        super();
        this.state={
            h:0,
            m:0,
            s:0,
            str:false,
            bName:"start",
            arr:[]
   
        }
        this.n;
        
    }
  
    start(){
       

        if(!this.state.str){
            this.n=setInterval(()=>{
                this.setState({s:this.state.s+1})
                if(this.state.s==60){
                    this.setState({m:this.state.m+1})
                    this.setState({s:0})
                }
                if(this.state.m==60){
                    this.setState({h:this.state.h+1})
                    this.setState({m:0})
                }
            },1000)
            this.setState({bName:"stop"})
        }else if(this.state.str){
            clearInterval(this.n)
            this.setState({bName:"start"})
            
        }
        this.setState({str:!this.state.str})
    }

    record(){
        let obj={
            s1:this.state.s,
            m1:this.state.m,
            h1:this.state.h
        }

        this.setState({arr:[...this.state.arr,obj]})
        console.log(this.state.arr)
    }

    reset(){
        this.setState({h:0})
        this.setState({m:0})
        this.setState({s:0})
        clearInterval(this.n)
        this.setState({arr:[]})
    }
  


    render(){
        return(
            <div>
                <h1>{this.state.h}:{this.state.m}:{this.state.s} </h1>
                <button onClick={()=>{
                    this.start()
               }}>{this.state.bName}</button>

               <button onClick={()=>{
                this.record()
               }}>record</button>
               <button onClick={()=>{
                this.reset()
               }}>reset</button>
               <ul>
                 {
                   this.state.arr.map((val,ind)=>{
                       return(
                        <li key={ind}>{val.h1}:{val.m1}:{val.s1}</li>
                       );
                   })
                 }
               </ul>
                

            </div>
        );
    }
}