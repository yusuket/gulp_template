<?php
session_start();      //セッションの開始
if (@$_POST["modify_consult"] !== '1'){ // 修正モード以外の場合
	$_SESSION = array() ; //すべてのセッション変数を初期化
}
?>
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=1">
<meta name="description" content="">
<meta name=”keywords” content=””>
<title>お問合わせ｜</title>
<meta property="og:title" content="">
<meta property="og:description" content="">
<meta property="og:type" content="website">
<meta property="og:url" content="">
<meta property="og:image" content="">
<link href="/assets/css/style.css" rel="stylesheet">
<link href="/assets/css/contact.css" rel="stylesheet">
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
<link rel="icon" type="image/png" href="/assets/img/favicon.png">
<script src="https://code.jquery.com/jquery-1.12.0.min.js" charset="UTF-8"></script>
<script src="/assets/js/jquery.validate.min.js" charset="UTF-8"></script>
<script src="/assets/js/scrollreveal.js" charset="UTF-8"></script>
<script src="/assets/js/script.js" charset="UTF-8"></script>
<script src="/assets/js/form.js" charset="UTF-8"></script>
</head>
<body>

		<form id="contact-form" action="/contact/complete.php" method="post">
			<div class="form">
				<dl>
					<dt>お名前<span class="red">必須</span></dt>
					<dd><div class="input-field"><input type="text" id="name" name="name" placeholder="例）田中　太郎"></div></dd>
					
					<dt>フリガナ<span class="red">必須</span></dt>
					<dd><div class="input-field"><input type="text" id="kana" name="kana" placeholder="例）タナカ　タロウ"></div></dd>

					<dt>会社名（組織名）<span class="red">必須</span></dt>
					<dd><div class="input-field"><input type="text" id="company" name="company" placeholder="例）株式会社TONMANA"></div></dd>

					<dt>メールアドレス<span class="red">必須</span></dt>
					<dd><div class="input-field"><input type="email" id="email" name="email" placeholder="sample@example.com"></div></dd>

					<dt>電話番号<span class="red">必須</span></dt>
					<dd><div class="input-field"><input type="tel" id="tel" name="tel" placeholder="011-838-8392"></div></dd>

					<dt>ご用件<span class="red">必須</span></dt>
					<dd class="input-field-checkbox">
						<div class="input-field">
							<label class="required"><input class="required" type="checkbox" name="consultation[]" value="サービス及び事業内容に関するお問合わせ">サービス及び事業内容に関するお問合わせ</label><br>
							<label class="required"><input class="required" type="checkbox" name="consultation[]" value="新規お取引に関するお問合わせ">新規お取引に関するお問合わせ</label><br>
							<label class="required"><input class="required" type="checkbox" name="consultation[]" value="採用に関するお問合わせ">採用に関するお問合わせ</label><br>
							<label class="required"><input class="required" type="checkbox" name="consultation[]" value="その他に関するお問合わせ">その他に関するお問合わせ</label><br>
						</div>
					</dd>

					<dt class="inquiry-tit">お問合わせ内容<span class="red">必須</span></dt>
					<dd class="inquiry-detail"><div class="input-field "><textarea id="inquiry" name="inquiry"></textarea></div></dd>
				</dl>

				<div class="check btn btn-style confirm">
					<span class="hvr-sweep-to-right">お問合わせ内容確認</span>
				</div>

				<div class="form-btns confirm hidden">
					<div class="btn btn-style"><span class="back hvr-sweep-to-right">内容を修正する</span></div>
					<br class="only-sp">
					<div class="btn btn-style"><span class="submit hvr-sweep-to-right">送信して同意する</span></div>
				</div>
			</div>
		</form>
</div>
</body>
</html>
