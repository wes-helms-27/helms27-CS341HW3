$(document).ready(function() {
    $("#order-button").click(function(event) {
        event.preventDefault(); // Prevents form submission

        var notes = $("#notes").val().toLowerCase(); // Get the notes input and convert to lowercase
        var quantity = $("#quantity").val(); // Get selected quantity
        var topping = $("input[name='topping']:checked").val(); // Get selected topping

        if (notes.includes("vegan")) {
            alert("Warning: Cheesecakes contain dairy!");
        } else {
            // Ensure a topping is selected before proceeding
            if (!topping) {
                alert("Please select a topping before placing your order.");
                return;
            }

            // Replace the entire form with a confirmation message
            $("#order-form").replaceWith(`
                <div id="order-confirmation">
                    <h2>Thank You!</h2>
                    <p>Your order has been placed.</p>
                    <p><strong>Topping:</strong> ${topping}</p>
                    <p><strong>Quantity:</strong> ${quantity}</p>
                    <p><strong>Notes:</strong> ${notes ? notes : "None"}</p>
                </div>
            `);
        }
    });

    // Show dropdown when hovering over "Jan" or the dropdown itself
    $("#month-selector, #month-dropdown").hover(
        function() {
            $("#month-dropdown").stop(true, true).fadeIn();
        },
        function() {
            $("#month-dropdown").stop(true, true).fadeOut();
        }
    );

    // When a month is clicked, update text and close dropdown
    $("#month-dropdown li").click(function() {
        var selectedMonth = $(this).attr("data-month"); // Get month using attr()
        $("#month-selector").text(selectedMonth);
        $("#month-selector").attr("data-month", selectedMonth); // Update attribute
        $("#month-dropdown").fadeOut();
    });
});