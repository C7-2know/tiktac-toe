
function valueChange(){
   
}
function writeValue(id){
    let turn=document.getElementById('turn').innerHTML;
    var div=document.getElementById(id).innerHTML

    if(div==''){
        document.getElementById("error").innerHTML=''
        document.getElementById(id).innerHTML=turn;
    }else{
        document.getElementById("error").innerHTML='the space already has a value';
        return false
    }
    if(turn==0){
        return document.getElementById('turn').innerHTML='x'
    }else{
        document.getElementById('turn').innerHTML=0
    }
    
}
function checkWinner(){
    var tab1=document.getElementById('but1');
    var tab2=document.getElementById('but2');
    var tab3=document.getElementById('but3');
    var tab4=document.getElementById('but4');
    var tab5=document.getElementById('but5');
    var tab6=document.getElementById('but6');
    var tab7=document.getElementById('but7');
    var tab8=document.getElementById('but8');
    var tab9=document.getElementById('but9');
    var value1=tab1.innerHTML;
    var value2=tab2.innerHTML;
    var value3=tab3.innerHTML;
    var value4=tab4.innerHTML;
    var value5=tab5.innerHTML;
    var value6=tab6.innerHTML;
    var value7=tab7.innerHTML;
    var value8=tab8.innerHTML;
    var value9=tab9.innerHTML;
    if(value1==value2&&value3==value2&&(value3&&value2&&value1!='')){
        show.innerHTML="Game--finished player --"+value3+' Win'
        tab1.style.backgroundColor="red";
        tab2.style.backgroundColor="red";
        tab3.style.backgroundColor="red"; 
    }else if(value4==value5&&value6==value5 &&(value3&&value4&&value5!='')){
        show.innerHTML="Game--finished player --"+value5+' Win'
        tab4.style.backgroundColor="red";
        tab5.style.backgroundColor="red";
        tab6.style.backgroundColor="red"; 
    }else if(value9==value7&&value7==value8&&(value7&&value8&&value9!='')){
        show.innerHTML="Game--finished player --"+value7+' Win'
        tab9.style.backgroundColor="red";
        tab7.style.backgroundColor="red";
        tab8.style.backgroundColor="red"; 
    }else if(value1==value4&&value4==value7&&(value1&&value4&&value7!='')){
        show.innerHTML="Game--finished player --"+value1+' Win'
        tab1.style.backgroundColor="red";
        tab4.style.backgroundColor="red";
        tab7.style.backgroundColor="red"; 
    }else if(value2==value5&&value2==value8&&(value2&&value8&&value5!='')){
        show.innerHTML="Game--finished player --"+value2+' Win'
        tab5.style.backgroundColor="red";
        tab2.style.backgroundColor="red";
        tab8.style.backgroundColor="red"; 
    }else if(value3==value6&&value6==value9&&(value3&&value6&&value9!='')){
        show.innerHTML="Game--finished player --"+value3+' Win';
        tab3.style.backgroundColor="red";
        tab6.style.backgroundColor="red";
        tab9.style.backgroundColor="red"; 
        document.getElementById("img").src="./win.jfif";
    }else if(value1==value5&&value5==value9&&(value1&&value9&&value5!='')){
        show.innerHTML="Game--finished player --"+ value1+' Win'
        tab1.style.backgroundColor="red";
        tab5.style.backgroundColor="red";
        tab9.style.backgroundColor="red";
        document.getElementById("img").src="./win.jfif"; 
        return true;
    }else if(value5==value7&&value3==value5&&(value7&&value3&&value5!='')){
        show.innerHTML="Game--finished player --"+value5;
        tab5.style.backgroundColor="red";
        tab7.style.backgroundColor="red";
        tab3.style.backgroundColor="red"; 
        document.getElementById("img").src="./win.jfif";
        return true;
    }else if((value1&&value2&&value3&&value4&&value5&&value6&&value7&&value8&&value9)!=''){
        show.innerHTML="Equal score play again ";   
    }else {
        show.innerHTML='';
    }
}
function finishGame(){
    document.getElementById('show').innerHTML='';
    document.getElementById("img").src="";
    var tab1=document.getElementById('but1');
    var tab2=document.getElementById('but2');
    var tab3=document.getElementById('but3');
    var tab4=document.getElementById('but4');
    var tab5=document.getElementById('but5');
    var tab6=document.getElementById('but6');
    var tab7=document.getElementById('but7');
    var tab8=document.getElementById('but8');
    var tab9=document.getElementById('but9');
    tab1.innerHTML='';tab2.innerHTML='';tab3.innerHTML='';tab4.innerHTML='';tab5.innerHTML='';
    tab6.innerHTML='';tab7.innerHTML='';tab8.innerHTML='';tab9.innerHTML='';
    tab1.style.backgroundColor="black";
    tab2.style.backgroundColor="black";
    tab3.style.backgroundColor="black";
    tab4.style.backgroundColor="black";
    tab5.style.backgroundColor="black";
    tab6.style.backgroundColor="black";
    tab7.style.backgroundColor="black";
    tab8.style.backgroundColor="black";
    tab9.style.backgroundColor="black";

    
}










