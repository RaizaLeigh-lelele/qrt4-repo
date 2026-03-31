function plotPoint() {
    console.log(x0, y0, x, y) // checks the arguments passed to this function
    var in1 = document.getElementById("in1");
    var out1 = document.getElementById("out1");
    in1.innerHTML = x0 + " " + y0 + " " + x + " " + y;
    var point = document.createElement('div');
    point.className = 'point';
    var plane = document.getElementById('coordinatePlane'); /* clear previous point so it doesnt stack /
    plane.innerHTML = "";  / control where to place the div on the screen using left and bottom of position:absolute */
    point.style.left = (x - x0 + 200 - 5) + 'px';
    point.style.bottom = (y - y0 + 200 - 5) + 'px';
    plane.appendChild(point);

    if (x == x0 || y == y0){
      out1.innerHTML = "divisa"
    }
    else if (x > x0 && y > y0){
      out1.innerHTML = "NE"
    }
    else if (x < x0 && y < y0){
      out1.innerHTML = "SO"
    }
    else if (x > x0 && y < y0){
      out1.innerHTML = "SE"
    }
    else if (x < x0 && y > y0){
      out1.innerHTML = "NO"
    }
}