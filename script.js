
setInterval(function(){
    elems = document.querySelectorAll('.LikeButton:not(.unlike)')
    for(var i = 0; i< elems.length; i++) {
          var el = elems[i]
          setTimeout(function(i, el){
            console.log(i)
            el.click();
          }, 5000 * i, i, el);
    }
}, 5000)

var grid_size = 3
setInterval(function(){
    window.scrollBy(0,500);
}, 5000 * grid_size)
