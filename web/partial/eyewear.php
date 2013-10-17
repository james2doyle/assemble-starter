<?php
$color = array('66ffcc', '66ccff', 'ff6666', '6666ff', 'ff8000', 'e6e6e6', '0080ff', 'ff0080', '808000', 'ffffff', '999999');
$link = $_POST['link'];
$num = rand(0, 4);
usleep(1000000);
header('Content-type: text/html');
echo '<div class="popup-image"><img src="http://placehold.it/574x130/'.$color[$num].'/000000" width="574" width="130"></div>
<p>Prada is an Italian fashion label specializing in luxury goods for men and women (ready-to-wear, leather and fashion accessories, shoes, luggage, perfume etc.), founded in 1913 by Mario Prada.</p>
<a href="http://'.$link.'/" target="_blank">'.$link.'</a>';
?>