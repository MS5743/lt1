let grade;

document.getElementById("mybutton").onclick = function(){
    let answersright = 0;
    if(document.getElementById("8").checked == true){
        answersright = answersright + 1
    }
    if(document.getElementById("32").checked == true){
        answersright = answersright + 1
    }
    if(document.getElementById("12").checked == true){
        answersright = answersright + 1
    }
    if (answersright == 3){
        grade = "A"
    }
    if (answersright == 2){
        grade = "B"
    }
    if (answersright == 1){
        grade = "C"
    }
    if (answersright == 0){
        grade = "F"
    }
    document.getElementById("p1").innerHTML = "your grade: " + grade;
}