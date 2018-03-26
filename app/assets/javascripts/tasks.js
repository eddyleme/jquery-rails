// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
console.log('hey');
$(document).on('turbolinks:load', function(){
// 	$('#task_name').focus();

// 	$('.edit_link').on('click', function(e){
// 		e.preventDefault();
// 		$('.modal').modal();
// 	});
  $('#task_name').focus();
  $('.modal-footer .btn-primary').on('click', function(){
  	$('.modal-body form').submit();
  });
});