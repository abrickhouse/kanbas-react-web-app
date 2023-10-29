import { useState } from "react";

function FunctionDestructing() {
 const add = (a, b) => a + b;
 const sum = add(1, 2);
 const subtract = ({ a, b }) => a - b;
 const difference = subtract({ a: 4, b: 2 });
 const w = ["ewq", "dsa", "asd", "tre", "zxc"];
 const r = w.find((a, b) => a === "tre");
 const w1 = [51, 42, 33, 24, 15];
 const q = w1.findIndex((b) => b === 42);
 const qwe = 456;
 const asd = 456;
 const zxc = [321, qwe, 432, asd, 321];
 const [e, a] = zxc;
 const [yui, rty] = useState("gfd");
 return (
  <div>
   <h2>Function Destructing</h2>
   {r}
   <br />
   {q}
   <br />
   {e}
   <br />
   <div>
    <h2>{yui}</h2>
    <input value={yui} onChange={(qwe) => rty(qwe.target.value)} />
   </div>
   {a}
   <br />
   const add = (a, b) =&gt; a + b;
   <br />
   const sum = add(1, 2);
   <br />
   const subtract = (&#123; a, b &#125;) =&gt; a - b;
   <br />
   const difference = subtract(&#123; a: 4, b: 2 &#125;);
   <br />
   sum = {sum}
   <br />
   difference = {difference}
  </div>
 );
}
export default FunctionDestructing;
