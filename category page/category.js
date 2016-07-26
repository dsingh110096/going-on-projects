$(document).ready(function() {




var checkboxes = $("input[type='checkbox']");

var submitButt = $("input[type='button']");

var size = 10;
 
 $('.counter').attr( 'value', size + ' Topics more to continue ');
 
 
 var image_block = {
	 
	 img1 : $('#img1'), img16: $('#img16'),    
	 img2 : $('#img2'), img17: $('#img17'),
	 img3 : $('#img3'), img18: $('#img18'),
	 img4 : $('#img4'), img19: $('#img19'),
	 img5 : $('#img5'), img20: $('#img20'),
	 img6 : $('#img6'), img21: $('#img21'),
	 img7 : $('#img7'), img22: $('#img22'),
	 img8 : $('#img8'), img23: $('#img23'),
	 img9 : $('#img9'), img24: $('#img24'),
	 img10: $('#img10'),img25: $('#img25'),
	 img11: $('#img11'),img26: $('#img26'),
	 img12: $('#img12'),img27: $('#img27'),
	 img13: $('#img13'),img28: $('#img28'),
	 img14: $('#img14'),img29: $('#img29'),
	 img15: $('#img15'),img30: $('#img30')	
	 };
	 
	 


$('.imageBlock').click(function() {
	
	     
		
            
			
			
        		 
		 
		 var $$ = $(this)
        
		if( !$$.is('.checked')){
	         
			 $$.addClass('checked');
			 
			 image_block[this.id].find('input[type=checkbox]').attr('checked','true');
				 
				 
				 
			 
			 } 
		
		else if($$.is('.checked')){
            
			$$.removeClass('checked');
            image_block[this.id].find('input[type=checkbox]').attr('checked', false);
		   
		}
		
		
		
            
       
		
		
		
		
					
		


var counter = $("input[type='checkbox']").filter(":checked").length;

var remaining = size - counter;

var final = $('.counter').attr('value', remaining + ' Topics more to continue ');

if(remaining == 0 || remaining < 0){
	
	$('.counter').attr('value','please continue');
	
	$('.counter').css({'background':'linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)','color':'#fff','opacity':'1','margin-left':'60px'});
	 
	 }
	 
	 
else if(remaining < 10){
		
		$('.counter').css({'background':'#999','color':'#111','opacity':'0.6'});
		
	}
	
if((counter >= 10)){
		
		            submitButt.attr("disabled", !checkboxes.is(":checked"));
		
	                }
	
	else if(counter == 0){
		
        		
		            submitButt.attr("disabled");
		
	               }
	
	else{
		
		submitButt.attr("disabled", checkboxes.is(":checked"));
		
		}
 
    


});


 
 
 
 
  
  

});