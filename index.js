
var len = document.querySelectorAll(".img").length;
var s; 
var score = 0;

// PickingUp-Choice

for(var i =0;i<len;i++){
    document.querySelectorAll(".imgs")[i].addEventListener("click",function(){
        s = this.classList[0];
        
        var vis = document.querySelector(".main-content").style.visibility = "hidden";
        
        if(vis=="hidden"){
            document.querySelector(".result-content").style.visibility = "visible"
        }
        switch(s){
            case "paper":
                document.querySelector(".user-img").src = "images/icon-paper.svg";
                document.querySelector(".user-img").style.borderColor = "hsl(230, 89%, 65%)";
            break;
            case "scissors":
                document.querySelector(".user-img").src = "images/icon-scissors.svg";
                document.querySelector(".user-img").style.borderColor = "hsl(40, 84%, 53%)";


            break;
            case "rock":
                document.querySelector(".user-img").src = "images/icon-rock.svg";
                document.querySelector(".user-img").style.borderColor = "hsl(349, 70%, 56%)";

            break;

        }
        setTimeout(result,500);

        // document.querySelector(".res-img").src = "images/icon-"+ obj[random]+".svg";
    });

}

// Result-Tab

function result(){
    var random = Math.floor(Math.random()*3);
    var obj = ["paper","rock","scissors"];
    var key = obj[random]
    switch(key){
        case "paper":
            document.querySelector(".res-img").src = "images/icon-paper.svg";
            document.querySelector(".res-img").style.borderColor = "hsl(230, 89%, 65%)";
        break;
        case "scissors":
            document.querySelector(".res-img").src = "images/icon-scissors.svg";
            document.querySelector(".res-img").style.borderColor = "hsl(40, 84%, 53%)";
        break;
        case "rock":
            document.querySelector(".res-img").src = "images/icon-rock.svg";
            document.querySelector(".res-img").style.borderColor = "hsl(349, 70%, 56%)";
        break;

    }
    document.querySelector(".res-img").style.visibility = "visible";
    
    if(s==key){
        document.querySelector(".result-txt p").textContent = "DRAW !";
    }
    else if(s == "paper" && key == "rock"){
        document.querySelector(".result-txt p").textContent = "YOU WIN";
    }
    else if(s == "scissors" && key == "paper"){
        document.querySelector(".result-txt p").textContent = "YOU WIN";
    }
    else if(s == "rock" && key == "scissors"){
        document.querySelector(".result-txt p").textContent = "YOU WIN";
    }
    else{
        document.querySelector(".result-txt p").textContent = "YOU LOSE";

    }
    document.querySelector(".result-txt").style.visibility = "visible"

    scoreUpdate();
}

// Updating-Score

function scoreUpdate(){
    var res = document.querySelector(".result-txt p").textContent;
    switch(res){
        case "YOU WIN":
            score = score + 1;
        break;
        case "YOU LOSE":
            if(score>0){
                score = score - 1;
            }    

        break;
        default:
            score = score;
    }
    if(score > -1){
        document.querySelector(".sc-number").textContent = score;
    }
}

// PlayAgain-Btn-Function

playagain = () =>{
    var res = document.querySelector(".result-content").style.visibility = "hidden"
    document.querySelector(".result-txt").style.visibility = "hidden"
    
    if(res=="hidden"){
        document.querySelector(".main-content").style.visibility = "visible";
        document.querySelector(".res-img").style.visibility = "hidden";
    }
    
}

document.querySelector(".play-again-btn").addEventListener("click",playagain);

// Rules-PopUp-Function

document.querySelector(".rules-btn").addEventListener("click",function(){

    var ruleclick =  document.querySelector(".rule").style.display; 
    if(ruleclick=="none"){
        document.querySelector(".rule").style.display = "unset";
        document.querySelector(".container").style.opacity = "0.2";

    }
    else if(ruleclick=="unset"){
        document.querySelector(".rule").style.display = "none";
        document.querySelector(".container").style.opacity = "1";
        
    }  
      
});



// Close-Button

function close(){
    document.querySelector(".rule").style.display = "none";
    document.querySelector(".container").style.opacity = "1";

}
document.querySelector(".close").addEventListener("click",close);
