function take(tall){
    spill.total = spill.total-tall;
    if (spill.total <= 0){
      spill.total = 0;
      /*spill.victory = */alert('The winner is ')
    }
    document.getElementById("totalen").innerHTML=spill.total;
  }
  
  function createButton(antall){
    var total = form.totalinput.value;
    for(let i=0; i<antall; i++){
      let button = document.createElement("button");
      button.value = i+1;
      button.innerHTML = i+1;
      button.onclick = function(){take(button.value)};
      document.getElementById("totalen").innerHTML=total;
      document.getElementById("nr1").appendChild(button);
      }
  
    for(let i=0; i<antall; i++){
      let button2 = document.createElement("button");
      button2.value = i+1;
      button2.innerHTML = i+1;
      button2.onclick = function(){take(button2.value)};
      document.getElementById("nr2").appendChild(button2);
    }
  }
  
  function start(){
    var p1 = form.name1.value;
    document.getElementById('navn1').innerHTML=p1
    var p2 = form.name2.value;
    document.getElementById('navn2').innerHTML=p2
    //function victory(winner){
      //alert('The winner is ')
    //}
    var maximumGrab = form.max.value;
    var total = form.totalinput.value;
    document.getElementById("totalen").innerHTML=total;
    document.getElementById("form1").hidden = true;
    document.getElementById("game").hidden = false;
    createButton(maximumGrab);
    spill = new Nim(p1, p2, /*victory,*/ total, maximumGrab);
  }
  var switchPlayer = function() {
    $('.reminder-msg').hide();
    clearTimeout(reminderTimeout);
    console.log("itemRemoved= ", itemRemoved);
    if(!itemRemoved) {
      M.toast({html: 'You have to remove at least one item!', classes: 'rounded'});
    } else {
      // var heapSum = 0;
  
      if(!gameOver) {
        if(player === 1) {
          player = 2;
          $('#player-one').addClass('disabled');
          $('#player-two').removeClass('disabled');
        } else {
          player = 1;
          $('#player-two').addClass('disabled');
          $('#player-one').removeClass('disabled');
        }
      }
      var highscoreList=[
        {score:2, name:'John', highscoreLine:[3,1,4,5,4,3,2]},
        {score:5, name:'John B', highscoreLine:[3,1,4,5,2,3,3]},
        {score:10, name:'John C', highscoreLine:[3,1,4,5,7,6,8]},
        {score:4, name:'John', highscoreLine:[3,1,4,5,9,8,7]}
     ];
     
     highscoreList.sort(function(a,b){return a.score < b.score});
     console.log(highscoreList)
    