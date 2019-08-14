function myFunction() {
  var input, filter, road, td, i,cont,row,col,main;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  main = document.getElementById("wrap-foto");
  road = main.getElementsByTagName("div");
  for (i = 0; i < road.length; i++) {
    td = road[i].getElementsByTagName("span")[0];
    if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
      road[i].style.display = "";
    }else {
      road[i].style.display = "none";
    }
  }
}