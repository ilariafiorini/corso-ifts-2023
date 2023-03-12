<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> IF </title>
</head>

<body>
  <?php
  //assegnare a $m il max tra x e y
    $x = 10;
    $y = 100;
    if( $x>=$y ){
        //se sei qui, allora x >= y
        if($x==$y){
          echo "x è uguale a y<br>";
        }
        echo "condizione vera!";
        $m = $x;
    } else {
        echo "condizione falsa";
        $m = $y;
    }
    echo "<br>il max tra $x e $y è $m";
  ?>
</body>

</html>