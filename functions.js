$("#hide-btn").click(function() {
    $("#hide-and-show-text").hide();
    $("#hide-btn").hide();
    $("#show-btn").show();
});
$("#show-btn").click(function() {
    $("#hide-and-show-text").show();
    $("#hide-btn").show();
    $("#show-btn").hide();
});
$("#toggle-btn").click(function() {
    $("#toggle-text").toggle();
});
$("#slide-up-btn").click(function() {
    $("#slide-text").slideUp("slow");
    $("#slide-up-btn").hide();
    $("#slide-down-btn").show();
});
$("#slide-down-btn").click(function() {
    $("#slide-text").slideDown("slow");
    $("#slide-up-btn").show();
    $("#slide-down-btn").hide();
});
$("#slide-toggle-btn").click(function() {
    $("#slide-toggle-text").slideToggle();
});
$("#fade-out-btn").click(function() {
    $("#fade-text").fadeOut();
    $("#fade-out-btn").hide();
    $("#fade-in-btn").show();
});
$("#fade-in-btn").click(function() {
    $("#fade-text").fadeIn();
    $("#fade-out-btn").show();
    $("#fade-in-btn").hide();
});
$("#before-btn").click(function() {
    $("#before-and-after-static-text").before("<h4>Hello</h4>");
    $("#before-and-after-static-text").before($("#before-and-after-text"));
});
$("#after-btn").click(function() {
    $("#before-and-after-static-text").after("<h4>Goodbye</h4>");
    $("#before-and-after-static-text").after($("#before-and-after-text"));
});
$("#prepend-btn").click(function() {
    $("#prepend-and-append-static-text").prepend($("#prepend-and-append-text"));
    $("#prepend-and-append-static-text").prepend("<h4>Hello</h4>");
});
$("#append-btn").click(function() {
    $("#prepend-and-append-static-text").append($("#prepend-and-append-text"));
    $("#prepend-and-append-static-text").append("<h4>Goodbye</h4>");
});
$("#add-and-remove-class-text").hover(
    function() {
    $(this).addClass("bold red");
    },
    function() {
        $(this).removeClass("bold red");
    }
);
$("#html-btn").click(function() {
    var htmlString = $(this).html();
    $(this).text(htmlString);
});
$("#attr-btn").click(function() {
    var classes = $(this).attr("class");
    $("#attr-btn-display").text(classes);
});