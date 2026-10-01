import{useState} from "react";
import Decrement from "./Decrement";

export default function Increment({counts,setcounts}){
    return(
        <>
        <h1>Increment is: {counts} </h1>
        <button onClick={()=>setcounts(counts+1)}>Increment</button>
        </>
    )
}