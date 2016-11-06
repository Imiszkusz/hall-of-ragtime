function insert(url)
{
    for(var i in arguments){
      var imgDestination = document.body;
      var imgAdded = document.createElement("img");
       imgAdded.src = arguments[i];
       imgDestination.appendChild(imgAdded);
       imgRandomPosition(imgAdded);

      var $currentIm = $("img:eq(" + i + ")");
      var interVall = setInterval(animateMy, 1000, $currentIm);
    }
}

function imgRandomPosition(imgAdded)
{

    var left = Math.floor((Math.random() * 80) + 1)+"vw";
    var top = Math.floor((Math.random() * 65) + 1)+"vh";
    var imagestyle = imgAdded.style;
    imagestyle.position = "absolute";
    imagestyle.top = top;
    imagestyle.left = left;
    imagestyle.width = "12vw";
}


function animateMy(par){
var direction = Math.floor(Math.random() * 100);
var upOrDown = Math.floor(Math.random() * 10);
  
if(direction >= 0 && direction < 26){
  if(upOrDown >= 0 && upOrDown < 5){
     par.animate({"top": "-=1vh"});}
  else if(upOrDown > 4 && upOrDown < 10){
     par.animate({"top": "+=1vh"});
  }
}

else if(direction > 25 && direction < 51){
  if(upOrDown >= 0 && upOrDown < 5){
     par.animate({"right": "-=1vw"});}
  else if(upOrDown > 4 && upOrDown < 10){
     par.animate({"right": "+=1vw"});
  }
}

else if(direction > 50 && direction < 76){
  if(upOrDown >= 0 && upOrDown < 5){
     par.animate({"bottom": "-=1vh"});}
  else if(upOrDown > 4 && upOrDown < 10){
     par.animate({"bottom": "+=1vh"});
  }
}
  
else if(direction > 75 && direction < 101){
  if(upOrDown >= 0 && upOrDown < 5){
     par.animate({"left": "-=1vw"});}
  else if(upOrDown > 4 && upOrDown < 10){
    par.animate({"left": "+=1vw"});
  }
}
}



insert("https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/EntertainerJoplinCover.JPEG/220px-EntertainerJoplinCover.JPEG",
      "http://assets.sheetmusicplus.com/product/Look-Inside/covers/19484023.jpg",
      "http://shsmo.org/historicmissourians/name/j/joplin/images/joplin_music/8c-028680.gif",
      "http://www.ragtimepiano.ca/images/palmleaf.jpg", "http://www.ragtimepiano.ca/images/chrysanthemum.jpg",
      "http://www.ragtimepiano.ca/images/pineapp.jpg", "http://www.ragtimepiano.ca/images/original.jpeg",
      "http://www.ragtimepiano.ca/images/elite.jpg", "http://www.ragtimepiano.ca/images/magnetic.jpg",
      "http://www.ragtimepiano.ca/images/breeze.jpg", "http://www.ragtimepiano.ca/images/sensation.jpg",
      "http://www.ragtimepiano.ca/images/champagne.jpg", "http://www.ragtimepiano.ca/images/nightingale.jpg",
      "http://www.ragtimepiano.ca/images/reindeer.jpg", "http://www.ragtimepiano.ca/images/topline.jpg",
      "http://www.ragtimepiano.ca/images/americanbeauty.jpg", "http://www.ragtimepiano.ca/images/excelsior.jpg",
      "http://www.ragtimepiano.ca/images/frog.jpg", "http://www.ragtimepiano.ca/images/grace.jpg",
      "http://www.ragtimepiano.ca/images/ophelia.jpg", "http://www.ragtimepiano.ca/images/quality.jpg",
      "http://www.ragtimepiano.ca/images/evergreen.jpg", "http://www.ragtimepiano.ca/images/honeymoon.jpg",
      "http://www.ragtimepiano.ca/images/sunburst.jpg"
);


			