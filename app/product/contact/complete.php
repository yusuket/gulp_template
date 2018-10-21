<?php
session_start();

//メールの送信
require_once("mail.php");

//セッションクリア
$_SESSION = array();//メモリ内の変数を消去
session_destroy();//セッションの破棄

?>
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=1">
<meta name="description" content="">
<meta name=”keywords” content=””>
<title>お問合わせ｜株式会社XXXXXX</title>
<meta property="og:title" content="お問合わせ｜株式会社XXXXXX">
<meta property="og:description" content="">
<meta property="og:type" content="website">
<meta property="og:url" content="">
<link href="/assets/css/style.css" rel="stylesheet">
<link href="/assets/css/contact.css" rel="stylesheet">
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
<link rel="icon" type="image/png" href="/assets/img/favicon.png">
<script src="https://code.jquery.com/jquery-1.12.0.min.js" charset="UTF-8"></script>
<script src="/assets/js/jquery.validate.min.js" charset="UTF-8"></script>
<script src="/assets/js/scrollreveal.js" charset="UTF-8"></script>
<script src="//jpostal-1006.appspot.com/jquery.jpostal.js"></script>
<script src="/assets/js/script.js" charset="UTF-8"></script>
</head>
<body>

お問い合わせありがとうございました。


</body>
</html>