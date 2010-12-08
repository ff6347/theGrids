him: das bild pixel für pixel durchgehen. imagecolorat gibt dir den farbwert für den pixel den mit x und y angibst
him: in der ersten schleife berechne ich nen $max um auch alle werte zu nutzen
him: (ersten doppelschleife)
him: dann nochmal die berechneten pixel durchgehen und anhand des farbwertes nen prozentsatz berechnen mit wert/max, das dann mal der anzahl der möglichen zeichen. das dann wieder runden, und dem string das zeichen was an der stelle im array steckt angeben
fabiantheblind: okay also je dunkler je "L" iger


<?
$file = "the_hand.png";
$chars = array(' ', '.', ',', ':', ';', 'i', 't', 'f', '1', 'L');

$im = imagecreatefrompng($file);
$width = imagesx($im);
$height = imagesy($im);
$max = 0;
$charCount = count($chars);
$max = 0;
for ($y=0; $y<=$height; $y++) {
    for ($x=0; $x<$width; $x++) {
        $color = imagecolorat($im, $x, $y);
        $pixel[$y][$x] = $color;
        if ($color>$max) {
            $max = $color;
        }
    }
}
$string = '';
foreach ($pixel as $x=>$zeile) {
    foreach ($zeile as $y=>$spalte) {
        $wert = $spalte / $max;
        $wert *= $charCount;
        $wert = round($wert);
        $string .= $chars[$wert];
    }
    $string .= "\n";
}
//echo "<pre>";
echo $string;
//echo "</pre>";
?>