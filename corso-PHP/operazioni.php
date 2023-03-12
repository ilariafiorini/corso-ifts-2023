<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Operazioni </title>
</head>

<body>
  <?php
  $a = 10;
  $b = 2;
  $c = $a + $b;
  //echo '$c=' . $c;
  echo '$a + $b = $c <br>';
  echo "$a + $b = $c";
  echo "<br>";
  echo $a * $b ;
  echo "<br>";
  echo "$a * $b = " . ($a * $b);
  echo "<br>";
  $s = "stringa";
  echo $s . $a;
  echo "<br>";
  // modulo % : resto intero della divisione
  //5 % 2 vale 1 
  //il risultato intero è 2 e il resto è 1
  echo "<br>";
  echo $a >= $b;
  echo "<br>";
  //operatore ternario
  $a = 100;
  $b = 2;
  echo "a = $a e b = $b ";
  $risultato = ($a >= $b ? 
                (($a==$b)?"a uguale a b":"a mggiore di b")
                :  
                "b maggiore di a");
  echo $risultato;
  echo "<hr>";
  
  //1. calcolare la media tra $a e $b
  echo "la media tra $a e $b è ". ( ($a + $b) /2 );
  
  echo "<br>";
  //2. Invertire il contenuto di $a e $b
  echo "prima a = $a e b = $b <br>";
  $t = $a;
  $a = $b;
  $b = $t;
  echo "dopo a = $a e b = $b <br>";

  echo "<hr>";
  //operatore ++ e -- 
  echo "prima a = $a <br> ";
  //$a++; // $a = $a + 1; //restituisce $a e POI incrementa
  //++$a; //PRIMA incrementa a e restituisce il valore già incrementato
  echo "dopo a = ". $a-- ;
  //echo " a = $a";

  echo "<hr>";
  //operatori logici
  $x = 100;
  //$compreso = ($x >= $a) AND ($x <= $b);
  echo (($x >= $a) AND ($x <= $b) ) ? 
          "x compreso" 
        : "x NON compreso";

  echo "<br>";
  //OR ||
  $nome1 = "Mario";
  $nome2 = "Giuseppe";
  $nome = "Maria";

  $nome_corretto = (($nome == $nome1) or ($nome == $nome2)) ? 
              "nome corretto" 
            : "nome non corretto";
  echo $nome_corretto;


  


  ?>
</body>

</html>