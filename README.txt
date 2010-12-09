ASCII 2 ID CS4
This is my approach to this problem.
Maybee there are solutions, but I can't find them right now.
Some of this code is just other peoples stuff some is mine
watch out for the links
The Processing InDesign approach:
see the Processing code here -> imageToFile.pde  http://tinyurl.com/33oku6l
and the InDesign JavaScript code build with that here -> theValues.jsx http://tinyurl.com/2ceg3az
this code is loaded in InDesign with this Script -> theTypoGrid.jsx http://tinyurl.com/236yszh
just download the whole .zip provided here -> http://fabiantheblind.github.com/theGrids/
and you'll be fine.

This is some more code from him -> http://gabrieldunne.com/
from here -> http://media.quilime.com/files/src/processing/ascii_art/index.html
and here -> http://media.quilime.com/files/src/processing/ascii_art/ascii_art2.pde
Seems to bee rather old so i updated it a bit. (nothing fancy just replacing B's with P's)

see it here -> ascii_art.pde http://tinyurl.com/2dk22gk
and here ->  ascii_art2.pde https://github.com/fabiantheblind/theGrids/raw/asciiify/prcssngascii/ascii_art2/ascii_art2.pde

The Web Javascript InDesign approach:
using a JavaScript by him http://www.nihilogic.dk/about.html
from here -> http://blog.nihilogic.dk/2008/03/jsascii.html
see the Web display here -> http://project.the-moron.net/jsascii/jsascii.html
see the Javascript code here -> jsascii.js http://project.the-moron.net/jsascii/jsascii.js
get the InDesign idml with the .zip provided here -> http://fabiantheblind.github.com/theGrids/
unfortunatly this is just a copy paste.
This is the most promissing way. It makes a great string.

The Web PHP InDesign approach:
see the Web display here -> http://project.the-moron.net/phpascii/asciiify.php
the PHP code here -> is from here http://phpsnips.com/snippet.php?id=29
the InDesign code -> https://github.com/fabiantheblind/theGrids/blob/asciiify/phpascii/asciiify2.php
this code makes use of this -> http://stdbrouw.github.com/Extendables/
by him -> https://github.com/stdbrouw
this needs some heavy formatting right now. lots of replace() and some match()
The problem with InDesign is that you can't make colors via script without makeing a swatch (as far as i know). Wit this String provided you'll end up making a color per pixel or matching colors with each other.

fabiantheblind Tue Dec 7 2010

UPDATE

after some corespondence with the programmer of choice¦
he gave me this code ->
and explained it like that:
him: das bild pixel fŸr pixel durchgehen. imagecolorat gibt dir den farbwert fŸr den pixel den mit x und y angibst
him: in der ersten schleife berechne ich nen $max um auch alle werte zu nutzen
him: (ersten doppelschleife)
him: dann nochmal die berechneten pixel durchgehen und anhand des farbwertes nen prozentsatz berechnen mit wert/max, das dann mal der anzahl der mÃ¶glichen zeichen. das dann wieder runden, und dem string das zeichen was an der stelle im array steckt angeben
fabiantheblind: okay also je dunkler je "L" iger

see the sweet asciiify README.txt -> https://github.com/fabiantheblind/theGrids/raw/asciiify/sweetphpascii/README.txt




