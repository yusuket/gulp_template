<?php
/*---------------------------------------------
++　メールの送信
---------------------------------------------*/
// if(!$_POST){
// 	return;
// }
// else{
// 	ver_dump($_POST);
// }
//session_start();

//言語設定、内部エンコーディングを指定する
mb_language("japanese");
mb_internal_encoding("UTF-8");

//共通設定：送信先
$sendto = "xxxx@xxxx.co.jp";

//送信先
$to = $sendto;

//差出人設定
$frommail = "xxxx@xxxx.co.jp";
$fromname = "【株式会社xxxx】xxxx";
$header = "From: ". mb_encode_mimeheader (mb_convert_encoding($fromname,"ISO-2022-JP","AUTO")) . "<" . $frommail. ">";

//メールが送信できなっかた場合の戻り先
$re_mail = "-f".$sendto;

//自動返信用に格納

$_name			= mb_convert_kana($_POST["name"],"KV","UTF-8");
$_kana			= mb_convert_kana($_POST["kana"],"KV","UTF-8");
$_company		= mb_convert_kana($_POST["company"],"KV","UTF-8");
$_email     	= $_POST["email"];
$_tel       	= $_POST["tel"];
$_consultation 	= implode("、", $_POST["consultation"]);
$_inquiry   	= mb_convert_kana($_POST["inquiry"],"KV","UTF-8");

//メールタイトル
$subject = "【WEBからのお問い合わせ】".$_name."様";

//本文
$message  = "\n";
$message .= "▼お名前："."\n".$_name."\n\n";
$message .= "▼フリガナ："."\n".$_kana."\n\n";
$message .= "▼会社名（組織名）："."\n".$_company."\n\n";
$message .= "▼メールアドレス："."\n".$_email."\n\n";
$message .= "▼電話番号："."\n".$_tel."\n\n";
$message .= "▼ご用件："."\n".$_consultation."\n\n";
$message .= "▼お問合わせ内容："."\n".$_inquiry."\n\n";

//自動返信用メール本文
$title = "【株式会社xxxx】お問い合わせ内容のご確認";

$naiyou = "
$_name  様

株式会社xxxxへのお問い合わせいただき、
誠にありがとうございます。

２営業日以内に弊社担当者より折り返しご連絡させていただきます。
今しばらくお待ちくださいますよう、よろしくお願い申し上げます。

$_name 様が登録された内容は下記のとおりです。
ご確認ください。

【お問い合わせ内容】
------------------------------------------------------------
【お名前】　　　　　：$_name\n
【フリガナ】　　　　：$_kana\n
【会社名（組織名）】：$_company\n
【メールアドレス】　：$_email\n
【電話】　　　　　　：$_tel\n
【ご用件】　　　　　：$_consultation\n
【お問合わせ内容】　：$_inquiry\n
------------------------------------------------------------
以上です。";


if($_POST["consultation"] 
	&& $_POST["name"] 
	&& $_POST["kana"] 
	&& $_POST["company"] 
	&& $_POST["tel"]  
	&& $_POST["email"] 
	&& $_POST["inquiry"]){
	//送信
	mb_language("Japanese");
	mb_internal_encoding("UTF-8");
	$ans01=mb_send_mail($to,$subject,$message,$header,$re_mail);
	//自動返信用
	if($_POST["email"]) {
		$ans02=mb_send_mail($_email,$title,$naiyou,$header,$re_mail) ;
	}
}
?>
