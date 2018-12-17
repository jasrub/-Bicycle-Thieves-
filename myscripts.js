<script>
 function menu() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
    function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

    const sliderImages = document.querySelectorAll('.slide-in');

    function checkSlide() {
      sliderImages.forEach(function(sliderImage) {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
          sliderImage.classList.add('active');
        } else {
          sliderImage.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', debounce(checkSlide));



  window.addEventListener('scroll', myFunction);
//window.onscroll = function() {myFunction()};

    function myFunction() {
     var elmnt = document.getElementById("bigger");
     var scrollYtoImage = elmnt.offsetTop-window.scrollY;

     var height = 500;
     var scrolled = (scrollYtoImage / height) * 100;
     elmnt.style.width = scrolled + "%";

     console.log("elmntOffsetTop:"+elmnt.offsetTop+"  "+"elmntScrollY:"+scrollYtoImage+"  "+"elmntHigh"+elmnt.height+"  "+"scrolled:"+scrolled)
       }

    //When the user scrolls the page, execute myFunction 

var sticky;
window.onload = function () {
  console.log('loaded')

  window.addEventListener('scroll', myFunction2);

  // Get the sticker
  var sticker = document.getElementById("sticker");

  sticky = sticker.offsetTop;
  console.log(sticky);
 
  // Add the sticky class to the sticker when you reach its scroll position. Remove "sticky" when you leave the scroll position

}
  function myFunction2() {
    if (window.pageYOffset > sticky && window.pageYOffset < sticky+500) {
      sticker.classList.add("sticky");
    } else {
      sticker.classList.remove("sticky");
    }
  }

    
    // const biggerImages = document.querySelectorAll('.bigger');
    // function checkBig() {
    //   biggerImages.forEach(function(biggerImage) {

    //  var scrollYtoImage = biggerImage.scrollTop-window.scrollY;
    //  var height = biggerImage.height;
    //  var scrolled = (scrollYtoImage / height) * 100;
    //  biggerImage.style.width = scrolled + "%";
     
    //    });
    // }

    // window.addEventListener('scroll', checkBig);

 </script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script type="text/javascript">
            
            (function() {
                
                var menuBtn = $('a.menu-btn'),
                    menuBtnBlock = menuBtn.find('div.menu-btn-block');
                
                menuBtn.on('click', function() {
                    menuBtnBlock.toggleClass('active');
                });
                
                
                
            })();
            
    </script>