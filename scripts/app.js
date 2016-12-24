$(document).on("ready", function(){

  $.ajax({
    method: 'GET',
    url: 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC',
    data: $("form").serialize(),
    success: giphyDefaultSuccess,
    error: giphyDefaultError
  })

  $('.btn').on('click', function(event){
    console.log('submit and ajax ... it is HAPPENING!!');
    event.preventDefault();

    $.ajax({
      method: 'GET',
      url: 'http://api.giphy.com/v1/gifs/search?q=gif-input&api_key=dc6zaTOxFJmzC',
      data: $('form').serialize(),
      success: giphySearchSuccess,
      error: giphySearchError
    })
  })

  $(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
     console.log('dude, you scrolled to the bottom');

       $.ajax({
         method: 'GET',
         url: 'http://api.giphy.com/v1/gifs/search?q=gif-input&api_key=dc6zaTOxFJmzC&limit=10',
         data: $('form').serialize(),
         success: giphySearchMoreSuccess,
         error: giphySearchError
       })
   }
});


});

function giphyDefaultSuccess(json){
  // console.log('giphySuccess and json is ', json);
  json.data.forEach(function(gif){
    $(".gif-gallery").append('<img src=' +gif.images.fixed_width.url+'>')
    // console.log('gif is ', gif);
  })
}

function giphyDefaultError(error){
  console.log('error!  trending gifs error is ', error);
}

function giphySearchSuccess(json){
  console.log('dat button was clicked and errythin is good ', json);
  $('.gif-gallery').empty();
  json.data.forEach(function(gif){
    $(".gif-gallery").append('<img src=' +gif.images.fixed_width.url+'>')
    // console.log('gif is ', gif);
  })
}

function giphySearchError(error){
  console.log('ajax search error!  none of this is good! ', error);
}

function giphySearchMoreSuccess(json){
  console.log('you reached the bottom and the json search worked');
  json.data.forEach(function(gif){
    $(".gif-gallery").append('<img src=' +gif.images.fixed_width.url+'>')
    // console.log('gif is ', gif);
  })
}
