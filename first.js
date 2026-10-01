import React,{useEffect,useState,useRef,useCallback,useMemo} from "react";
import ReactDOM from "react-dom/client";
import Increment from "./Increment";
import Decrement from "./Decrement";
function App(){
    const [counts,setcounts]=useState(0);
    return(
        <>
        <h1> Hello Shivam </h1>
        <Increment counts={counts} setcounts={setcounts}></Increment>
        <Decrement counts={counts} setcounts={setcounts}></Decrement>

        </>
    )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>);