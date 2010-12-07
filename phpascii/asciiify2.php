<html>
<head>
<title>Ascii</title>
<style>
body{
    line-height:5px;
    font-size:5px;
}
</style>
</head>
<body>
<?php
$filename = "http://project.the-moron.net/phpascii/the_hand.png";

if (file_exists($filename))
{
    /** Load the file */
    $fs = fopen($filename, "r");
    $data = fread($fs, filesize($filename));
    fclose($fs);

    $i = 0;
    $d = 0;
    $key = 0;

    /**
    * Loop through and create an array with child arrays each containing
    * 3 entries, which will be our R, G and B values later on
    */
    $file = str_split($data);
    for ($y=0; $y < count($file); $y++)
    {
        /**
        * Place the 3 values inside our array,
        * We'll later be going back through this array to
        * create our image from the data inside it.
        */
        if($d <= 2)
        {
            $pixelData[$key][] = ord($data[$i]);
            $i++;
            $d++;
        }
        else
        {
            $key++;
            $d = 0;

            $pixelData[$key][] = ord($data[$i]);
            $i++;
            $d = 1;
        }
    }

    /**
    * Now we want to create the image, we'll use a modified pagination system
    * to split the array up into equal parts, except for the last row.. We'll pad
    * it out with black pixels
    */

    $rows = count($pixelData);
    $xlen = 100;
    $xlen_last = ceil($rows/$xlen);

    $im = imagecreatetruecolor($xlen, $xlen_last);
    $i = 0;

    for($y = 0; $y <= ceil($rows / $xlen); $y++)
    {
        for($x = 0; $x <= $xlen; $x++)
        {
            imagesetpixel($im, $x, $y, imagecolorallocate($im, $pixelData[$i][0], $pixelData[$i][1], $pixelData[$i][2]));
            $i++;
        }
    }

    if($_GET['debug'] == true)
    {
        print_r($pixelData);
    }
    else
    {
        header("Content-Type: image/png");
        imagepng($im);
        imagedestroy($im);
    }
}
?>
</body>
</html>
