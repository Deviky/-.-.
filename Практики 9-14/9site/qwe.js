let imgArray = [
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/400"
]

let index = 0;
let imgArrayLength = imgArray.length;

let x = 0;
let y = 0;

function getMouseCoords(e) {
    var e = e || window.event;
    x = e.clientX;
    y = e.clientY;
    document.getElementById('info').innerHTML = e.clientX + ', ' +
        e.clientY + '<br>' + e.screenX + ', ' + e.screenY;
}

setInterval(() => {
    var img = document.createElement('img');
    img.src = imgArray[(index++) % imgArrayLength];
    img.style.position = "absolute";
    img.style.left = x;
    img.style.top = y;
    document.getElementById('container').append(img);
}, 2000);

var followCursor = (function() {
    var s = document.createElement('div');
    s.style.position = 'absolute';
    s.style.margin = '0';
    s.style.padding = '5px';
    s.style.border = '1px solid red';
    s.textContent = "🚀"

    return {
        init: function() {
            document.body.appendChild(s);
        },

        run: function(e) {
            var e = e || window.event;
            s.style.left = (e.clientX - 5) + 'px';
            s.style.top = (e.clientY - 5) + 'px';
            getMouseCoords(e);
        }
    };
}());

window.onload = function() {
    followCursor.init();
    document.body.onmousemove = followCursor.run;
}