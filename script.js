function check() {
  let create = document.createElement("div");
  let takingvalue = document.getElementById("textarea").value;
  let putme = document.createTextNode(takingvalue);
  create.appendChild(putme);
  document.body.appendChild(create);
  create.style.color = "blue";
  create.style.fontSize = "18px";
  create.style.marginLeft =  "120px";
 

  document.body.appendChild(create);
  document.getElementById("textarea").value = " ";

}
