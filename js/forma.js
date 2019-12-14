function getXmlHttp()//Функция тупо перебирает возможные внутренние реализации и возвращает начальный объект XMLHttpRequest.
{
  var xmlhttp;
  try 
  {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } 
  catch (e) 
  {
    try 
    {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } 
    catch (E) 
    {
      xmlhttp = false;
    }
  }
//Объект XMLHttpRequest (или, сокращенно, XHR) дает возможность браузеру 
//делать HTTP-запросы к серверу без перезагрузки страницы. Как правило, 
//XMLHttpReques используется для загрузки данный
  if (!xmlhttp && typeof XMLHttpRequest!='undefined') 
  {
    xmlhttp = new XMLHttpRequest();
  }
  return xmlhttp;
}

function MessValue(className)
{
  if(className == 'close' || document.getElementById('modalHead').innerHTML == 'Отправлено!')
  {
    var elems = document.getElementsByClassName('mess');
    for(var i=0; i<elems.length; i++)
    {
      elems[i].value = '';
    }
    document.getElementById('modalHead').innerHTML = 'ВАШИ ДАННЫЕ';
  }
}

function sendForm()
{
  var xmlhttp = getXmlHttp();//объявляем переменую xmlhttp и вызываем функцию getXmlHttp();
  var data = '?';
  var elems = document.getElementsByClassName('mess');

  for(var i=0; i<elems.length; i++)
  {
    data+=elems[i].name+'='+elems[i].value+'&';
  }
  xmlhttp.open('GET','php/mail.php'+data, true);//открываем php файл
  xmlhttp.send();//отправляем данные в файл
  xmlhttp.onload=function()//функция которая говорит, что все завершилось
  {
    if(xmlhttp.status==200)//если все поля заполнены
    {
      //информация выходит к нам на почту и нам приходит сообщение, что все отправлено
      document.getElementById('modalHead').innerHTML=xmlhttp.responseText;
    }
  };
}