add = function(){
result = parseInt(jQuery( '#op1').val()) + parseInt(jQuery('#op2').val());
  // jQuery ('operand_1').html ('1232132123');
text = jQuery( '#op1').val() + " + " + jQuery('#op2').val() + " = " ;

jQuery('#result').val(text + result);

styled_result = "<span id = 'addstyle'>" + text + result + "</span>";
old_div_content =jQuery('#history').html();
new_div_content = old_div_content + styled_result +'<br>';
jQuery ('#result').html (text + result ); // or use
jQuery ('#history').html (new_div_content);
// or use
                                           // jQuery ('#history'). append (styled_result+ 'br'):
                                          // append will add the new content without overwriting
                                          // no need for line 10 and 11in this case!
                                        }
sub = function(){
  result = parseInt(jQuery( '#op1').val()) - parseInt(jQuery('#op2').val());

text = jQuery( '#op1').val() + " - " + jQuery('#op2').val() + " = " ;

jQuery('#result').val(text + result);

styled_result = "<span id = 'addstyle'>" + text + result + "</span>";
old_div_content =jQuery('#history').html();
new_div_content = old_div_content + styled_result +'<br>';
jQuery ('#result').html (text + result );
jQuery ('#history').html (new_div_content);
    }


div= function(){
result = parseInt(jQuery( '#op1').val()) / parseInt(jQuery('#op2').val());

text = jQuery( '#op1').val() + " / " + jQuery('#op2').val() + " = " ;

jQuery('#result').val(text + result);

styled_result = "<span id = 'addstyle'>" + text + result + "</span>";
old_div_content =jQuery('#history').html();
new_div_content = old_div_content + styled_result +'<br>';
jQuery ('#result').html (text + result );
jQuery ('#history').html (new_div_content);
    }

mul = function(){
result = parseInt(jQuery( '#op1').val()) * parseInt(jQuery('#op2').val());

text = jQuery( '#op1').val() + " * "+  jQuery('#op2').val() + " = " ;
jQuery('#result').val(text + result);

styled_result = "<span id = 'addstyle'>" + text + result + "</span>";
old_div_content =jQuery('#history').html();
new_div_content = old_div_content + styled_result +'<br>';
jQuery ('#result').html (text + result );
jQuery ('#history').html (new_div_content);
}
show= function (){
jQuery ('#history ').show ()}
hide= function(){
jQuery ('#history ').hide (); // or use  // jQuery ('#history'). attr ('style', 'display:none');

setup = function(){
jQuery('#add_button').click(add);
 jQuery('#sub_button').click(sub);
 jQuery('#mul_button').click(mul);
 jQuery('#div_button').click(div);
 jQuery('#show_button').click(show);
 jQuery('#hide_button').click(hide);
}
jQuery(document).ready(setup);
