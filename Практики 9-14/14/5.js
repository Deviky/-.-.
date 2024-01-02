$(document).ready(function() {
    var total = 0;

    $(".product").on("dragstart", function(event) {
        var name = $(this).data("name");
        var price = $(this).data("price");
        event.originalEvent.dataTransfer.setData("text/plain", JSON.stringify({ name: name, price: price }));
    });

    $("#cart").on("dragover", function(event) {
        event.preventDefault();
    });

    $("#cart").on("drop", function(event) {
        event.preventDefault();
        var data = JSON.parse(event.originalEvent.dataTransfer.getData("text/plain"));
        var itemName = data.name;
        var itemPrice = data.price;

        $(".cart-items").append("<li>" + itemName + " - $" + itemPrice.toFixed(2) + "</li>");

        total += itemPrice;
        $("#total").text("Итого: $" + total.toFixed(2));
    });
});