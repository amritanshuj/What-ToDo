console.log("My script has been loaded!");

// To set different colour for labels of each category
var labels = document.getElementsByClassName("label");
for(i = 0; i < labels.length; i++) {
    console.log(labels[i]);
    if(labels[i].innerText == 'Personal'){
        labels[i].style.backgroundColor = 'blue';
    }
    else if(labels[i].innerText == 'Sports'){
        labels[i].style.backgroundColor = 'black';
    }
    else if(labels[i].innerText == 'Work'){
        labels[i].style.backgroundColor = 'rgb(135, 0, 250)';
    }
    else if(labels[i].innerText == 'Household'){
        labels[i].style.backgroundColor = 'rgb(250, 31, 40)';
    }       
}




