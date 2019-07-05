// Grab the articles as a json


$(document).on("click", ".home", function() {
    $(".article-container").empty();
    
    $.getJSON("/articles", function(data) {
        // For each one
        for (var i = 0; i < data.length; i++) {
          // Display the apropos information on the page
          $(".article-container").append("<div class='card '" + data[i]._id + "'> <div class='card-header'><h3><a class='article-link' target='_blank' rel='noopener noreferrer' href= 'https://www.nytimes.com" + data[i].link + "'>" + data[i].title + "</a> <a class='btn btn-success save' data-id='" + data[i]._id + "'>Save Article</a></h3></div><div class='card-body'>" + data[i].story + "</div></div>");
        };
    });
});


$(document).on("click", ".scrape-new", function() {
    $(".article-container").empty();
    
    $.ajax({
        method: "GET",
        url: "/scrape" 
      })
    
    .then(function () {
        $.getJSON("/articles", function(data) {
            // For each one
            for (var i = 0; i < data.length; i++) {
              // Display the apropos information on the page
              $(".article-container").append("<div class='card '" + data[i]._id + "'> <div class='card-header'><h3><a class='article-link' target='_blank' rel='noopener noreferrer' href= 'https://www.nytimes.com" + data[i].link + "'>" + data[i].title + "</a> <a class='btn btn-success save' data-id='" + data[i]._id + "'>Save Article</a></h3></div><div class='card-body'>" + data[i].story + "</div></div>");
            };
        });
    
    });

});

$(document).on("click", ".saved", function() {
    $(".article-container").empty();
    
    $.getJSON("/saved", function(data) {
        // For each one
        for (var i = 0; i < data.length; i++) {
            // Display the apropos information on the page
            $(".article-container").append("<div class='card '" + data[i]._id + "'> <div class='card-header'><h3><a class='article-link' target='_blank' rel='noopener noreferrer' href= 'https://www.nytimes.com" + data[i].link + "'>" + data[i].title + "</a> <a class='btn btn-success add-note' data-id='" + data[i]._id + "'>Add Notes</a></h3></div><div class='card-body'>" + data[i].story + "</div></div>");
        };
    });    
});

$(document).on("click", ".clear", function() {
    $(".article-container").empty();
    $.ajax({
        method: "GET",
        url: "/clear" 
      });
});

$(document).on("click", ".save", function() {
    var thisId = $(this).attr("data-id");

    console.log($(this).parents('.card'));
    $(this).parents('.card').remove();
    // console.log($(this));
    // console.log(thisId);
    $.ajax({
        method: "GET",
        url: "/save/" + thisId
      });

});
