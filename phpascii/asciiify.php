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
function getext($filename) {
    $pos = strrpos($filename,'.');
    $str = substr($filename, $pos);
    return $str;
}
   /* if(!isset($_POST['submit'])){
?>
<form action="<?echo $_SERVER['PHP_SELF'];?>" method="post">
    JPG img URL: <input type="text" name="image"><br>
    <input type="submit" name="submit" value="Create">
</form>
<?
}else{ */

    $image = "http://project.the-moron.net/phpascii/the_hand.jpg";// $_POST['image'];
    $ext = getext($image);
    if($ext == ".jpg"){
        $img = ImageCreateFromJpeg($image);
    }
    else{
        echo'Wrong File Type';
    }
    $width = imagesx($img);
    $height = imagesy($img);
    
    for($h=0;$h<$height;$h++){
        for($w=0;$w<$width;$w++){
            $rgb = ImageColorAt($img, $w, $h);
            $r = ($rgb >> 16) & 0xFF;
            $g = ($rgb >> 8) & 0xFF;
            $b = $rgb & 0xFF;
            if($w == $width -1){
                echo '<br>';
            }else{
                echo '<span style="color:rgb('.$r.','.$g.','.$b.');">#</span>';
            }
        }
    }
//}
?> 
</body>
</html>
