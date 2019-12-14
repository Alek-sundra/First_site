<?php
if(!empty($_GET['name']) and !empty($_GET['number']))//проверка все ли условия выполнены
{
  $name = $_GET['name'];//объявляется переменная в php в нее кладется значение из JavaScript
  $num = $_GET['number'];
  //Записывается почта и текст письма, которое придет на почту
  //Привет меня зовут ' .$name. '
  //Мой телефон:' .$num. '
  mail('alek-sundra@yandex.ru','Тема письма!','
  Привет меня зовут ' .$name. '
  Мой телефон:' .$num);
  
  exit('Отправлено!');
}
else
{  
  if(empty($_GET['name']))
    exit('Ваше Имя!');
  if(empty($_GET['number']))
    exit('Ваш Номер!');

  exit('ВАШИ ДАННЫЕ');
}
?>