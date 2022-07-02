

for (i=0; i<4;i++ )
{
    var img =document.createElement("img");
    img.src = "images/image"+(i+1)+".jpg"; 
img.width=300;
img.height=300;
var src = document.getElementById("x"+i);
src.appendChild(img); 
}




;

