
function myFunction() {
    var x = document.getElementById('face').value;
    var y = document.getElementById('body').value;
    if(x=='john'){
        document.getElementById('faceimg').src='images/1(1).png'
    } else if(x=='bob'){
        document.getElementById('faceimg').src='images/2(1).png'
    } else if(x=='tim'){
        document.getElementById('faceimg').src='images/3(1).png'
    }   else if(x=='sarah'){
        document.getElementById('faceimg').src='images/4(1).png'
    }   else if(x=='karen'){
        document.getElementById('faceimg').src='images/5(1).png'
    }   else {
        document.getElementById('faceimg').src='images/6(1).png'
    }
    if(y=='superman1'){
        document.getElementById('bodyimg').src='images/superman1.png'
    } else if(y=='superman2'){
        document.getElementById('bodyimg').src='images/superman2.png'
    } else {
        document.getElementById('bodyimg').src='images/superwomen.png'
    }   
}       

