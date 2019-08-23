function getIt(){
  $("p").click(getIt);
  alert("Hey!");
}

$(document).ready(getIt){
  $("p").click(getIt);
  alert("Hey!");
}




