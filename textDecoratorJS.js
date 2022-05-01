function changeText(){
    var textbox= document.getElementById("writeText");
    textbox.style.color="red";
    textbox.style.fontSize = "14pt";

    if(textbox.value.length<4){ 
        textbox.style.width= "400px";       
        textbox.value= "Not Malkovitch, type more than 4 char";}
    else{textbox.value= "Malkovitch"}    
}

function changeWidth(){
    var textbox= document.getElementById("writeText"),
    width= parseFloat(getComputedStyle(textbox).width),
    height= parseFloat(getComputedStyle(textbox).height);
    setInterval(function(){
        width += 20;
        height += 20;
        textbox.style.width= width +"px";
        textbox.style.height= height +"px";
    }, 1000);
    textbox.style.backgroundColor="rgb(179, 207, 87)";
    textbox.style.borderColor= "blue";
}


function displayImg(src, width, height, alt){
    var img = document.createElement("IMG");
  img.src= src;
  img.width= width;
  img.height= height;
  img.alt= alt;
  //document.body.appendChild(img);
  document.getElementById("image_input").appendChild(img);
}
