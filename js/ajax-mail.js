$(function() {


	var form = $('#contact-form, #contact-page-form');

	var formMessages = $('.form-messege');

	
	$(form).submit(function(e) {
		
		e.preventDefault();

		
		var formData = $(form).serialize();

		
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			
			$(formMessages).text(response);

			
			$('#contact-form input,#contact-form textarea, #contact-page-form input,#contact-page-form textarea').val('');
		})
		.fail(function(data) {
			
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});
	});

});
