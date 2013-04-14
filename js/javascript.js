$('#stages li').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
});

$('#editStage').click(function(){
	$('#chooseStage').modal();

});

// things that need to be reset when stageModal is hidden
$('#chooseStage').on('hidden', function(){
	$('#stages li').removeClass('selected');
	$('#stageHelper').css("display", "none");
})

//shows the dancer modal
$('#addDancers').click(function(){
	$('#addDancersModal').modal();
});

//close stage modal dialog
function closeStageDialog() {
	$('#chooseStage').modal('hide'); 
	};

//function called when ok button is clicked on stage modal
function drawStage() {
	//check if there is something selected
	if(!$('.selected').length > 0){
		// alert("")
		$('#stageHelper').css("display", "inline");
	}
	else{
		// console.log($('.selected').attr('id'));
		var stage = $('.selected').attr('id');
		closeStageDialog();
	}
	
	};


(function(){
    
})();