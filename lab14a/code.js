add = function(){
result = parseInt(jQuery( '#op1').html()) + parseInt(jQuery('#op2').html());
  // jQuery ('operand_1').html ('1232132123');
text = jQuery( '#op1').html() + " + " + jQuery('#op2').html() + " = "
  jQuery('#result').html(text + result);
}

sub= function(){
result = parseInt(jQuery( '#op1').html()) - parseInt(jQuery('#op2').html());
  // jQuery ('operand_1').html ('1232132123');
text = jQuery( '#op1').html() + " - " + jQuery('#op2').html() + " = "
  jQuery('#result').html(text + result);
}
mul= function(){
result = parseInt(jQuery( '#op1').html()) * parseInt(jQuery('#op2').html());
  // jQuery ('operand_1').html ('1232132123');
text = jQuery( '#op1').html() + " * " + jQuery('#op2').html() + " = "
  jQuery('#result').html(text + result);}

div= function(){
  result = parseInt(jQuery( '#op1').html()) / parseInt(jQuery('#op2').html());
    // jQuery ('operand_1').html ('1232132123');
  text = jQuery( '#op1').html() + " / " + jQuery('#op2').html() + " = "
    jQuery('#result').html(text + result);}

setup = function(){
jQuery('#add_button').click(add);
jQuery('#sub_button').click(sub);
jQuery('#mul_button').click(mul);
jQuery('#div_button').click(div);
}
jQuery(document).ready(setup);
