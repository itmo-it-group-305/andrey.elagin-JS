/**
 * Created by daddyingrave on 25.11.15.
 */

//var parent = document.getElementById('u');
//var child = document.createElement('li');
//parent.appendChild(child);

var parent = document.getElementById('chat');
var child = document.createElement('div');
var newText = document.createElement('textarea');
//newText.setAttribute('class', 'newText');
//parent.appendChild(newText);
////child.className = "fff";
//
//var elem = document.getElementById("chat");
//elem.style.border = "1px solid gray";
//elem.style.margin = "0.8em";
//elem.style.width = "90%";
//parent.appendChild(elem);
//elem.appendChild(newText);

function receive () {
    document.getElementById("newText").innerHTML =
        document.getElementById("enter").value;
}







