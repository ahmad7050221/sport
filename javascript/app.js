var favouriteplayer=prompt("who's your favourite player? ");
while (favouriteplayer !=='messi'&& favouriteplayer !=='ronaldo'){
    favouriteplayer = prompt('please write only messi/ronaldo');
}
var numberofimage = prompt('how many image do you need?');

var image='';
var result='';


if (favouriteplayer=='messi'){
    image ='<img src="https://www.emaratalyoum.com/polopoly_fs/1.1442213.1610441243!/image/image.jpg"/>';
}
else if (favouriteplayer=='ronaldo'){image ='<img src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec593cc431fb70007482137%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1321%26cropX2%3D3300%26cropY1%3D114%26cropY2%3D2093"/>';}

console.log(image);
for (var i = 0; i<numberofimage; i++){
    result += image;
}
document.write(result);
console.log(result);


var favouriteclub=prompt("who's your favouriteclub?");


if(favouriteclub=="united"){
    document.write('<h1>welcome united club</h1>');
}
else {
    alert('only united');
}
var liking=confirm('do you like messi ?');
if(liking==true)
{document.write('better see him in barca');
}else if(liking==false)
{
    alert('dont liking be in another club');

}


