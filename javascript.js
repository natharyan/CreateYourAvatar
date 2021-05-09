
function myFunction() {
    var x = document.getElementById('face').value;
    var y = document.getElementById('body').value;
    if(x=='john'){
        document.getElementById('faceimg').src='images/1(1).png'
    } else if(x=='bob'){
        document.getElementById('faceimg').src='images/2(1).png'
    } else if(x=='tim'){
        document.getElementById('faceimg').src='images/3(1).png'
    }  
    if(y=='outfit 1'){
        document.getElementById('bodyimg').src='images/imageonline-co-split-image_1_-removebg-preview.png'
    } else if(y=='outfit 2'){
        document.getElementById('bodyimg').src='images/imageonline-co-split-image_2_-removebg-preview.png'
    } else {
        document.getElementById('bodyimg').src='images/imageonline-co-split-image-removebg-preview.png'
    }   
}       

function myFunction1() {
    var x = document.getElementById('face1').value;
    var y = document.getElementById('body1').value;
    if(x=='sarah'){
        document.getElementById('faceimg1').src='images/4(1).png'
    }   else if(x=='karen'){
        document.getElementById('faceimg1').src='images/5(1).png'
    }   else {
        document.getElementById('faceimg1').src='images/6(1).png'
    }
    if(y=='outfit 1'){
        document.getElementById('bodyimg1').src='images/imageonline-co-split-image_1_-removebg-preview.png'
    } else if(y=='outfit 2'){
        document.getElementById('bodyimg1').src='images/imageonline-co-split-image_2_-removebg-preview.png'
    } else {
        document.getElementById('bodyimg1').src='images/imageonline-co-split-image-removebg-preview.png'
    }   
}       

