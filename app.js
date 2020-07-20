var myList = document.getElementById("myUL");
var myNodeList = document.getElementsByTagName("LI");

for (var i = 0; i < myNodeList.length; i++) {
    var span = document.createElement("SPAN");
    var iTag = document.createElement("i");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    iTag.className = "far fa-edit";
    iTag.setAttribute("onclick", "editBtn(this)")
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
    myNodeList[i].appendChild(iTag);
}

var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myTodo").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myTodo").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    var iTag = document.createElement("i");
    iTag.className = "far fa-edit";
    iTag.setAttribute("onclick", "editBtn(this)")
    li.appendChild(iTag);
}

function deleteAll() {
    myList.innerHTML = "";
}

function editBtn(edit) {
    var val = prompt("Enter value to update", edit.parentNode.firstChild.nodeValue);
    edit.parentNode.firstChild.nodeValue = val;

    var alertTxt = "Press edit button to edit";
    if (val === "") {
        alert("You must write something!");
        edit.parentNode.firstChild.nodeValue = alertTxt;
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);