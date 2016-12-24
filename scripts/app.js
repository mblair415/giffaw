$(document).on("ready", function(){

  $.ajax({
    method: 'GET',
    url: 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC',
    data: $("form").serialize(),
    success: giphyDefaultSuccess,
    error: giphyDefaultError
  })

  $('.btn').on('submit', function(event){
    console.log('submit and ajax ... it is HAPPENING!!');
    event.preventDefault();

    $.ajax({
      method: 'GET',
      url: ,
      data: $('form').serialize(),
      success: giphySearchSuccess,
      error: giphySearchError
    })
  })


});

function giphyDefaultSuccess(json){
  console.log('giphySuccess and json is ', json);
  json.data.forEach(function(gif){
    // $(".gif-gallery").append("<img src=" + data.images.fixed_width_small.url +
    // ">");
    $(".gif-gallery").append('<img src=' +gif.images.fixed_width.url+'>')
    console.log('gif is ', gif);
  })
}

function giphyDefaultError(error){
  console.log('error!  error is ', error);
}

function giphySearchSuccess(json){

}

function giphySearchError(error){
  console.log('ajax search error!  none of this is good! ', error);
}
