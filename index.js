function agecalculator (){
   const birthyearRef = document.querySelector("#birthyear");
   const currentyearRef = document.querySelector("#currentyear");
   const resultDivRef = document.querySelector("#age"); 


    let birthyear = Number(birthyearRef.value);
    let currentyear = Number(currentyearRef.value);
    console.log(birthyear);
    console.log(currentyear);


    const age=(currentyear-birthyear)
    resultDivRef.innerHTML =age;
}