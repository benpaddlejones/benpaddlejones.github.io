setInterval(updateHtml, 500)

function updateHtml () {
	document.getElementById("footername").innerHTML = document.getElementById("entername").value;
	document.getElementById("footerposition").innerHTML = document.getElementById("enterposition").value;
	document.getElementById("footerschool").innerHTML = document.getElementById("enterschool").value;
	var y = document.getElementsByClassName("textcolor");
	var i;
	for (i = 0; i < y.length; i++) {
		y[i].style.color = document.getElementById("entercolour").value;
	}
	document.getElementById("borderbox").style.borderLeft = "solid 2px " + document.getElementById("entercolour").value;
	var y = document.getElementsByClassName("alttextcolor");
	var i;
	for (i = 0; i < y.length; i++) {
		y[i].style.color = document.getElementById("enteraltcolour").value;
	}
	document.getElementById("footermobile").innerHTML = document.getElementById("entermobile").value;
	document.getElementById("footernumber").innerHTML = document.getElementById("enternumber").value;
	document.getElementById("footeremail").innerHTML = document.getElementById("enteremail").value;
	document.getElementById("footerlogo").src = document.getElementById("enterlogo").value;
	document.getElementById("footerlogo").alt = document.getElementById("enterschool").value + " logo";
	document.getElementById("footerlogolink").href = document.getElementById("enterwebsite").value;	
	document.getElementById("footerfacebook").href = document.getElementById("enterfacebook").value;
	document.getElementById("footertwitter").href = document.getElementById("entertwitter").value;
	document.getElementById("footerinstagram").href = document.getElementById("enterinstagram").value;
}

var clipboard = new ClipboardJS('.btn');
clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
	e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});

if ((screen.width < 600) || (screen.height < 500)) {
    alert ("this site and the inclosed instructions only work on a Desktop Computer")
}

function copyHtml(){
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', document.getElementById("displayfooter").innerHTML);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}




