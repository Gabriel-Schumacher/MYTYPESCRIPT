(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const u=()=>({title:"Data types can be set on function parameters",explanation:"This is the syntax when indicating the data type of a function parameter. After the parameter name add a colon (:), a space and then the data type you expect. Be sure to use the primitive data types! (e.g. 'number' instead of 'Number')",code:`<pre data-prefix="1"><code>function add(num1; number, num2: number) {</code></pre>

        <pre data-prefix="2"><code>  return num1 + num2</code></pre> 
        <pre data-prefix="3"><code>}</code></pre>`}),l=()=>({title:"Object data type with all properties set",explanation:"TypeScript can infer the data type of an object if all properties are set, but this example shows how to explicitly set the types of each property.",code:`<pre data-prefix="1"><code> enum Role {ADMIN, DEV, STUDENT}</code></pre>
          <pre data-prefix="2"><code></code></pre>
          <pre data-prefix="3"><code>const sportsCar: {</code></pre>
          <pre data-prefix="4"><code> make: string</code></pre>
          <pre data-prefix="5"><code> model: string</code></pre>
          <pre data-prefix="6"><code> horsepower: number</code></pre>
          <pre data-prefix="7"><code> stype: string</code></pre>
          <pre data-prefix="8"><code> isFast: boolean</code></pre>
          <pre data-prefix="9"><code> colors: string</code></pre>
          <pre data-prefix="10"><code> driver: [number, string]</code></pre>
          <pre data-prefix="11"><code> role: Role</code></pre>
          <pre data-prefix="12"><code> } = </code></pre>
          <pre data-prefix="13"><code> make: 'McLaren',</code></pre>
          <pre data-prefix="14"><code> model: '720s',</code></pre>
          <pre data-prefix="15"><code> horsepower: 720,</code></pre>
          <pre data-prefix="16"><code> style: 'coupe',</code></pre>
          <pre data-prefix="17"><code> isFast: true,</code></pre>
          <pre data-prefix="18"><code> colors: ['red', 'blue', 'silver']</code></pre>
          <pre data-prefix="19"><code> driver: [1, 'McLaren']</code></pre>
          <pre data-prefix="20"><code> role: Role.ADMIN,</code></pre>
          <pre data-prefix="21"><code> }</code></pre> `}),f=()=>({title:"Typescript will infer types",explanation:"This function has the return type, which can be inferred by typescript. The value of the return type can be assigned by adding a colon (:) and the type after.",code:`<pre data-prefix="1">Infer the return type</code></pre>
    <pre data-prefix="1">function add1(n1: number, n2: number) {</code></pre>
    <pre data-prefix="2">  return n1 + n2</code></pre>
    <pre data-prefix="3">}</code></pre>
    <pre data-prefix="4"><code> <!--Space--> </code></pre>
    <pre data-prefix="5">function add2(n1: number, n2: number) {</code></pre>
    <pre data-prefix="6">  return n1.toString() + n2.toString()</code></pre>
    <pre data-prefix="7">}</code></pre>
    <pre data-prefix="8"><code> <!--Space--> </code></pre>
    <pre data-prefix="9"><code>//Assign the return type </code></pre>
    <pre data-prefix="10">function add1(n1: number, n2: number): number {</code></pre>
    <pre data-prefix="11">  return n1 + n2</code></pre>
    <pre data-prefix="12">}</code></pre>`}),m=()=>({title:"Types that describe a function, regarding the parameters and value of the function.",explanation:"A function type is create with arrow notion () => with the return type specified after. Inside the function you add parameters for the types used.",code:`<pre data-prefix="1"><code>//Example Function</code></pre>
    <pre data-prefix="2"><code>function add(num1: number, num2: number) {</code></pre>
    <pre data-prefix="3"><code>   return num1 + num2;</code></pre>
    <pre data-prefix="4"><code>}</code></pre>
    <pre data-prefix="5"><code><!--Space--></code></pre>
    <pre data-prefix="6"><code>//Function as Type:</code></pre>
    <pre data-prefix="7"><code>let combineValues: (a:number, b:number) => number</code></pre>
    <pre data-prefix="8"><code><!--Space--></code></pre>
    <pre data-prefix="9"><code>combineValues = add</code></pre>
    <pre data-prefix="10"><code>console.log(combineValues(8, 8))</code></pre>`}),x=()=>({title:"Different value types.",explanation:"Arrays, Tuples and Enums are all different ways to store data.",code:`<pre data-prefix="1">//Arrays stores multiple values, which can be different.</code></pre> 
      <pre data-prefix="2"><!-- Space --></code></pre>
      <pre data-prefix="3">const person1 = {</code></pre>
      <pre data-prefix="4">name: 'Gabriel',</code></pre>
      <pre data-prefix="5">age: 24,</code></pre>
      <pre data-prefix="6">hobbies: ['Coding', 'Cooking'], //Array data</code></pre>
      <pre data-prefix="7">}</code></pre>
      <pre data-prefix="8"> <!-- Space --></code></pre>
      <pre data-prefix="9">//A Tuple is fixed lengthed array, with fixed types.</code></pre>
      <pre data-prefix="10"><!-- Space --></code></pre>
      <pre data-prefix="11">const person2: {</code></pre>
      <pre data-prefix="12"> name: string;</code></pre>
      <pre data-prefix="13">age: number;</code></pre>
      <pre data-prefix="14">hobbies: string[];</code></pre>
      <pre data-prefix="15">role: [number, string]; //Assigning tuple parameters</code></pre>
      <pre data-prefix="16">} = {</code></pre>
      <pre data-prefix="17"> name: 'Gabriel',</code></pre>
      <pre data-prefix="18">age: 24,</code></pre>
      <pre data-prefix="19">hobbies: ['Coding', 'Cooking'],</code></pre>
      <pre data-prefix="20">role: [2, 'author']</code></pre>
      <pre data-prefix="21">}</code></pre>
      <pre data-prefix="22"><!-- Space --></code></pre>
      <pre data-prefix="23">//Enums allow the definition of set of named global constants</code></pre>
      <pre data-prefix="24"><!-- Space --></code></pre>
      <pre data-prefix="25">enum Role { ADMIN, READ_ONLY, AUTHOR }</code></pre>
      <pre data-prefix="26"><!-- Space --></code></pre>
      <pre data-prefix="27">const person3 = {</code></pre>
      <pre data-prefix="28">name: 'Gabriel',</code></pre>
      <pre data-prefix="29">age: 24,</code></pre>
      <pre data-prefix="30">hobbies: ['Coding', 'Cooking'],</code></pre>
      <pre data-prefix="31">role: Role.ADMIN //Using the enum type</code></pre>
      <pre data-prefix="32">}</code></pre>`}),b=()=>({title:"Values with more than a single type",explanation:"A union type describes a value that can be one of several types. We use the pipe ( | ) to separate each type, so number | string | boolean is the type of a value that can be a number , a string , or a boolean.  By using literal types you can allow an exact value which a string, number, or boolean must have.",code:`<pre data-prefix="1"><code>//Union Type</code></pre>
          <pre data-prefix="2"><code>function combine(input1: number | string, input2: number | string) { </code></pre>
          <pre data-prefix="3"><code> let result </code></pre>
          <pre data-prefix="4"><code> if (typeof input1 === 'number' && typeof input2 === 'number') { </code></pre>
          <pre data-prefix="5"><code>    result = input1 + input2 </code></pre>
          <pre data-prefix="6"><code> } else { </code></pre>
          <pre data-prefix="7"><code>    result = input1.toString() + input2.toString()</code></pre>
          <pre data-prefix="8"><code> } </code></pre>
          <pre data-prefix="9"><code> return result</code></pre>
          <pre data-prefix="10"><code>} </code></pre>

          <pre data-prefix="11"><code> </code></pre>
          <pre data-prefix="12"><code>//Literal Type</code></pre>
          <pre data-prefix="13"><code>function combine2(input1: number | string,</code></pre>
          <pre data-prefix="14"><code>   input2: number | string, resultConversion: 'as-number' | 'as-text') {</code></pre>
          <pre data-prefix="15"><code>  let result</code></pre>
          <pre data-prefix="16"><code>  if (typeof input1 === 'number' && typeof input2 === 'number' ||</code></pre>
          <pre data-prefix="17"><code>  resultConversion === 'as-number') {</code></pre>
          <pre data-prefix="18"><code>    result = +input1 + +input2</code></pre>
          <pre data-prefix="19"><code>  } else {</code></pre>
          <pre data-prefix="20"><code>    result = input1.toString() + input2.toString()</code></pre>
          <pre data-prefix="21"><code>  }</code></pre>
          <pre data-prefix="22"><code>  return result</code></pre>
          <pre data-prefix="23"><code>}</code></pre>`}),y=()=>({title:"Function types have parameters and a return type.",explanation:"In this example the function paremeters accept two numbers. It is also set to return a number by using a colon (:) then stating the return type.",code:`<pre data-prefix="1"><code>function addAndHandle(n1: number, n2: number): number {</code></pre>
          <pre data-prefix="2">return n1 + n2</code></pre>
          <pre data-prefix="3">}</code></pre>`}),g={make:"McLaren",model:"720s",horsepower:720,style:"coupe",isFast:!0,colors:["red","blue","silver"],driver:[1,"McLaren"]};console.log(g);function h(r,e){return r+e}function S(r,e){return r.toString()+e.toString()}function T(r,e){return r+e}console.log(h);console.log(S);console.log(T);function v(r,e){return r+e}let i;i=v;console.log(i(8,8));const E={name:"Gabriel",age:24,hobbies:["Coding","Cooking"]},A={name:"Gabriel",age:24,hobbies:["Coding","Cooking"],role:[2,"author"]},L={name:"Gabriel",age:24,hobbies:["Coding","Cooking"],role:0};console.log(E);console.log(A);console.log(L);function s(r,e){let n;return typeof r=="number"&&typeof e=="number"?n=r+e:n=r.toString()+e.toString(),n}const w=s(30,26);console.log(w);const C=s("Gabriel","Schumacher");console.log(C);function c(r,e,n){let a;return typeof r=="number"&&typeof e=="number"||n==="as-number"?a=+r+ +e:a=r.toString()+e.toString(),a}console.log(c(25,3.5,"as-number"));console.log(c("25","3.5","as-number"));console.log(c("25","3.5","as-text"));function k(r,e){return r+e}console.log(k);const q=document.querySelector("#funcParams"),N=document.querySelector("#objectTypes"),M=document.querySelector("#funcReturnTypes"),R=document.querySelector("#funcAsType"),B=document.querySelector("#ArrayTupleEnum"),D=document.querySelector("#UnionLiteral"),I=document.querySelector("#funcType"),F=document.querySelector(".card-title"),G=document.querySelector("#card-content"),O=document.querySelector("#code-content");q.addEventListener("click",p.bind(null,u));N.addEventListener("click",p.bind(null,l));M.addEventListener("click",p.bind(null,f));R.addEventListener("click",p.bind(null,m));B.addEventListener("click",p.bind(null,x));D.addEventListener("click",p.bind(null,b));I.addEventListener("click",p.bind(null,y));function p(r){const{title:e,explanation:n,code:a}=r();F.textContent=e,G.textContent=n,O.innerHTML=a}
