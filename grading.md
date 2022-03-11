# Mark It Grading Notes

Y'all did a great job! Its beautiful and slick and works well. A few notes / thoughts:

-   Its cool that you got the cart working but it is a little brittle - it currently depends on the vendor ID being the same as its index in a list of vendors -- what if you delete a vendor? I did a refactor of this function that only requires a single call to supabse and then uses data munging to organize by vendor
-   Love the CSS animation effect - was that inspired by anything? If you borrowed the effect make sure you credit the blog in your README
-   I'm still not 100% certain you need the database trigger -- its very cool and would be perfect if you need _more_ customer information (like their name, address, etc) but since the customer doesn't have additional information, I think you could have just added a default value to the `customer_id` column that defaulted to the currently signed in user
-   You have your CSS variables across multiple files -- if you move them to a file called `variables.css` you can just include that on any page that needs them so you don't have to define them across multiple files
-   Would love to see some messaging to the user that they need to log in to reserve items -- right now it just silently fails
