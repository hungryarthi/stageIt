$('#stages li').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
});

$('#editStage').click(function(){
	$('#stages li').removeClass('selected');
	$('#chooseStage').modal();

});
$('#addDancers').click(function(){
	$('#addDancersModal').modal();
});



(function(){
    
})();