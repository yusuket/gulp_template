jQuery(function($){
/* -------
smooth scroll
------- */
function smoothScroll(target) {
  var speed = 400;
	var position = target.offset().top;
  console.log(position);
	if($(window).width() > 768){
		position = position - 200;
	}
	else{
    
		position = position - 200;
	}
	$('html,body').animate({scrollTop:position}, speed, 'swing');
}
$('a[href^="#"]').on('click',function() {
	var href= $(this).attr("href");
	var target = $(href == "#header" || href == "#"  || href == "" ? 'html' : href);
  smoothScroll(target);
	return false;
});


/* -------
select color
------- */
if($('select').find('option:selected').hasClass('not-select')) {
  $('select').css({'color': '#666'});
}


$('select').on('change', function(){
  if($(this).find('option:selected').hasClass('not-select')) {
    $(this).css({'color': '#666'});
  } else {
    $(this).css({'color': '#333'});
  }
});



/* -------
entry form validation
------- */
var $form = $('#contact-form');

//追加ルールの定義
var methods = {
  phone: function(value, element){
    return this.optional(element) || /^[0-9-]{10}$|^[0-9-]{11}$/.test(value.replace(/[‐－―ー-]/g, ''));
  },
  yubin: function(value, element){
    return this.optional(element) || /^¥d+$/.test(value);
  },
  email2: function(value,element) {
    var email = $("#email").val();
    var email2 = $("#email2").val();
  },
};

//メソッドの追加
$.each(methods, function(key) {
  $.validator.addMethod(key, this);
});

//入力項目の検証ルール定義
var rules = {
  consultation:{
    'consultation[]': {required: true}
  },
  requirement :{
    required: true,
  },
  name :{
    required: true,
  },
  kana :{
    required: true,
  },
  yubin01 :{
    // required: true,
    number: true,
    minlength: 7,
    maxlength: 7
  },
  address :{
    // required: true,
  },
  email :{
    required: true,
    email: true
  },
  email2 :{
    required: true,
    email: true,
    email2: true
  },
  tel :{
    phone: true,
    required: true,
  },
  fax :{
    phone: true,
    required: true,
  },
  company :{
    required: true,
  },
  inquiry : {
    required: true,
  }
};

//入力項目ごとのエラーメッセージ定義
var messages = {
  'consultation[]':{
  	required: '必須項目です。',
  },
  name:{
    required: '必須項目です。',
  },
  kana:{
    required: '必須項目です。',
  },
  email:{
    required: '必須項目です。',
    email: 'メールアドレスの形式ではありません。',
  },
  tel:{
    required: '必須項目です。',
    phone: '電話番号の形式ではありません。',
  },
  company:{
    required: '必須項目です。',
  },
  inquiry:{
    required: '必須項目です。',
  }
};

$form.validate({
  rules: rules,
  messages: messages,
  onkeyup:false,
  onfocusout:false,
  //エラーメッセージ出力箇所調整
  errorPlacement: function(error, element){
    if (element.is(':radio')) {
      error.appendTo(element.parent());
    }else {
      error.insertAfter(element);
    }
  }
});

$form.find('.check').on('click',function(){
  $form.find('.input-field').each(function(){
    $(this).closest('td').find('.confirm-field').html(nl2br($(this).find('input,textarea,select').val()));
  });

  // チェックボックス対策
  var check_values = new Array();
  $form.find('.input-field-checkbox').find('.confirm-field').empty();
  $('input[name="consultation[]"]:checked').each(function(){
    check_values.push($(this).val());
  });
  $.each(check_values, function(index, value){
  	$form.find('.input-field-checkbox').find('.confirm-field').append(value+'　');
  });
  
  if($form.valid()) {
    $form.addClass('confirm');
    $('dd.input-field-checkbox').css('padding-top','8px');
    $('.inquiry-tit').css('margin-top','10px');
    smoothScroll($form);
  } else {
    if($form.find('select.error:first-child').length){
      smoothScroll($form.find('select.error:first-child')); 
    }
    else{
      smoothScroll($form.find('input.error:first-child'));
    }
  }
});
$form.find('.back').on('click',function(){
  $form.removeClass('confirm');
  smoothScroll($form);
});
$form.find('.submit').on('click',function(){
  console.log('submit');
  $form.submit();
});
$form.find('dd').each(function(){
  $(this).append('<div class="confirm-field"></div>')
  $(this).find('input,textarea,select').on('blur',function(){
    $(this).closest('dd').find('.confirm-field').html(nl2br($(this).val()));
  })
});
function nl2br(str) {
  var res = str.replace(/\r\n/g, "<br>");
  res = res.replace(/(\n|\r)/g, "<br>");
  return res;
}


});
