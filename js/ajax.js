var data = [];
var str = [];
var input = document.getElementById("input");
var li = document.querySelectorAll("li") 
  function loadJSON() {
    var xhr = new XMLHttpRequest();
    var response ;
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhr.send();
    xhr.onreadystatechange = function() { 
      if (xhr.readyState != 4) return;

      if (xhr.status != 200) {
   
      alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
    } else {
    
      response = xhr.responseText;
      data = JSON.parse(response);
      for ( var i = 0; i < data.length; i++) {
        str[i] = data[i].name;
        if (str[i].indexOf(input.value)) {
          li[i].innerHTML = str[i];
        }  else {
          li[i].innerHTML = '';
        }
      }
  }
}
}