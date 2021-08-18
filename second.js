//button 1
let a;
let value;
let previousPressedButton;


//
// let ok;
// ok= document.querySelector(".ok");
// ok.addEventListener("click", function(event){
//   let city = document.querySelector("input").value;
//   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a06381dd4214ae9f7b40061c53a7fbbf`).then(function(response){
//     return response.json();
//   }).then(function(response){
//     document.querySelector("h3").innerHTML=`The temperature of ${city} is` + (response.main.temp-273);
//   });
// })





addEventListener("keydown", function(event){
  if(event.key==="1"||event.key==="2"||event.key==="3"){
    document.querySelector(".display").innerHTML+= event.key;
  }
  if(event.key==="Backspace"){
    let display = document.querySelector(".display");
    display.innerHTML = display.innerHTML.slice(0,-1);
  }
});

a= document.querySelector(".button-1");

a.addEventListener("click", function(event){
  let b = document.querySelector(".display");
  b.innerHTML+="1";
})
//button 2
let c;
c= document.querySelector(".button-2");

c.addEventListener("click", function(event){
  let d = document.querySelector(".display");
  d.innerHTML+="2";
})

//button 3
let e;
e= document.querySelector(".button-3");

e.addEventListener("click", function(event){
  let f = document.querySelector(".display");
  f.innerHTML+="3";
})

//button plus
let g;
g= document.querySelector(".button-pl");

g.addEventListener("click", function(event){
  let f = document.querySelector(".display");
  value = f.innerHTML;
  previousPressedButton = "plus";
  f.innerHTML="";
})

//button plus
let i;
i= document.querySelector(".button-mn");

i.addEventListener("click", function(event){
  let f = document.querySelector(".display");
  value = f.innerHTML;
  previousPressedButton = "minus";
  f.innerHTML="";
})

//button eq
let h;
h= document.querySelector(".button-eq");
h.addEventListener("click", function(event){
  let f = document.querySelector(".display");
  let valueNew= f.innerHTML;
  if(previousPressedButton==="plus"){
    f.innerHTML= parseInt(value)+parseInt(valueNew)
  }
  if(previousPressedButton==="minus"){
    f.innerHTML= parseInt(value)-parseInt(valueNew)
  }
  if(previousPressedButton==="sin"){
    f.innerHTML= Math.sin(parseInt(value))
  }
})
//sin
// let sin;
// sin= document.querySelector(".button-sin");
// sin.addEventListener("click", function(event){
//   let f = document.querySelector(".display");
//   value=f.innerHTML;
//   let food = document.querySelector("input").value;
//   fetch(`https://foodish-api.herokuapp.com/api/images/${food}`).then(function(res){
//     return res.json();
//   }).then(function(res){
//     console.log(res['image'])
//     document.querySelector("img").src= res['image'];
//   })
// })

  //
  // fetch(`https://foodish-api.herokuapp.com/api/`).then(function(res){
  //   return res.json();
  // }).then(function(res){
  //   console.log(res['image'])
  //   document.querySelector("img").src= res['image'];
  // })
