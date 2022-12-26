window.addEventListener("load", function(){
    var third = document.getElementsByClassName(third);
    //ketu perdorim even delegation ne vend te nje handleri
    //per secilen thumbnail

    third.addEventListener("click", function(e)
    {
        //perdoruesi mund te klikoj ne gjera tjera brenda faqes
        //brenda ketij kontejneri prind po ne deshirojm te sigurohemi qe eshte klikuar saktesisht imazhi
        if(e.target.nodeName.toLowerCase() == 'img') {
            //marrim imazhe nga filename i figures te cilen e kemi klikuar
            var clickedImageSource =  e.target.src;
            //zevendesojm emrin e folderit nga small ne medium
            var newSRc = clickedImageSource.replace("small","medium");
            //ndryshojm emrin e fajlit dhe atrubutin e titullit
            //per ta vendosur imazhin e ri

            var featuredImage = document.querySelector("#featured img");
            featuredImage.src = newSrc;
            featuredImage.title = e.target.title;

        }
    });
    //shtpjm mouse over/out event handlerat per imazhe te medhaja 



    
    var featured = document.getElementById("featured") 
   featured.addEventListener("mouseover", function(e) {
   //shfaq pershkrimin e imazhit
    var caption = document.querySelector("#featured figcaption");
    caption.style.transiton="opacity 1.5s";
    caption.innerHtml = document.querySelector("#featured img").title; 
   });

    
});
featured.addEventListener("mouseout", function(e)
{
    var caption = document.querySelector("#featured figcaption");
    caption.style.transition = "opacity 1.5s"
    caption.style.opacity = 0;
});

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  const dateControl = document.querySelector('input[type="date"]');
dateControl.value = 'Dec 21,2020';
console.log(dateControl.value); // prints "2017-06-01"
