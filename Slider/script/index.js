var images=["https://www.teahub.io/photos/full/67-670663_hollywood-movie-poster-hd.jpg","https://wallpapercave.com/wp/wp2162835.jpg","https://wallpapercave.com/wp/UKCb90e.jpg","https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/10/7-Best-New-Movies-on-Netflix-November.jpg?q=50&fit=contain&w=943&h=472&dpr=1.5" ];
   
   
 
  
  
    var slideshow=document.querySelector("#slideshow");
   let i=0;
  
   var img=document.createElement("img");
       img.src=images[i];
       slideshow.innerHTML=null;
       document.querySelector("#slideshow").append(img )
   
     
     
   
 setInterval(function(){
     
         if(i==images.length){
             i=0;
         }
var image=images[i];
slideshow.innerHTML=null; 
var img=document.createElement("img");

img.src=image;


document.querySelector("#slideshow").append(img )

       i++;
     
    }, 2000);