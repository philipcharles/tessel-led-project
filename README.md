LED JS Scroll Ticker
--------------------

A JavaScript controller for an LED panel using tessel.io and angularjs.


API Structure
--------------------
 - Grid format, API item with grid height and width
 	- height designates how many items vertically before next column
 	- width designates total length of grid before repeating



Notes
--------------------
have one of the items in the API be "vert_lines" or something like that
which could be 1 or 2 or however many you want
then another one be "horiz_lines"
basically you're setting up the grid for a min/max size