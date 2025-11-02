// Define two variables to be tested
let itemPrice = 120;
let hasCoupon = true;

console.log(`Initial Price: $${itemPrice}`);
console.log(`Coupon Status: ${hasCoupon ? 'Available' : 'Not Available'}`);
console.log("------------------------");


// Outer if: Check if the price is above a certain threshold (e.g., $100)
if (itemPrice > 100) {
    console.log("Status: High-priced item (over $100).");

    // Inner if...else: Check for the secondary condition (coupon availability)
    if (hasCoupon === true) {
        let finalPrice = itemPrice - 20; // Apply a fixed $20 discount
        console.log("Result: A coupon is applied. Final Price is **$" + finalPrice + "**.");
    } else {
        // Executed if itemPrice > 100 AND hasCoupon is false
        console.log("Result: No coupon available. Price remains **$" + itemPrice + "**.");
    }

} else {
    // Outer else: Executed if the itemPrice is $100 or less
    console.log("Status: Low-priced item ($100 or less).");
    console.log("Result: No discount is needed for this price. Price is **$" + itemPrice + "**.");
}