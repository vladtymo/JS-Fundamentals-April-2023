// ---------- working with jQuery library

// syntax: $(selector).method();

// .append() .prepend() before.() .after()
$('ol.product-list').append('<li>Generated item.</li>');

// :first :last :odd :event
$('ol li:last').addClass('selected');

// collection.each() - iterate all items
$('ol li').each((i, el) => {
    // i  - index of the item
    // el - element 
    console.log($(el).text());

    if ((i + 1) % 7 == 0)
        $(el).append("<ul><li>Inner item.</li></ul>");
})

// ------- events
// types: 'click' 'dbclick' 'submit'
$('ol.product-list li:first').on("click", function () {
    console.log("First item clicked!");

    // this - reference to current element that invokes the event

    //$(this).toggleClass('selected');
    //$(this).removeClass('muted-text');

    // we can use chain of methods
    $(this).toggleClass('selected').removeClass('muted-text').attr('title', 'Hello!');
});

$('ol.product-list li').on('mouseenter', function () {
    // console.log("Mouse entered!");

    // set large text to entered item
    $(this).addClass('medium-text');

    $(this).prev().addClass('muted-text');
    $(this).next().addClass('muted-text');
});
$('ol.product-list li').on('mouseleave', function () {
    // console.log("Mouse left!");

    $(this).removeClass('medium-text');

    $(this).prev().removeClass('muted-text');
    $(this).next().removeClass('muted-text');
});

// ------- forms
$('#product-form').on('submit', function (e) {

    //e.preventDefault(); // or we can return false

    // .val() .text() .html()
    let name = $(this).find('input[name="name"]').val();

    console.log("Read name:", name);
    $('ol.product-list').prepend(`<li>Product: ${name}</li>`);

    return false; // prevent default behaviour
});
