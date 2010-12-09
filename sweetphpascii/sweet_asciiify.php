<?
function get($key) {
    return isset($_GET, $_GET[$key]) ? $_GET[$key] : null;
}
$file         = get('file') ? get('file') : 'the_hand5050.png';
$charstring     = get('chars') ? get('chars') : ' .,:;itf1L';
$ellify     = get('ellify') ? get('ellify') : false;
$demo        = get('demo') ? (boolean) get('demo') : false;
$chars = str_split($charstring);

$im = imagecreatefrompng($file);
//$im = imagecreatefromjpg($file);

$width = imagesx($im);
$height = imagesy($im);
$charCount = count($chars);
$string = '';
if ($ellify) {
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
    foreach ($pixel as $x=>$zeile) {
        foreach ($zeile as $y=>$spalte) {
            $wert = $spalte / $max;
            $wert *= $charCount;
            $wert = round($wert);
            $string .= $chars[$wert];
        }
        $string .= "\n";
    }
} else {
    $max = 255;
    for ($y=0; $y<$height; $y++) {
        for ($x=0; $x<$width; $x++) {
            $color = imagecolorat($im, $x, $y);
            $wert = $color / $max;
            $wert *= $charCount;
            $wert = round($wert);
            $string .= $chars[$wert];
        }
        $string .= "\n";
    }
}
if ($demo) {
    echo '<pre style="pointsize:3">';
    echo $string;
    echo '</pre>';
} else {
    echo $string;
}
?>