import { useState } from "react";
import "./Calculator.css";
import iphone from './assets/iphone.png'
const Calculator = ()=>{
const[input,setInput] =useState("");


 return(
    <> 
     <div class="phone">
        <img src={iphone} alt=""/>
        <div class="Calculator">
            <input type="text" placeholder="0" className="Display" value={input} readOnly/>
            <div class="buttons">
                   <button  class="ot" onClick={()=>setInput("")} >AC</button>
                   <button  class="ot" onClick={()=>setInput(input+"+/-")}>+/-</button>
                   <button  class="ot" onClick={()=>setInput(input+"%")}>%</button>
                   <button class="op" onClick={()=>setInput(input+"÷")}>÷</button>
                   <button onClick={()=>setInput(input+7)} >7</button>
                   <button onClick={()=>setInput(input+8)}>8</button>
                   <button onClick={()=>setInput(input+9)}>9</button>
                   <button class="op" onClick={()=>setInput(input+"*")}>×</button>
           
                   <button onClick={()=>setInput(input+4)}>4</button>
                   <button onClick={()=>setInput(input+5)}>5</button>
                    <button onClick={()=>setInput(input+6)} >6</button>
                   <button class="op" onClick={()=>setInput(input+"-")}>-</button>
                   <button onClick={()=>setInput(input+1)}>1</button>
                   <button onClick={()=>setInput(input+2)} >2</button>
                   <button onClick={()=>setInput(input+3)}>3</button>
                   <button class="op" onClick={()=>setInput(input+"+")}>+</button>
                  <button ></button>
                  <button onClick={()=>setInput(input+0)}>0</button>
                  <button onClick={()=>setInput(input+".")}>•</button>
                  <button class="op" onClick={()=>setInput(eval(input))}>=</button>
            </div>
            
        </div>
    </div>

   </>
    )
}

export default Calculator;