function BMI(){
    let height= Number(document.getElementById("heights").value);
    let weight= Number(document.getElementById("weights").value);
    let height_meters = height/100;
    let BMI = weight/(height_meters*height_meters);
    let BMI_rounded = BMI.toFixed(2);

    if (isNaN(Number(BMI_rounded))){
        document.getElementById("bmi").innerHTML = "Enter a valid value";
    }

    else if (BMI_rounded <= 18.5){
        let bmi1 = "Your BMI is " + BMI_rounded + ". You are underweighted, your immune system would be weak, your bones will be fragile and you would feel tired, So better gain weight as fast as possible.";
        document.getElementById("bmi").innerHTML =  bmi1;
        let thin = document.getElementById("thin2");
        thin.style.backgroundColor = 'blue';
        thin.style.color = 'white';
        document.getElementById("normal").style.backgroundColor = "grey"
        document.getElementById("fat").style.backgroundColor = "grey"
    }

    else if (BMI_rounded > 18.5 && BMI_rounded <= 24.9){
        document.getElementById("bmi").innerHTML = "Your BMI is " + BMI_rounded + ". You are healthy weighted , your bmi is perfectly fine and you doesn't need to gain or lose weight";
        document.getElementById("normal").style.backgroundColor = "lime";
        document.getElementById("normal").style.color="white";
        document.getElementById("thin2").style.backgroundColor = "grey";
        document.getElementById("fat").style.backgroundColor = "grey";
    }

    else if (BMI_rounded > 24.9 && BMI_rounded <= 29.9){
        document.getElementById("bmi").innerHTML = "Your BMI is " + BMI_rounded + ". You are overweighted you need to lose weight otherwise you may experince Excess body fat accumulation (particularly around the waist), Shortness of breath, Sweating (more than usual), Snoring, Trouble sleeping etc.";
        document.getElementById("fat").style.backgroundColor = "red";
        document.getElementById("normal").style.backgroundColor = "grey";
        document.getElementById("thin2").style.backgroundColor = "grey";
    }

    else if (BMI_rounded > 29.9 && BMI_rounded <= 34.9){
        document.getElementById("bmi").innerHTML = "Your BMI is " + BMI_rounded + ". You are having obesity first-stage. You should defenitely loose weight. You may be experiencing small symptoms of obesity.";
        document.getElementById("fat").style.backgroundColor = "rgb(202, 32, 69)";
        document.getElementById("normal").style.backgroundColor = "grey";
        document.getElementById("thin2").style.backgroundColor = "grey";
    }

    else if (BMI_rounded > 34.9 && BMI_rounded <= 39.9){
        document.getElementById("bmi").innerHTML = "Your BMI is " + BMI_rounded + ". You are having obesity second-stage and it is a critical stage. You have all symptoms of obesity like excess fat buildup around the body, being easily winded, difficulty walking, trouble breathing etc. You should lose a large amount of weight";
        document.getElementById("fat").style.backgroundColor = "rgb(202, 32, 69)";
        document.getElementById("normal").style.backgroundColor = "grey";
        document.getElementById("thin2").style.backgroundColor = "grey";
    }

    else{
        document.getElementById("fat").style.backgroundColor = "rgb(202, 32, 69)";
        document.getElementById("normal").style.backgroundColor = "grey";
        document.getElementById("thin2").style.backgroundColor = "grey";
        document.getElementById("bmi").innerHTML = "Your BMI is " + BMI_rounded + ". You are at the topmost stage of obesity you should consult a doctor as fast as possible or you will be really sick.";
    }

    document.getElementById("textbox").style.display = "block";
}

function cos(){
    let number = Number(document.getElementById("num").value);
    let cos = Math.cos(number);
    let cos_round = cos.toFixed(2);
    document.getElementById("answerbox").style.display = "block";
    document.getElementById("answerbox").innerHTML = cos_round;
}

function sin(){
    let number = Number(document.getElementById("num").value);
    let sin = Math.sin(number);
    let sin_round = sin.toFixed(2);
    document.getElementById("answerbox").style.display = "block";
    document.getElementById("answerbox").innerHTML = sin_round;
}

function log(){
    let number = Number(document.getElementById("num").value);
    let log = Math.log(number);
    let log_round = log.toFixed(2);
    document.getElementById("answerbox").style.display = "block";
    document.getElementById("answerbox").innerHTML = log_round;
}

function sqrt(){
    let number = Number(document.getElementById("num").value);
    let sqrt = Math.sqrt(number);
    let sqrt_round = sqrt.toFixed(2);
    document.getElementById("answerbox").style.display = "block";
    document.getElementById("answerbox").innerHTML = sqrt_round;
}