$(function(){
    let numDom = document.getElementsByClassName("numComma");
    for (let i = 0; i < numDom.length; i++) {
        console.log("numDom:"+numDom[i].innerText);    
    }
    let money = 1234567890;
    console.log(typeof money);
    let res = money.toLocaleString();
    console.log("res:"+res);
    let resFeedBack=/ /;
    console.log("resFeedBack:"+resFeedBack);
});