var cube = document.getElementById('cube');

// blue hover
cube.addEventListener('mouseover', function(){cube.style.backgroundColor = "blue"});
cube.addEventListener('mouseout', function(){cube.style.backgroundColor = "bisque"});
//red hold down
cube.addEventListener('mousedown', function(){cube.style.backgroundColor = "red"});
// yellow let go
cube.addEventListener('mouseup', function(){cube.style.backgroundColor = "yellow"});
// green double click
cube.addEventListener('dblclick', function(){cube.style.backgroundColor = "green"});
// orange mouse scroll
cube.addEventListener('scroll', function(){cube.style.backgroundColor = "orange"});