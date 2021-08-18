let a= document.querySelector('button');
a.addEventListener('click', function(){
  let b= document.querySelector('textarea').value;
  fetch("http://localhost:8000/backend", {
    method: "POST",
    body: JSON.stringify(b)
  }).then(res => {
    fetch('http://localhost:8000/backend').then(function(res){
      return res.text();
    }).then(function(res){
      if(res.substr(0,15)=='<!DOCTYPE html>'){
        console.log('err');
        document.querySelector('.console').innerText="Compilation failed. Syntax error";
      }else{
      document.querySelector('.console').innerText=res
    }
    })
  });
});
