<?php
  // The global $_POST variable allows you to access the data sent with the POST method by name
  // To access the data sent with the GET method, you can use $_GET
  $date1 = htmlspecialchars($_GET['date1']);
  $time1  = htmlspecialchars($_GET['time1']);
  $place1 = htmlspecialchars($_GET['place1']);

  // echo  $date1, ' ', $time1, ' ', $place1;
?>
<!DOCTYPE html>
<html>
    <head>
        <title>생일 데이터</title>
    </head>
    <body>
        <h3>환영합니다!!!</h3>
        <?php 
           echo '당신의 생일='. $date1 ;
           echo '<br>';
           $birthday = strtotime($date1);
           $birth_mon_date = date("m-d", $birthday);
           //echo '당신의 생일='. $birth_mon_date;
           echo '<br>';
           $date_now = date("Y-m-d", time());
           $mon_date_now = date("m-d", time());
           echo '몇월 몇일 ='. $mon_date_now;
           echo '<br>';
          
           echo '오늘='. $date_now;

           if ($birth_mon_date == $mon_date_now) {
            echo '생일 축하합니다!!!!'. '파티 시간='. $time1. '   파티 장소='. $place1;
           } else {
             echo '좋은 하루 보내세요~~';
           }
        ?>
    </body>
</html>