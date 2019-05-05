callXml();

function callXml() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "content.xml?version=3", true);
  xhttp.send();
};
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Artist</th><th>Title</th><th>Cover</th></tr>";
  var x = xmlDoc.getElementsByTagName("CD");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
	"</td><td> <img src=\"" +
    x[i].getElementsByTagName("COVER")[0].childNodes[0].nodeValue +
    "\" /></td></tr>";
  }
  document.getElementById("left").innerHTML = table;
}

setInterval( callXml(), 3000);