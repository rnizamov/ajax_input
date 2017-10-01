// Создаю класс Search
// Параметры:
//  xhr - объект класса httpXmlrequest
//  url - куда стучимся
//  id текстового поля для поиска 

function Search(xhr,url,inputId,resultId) {
  this.xhr;
  this.url = url;
  this.data;
  this.arrLi=[];
  this.list='';
  this.input = document.getElementById(inputId);
  this.result = document.getElementById(resultId);
}

// Общие методы для экземпляров Search
// Метод loadData подгружает данные в формате JSON и парсит их. 

Search.prototype.loadData = function () {
  var self = this;
  this.xhr = new XMLHttpRequest();
  var response ;
  this.xhr.open('GET', this.url, true);
  this.xhr.send(); 
  this.xhr.onreadystatechange = function() { 
    if (this.readyState != 4) return;
    if (this.status != 200) {
    alert('Ошибка ' + this.status + ': ' + this.statusText);
    } else {
      response = this.responseText;
      self.data = JSON.parse(response);
      self.filterDada();
      } 
    }
   
}

 

Search.prototype.renderData = function () {
  var self = this;
  this.arrLi.forEach(function(element) {
    self.result.appendChild(element);
  });
  this.arrLi=[];
}

Search.prototype.filterDada = function () {
  var self = this;
  this.data.forEach(function(element,i) {
     if (element.name.includes(self.input.value)) {
        self.arrLi.push(document.createElement('li'));
        self.arrLi[i].innerHTML = element.name;
     }
  });
  this.renderData();
 
}

var searchHomePage = new Search('xhr','https://jsonplaceholder.typicode.com/users','inputHomePage','searchResult');

searchHomePage.loadData();

 
 
