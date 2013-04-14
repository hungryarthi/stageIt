$('#stages li').click(function(){
    $(this).addClass('stage-selected').siblings().removeClass('stage-selected');
});

$('#editStage').click(function(){
	$('#chooseStage').modal();

});

// things that need to be reset when stageModal is hidden
$('#chooseStage').on('hidden', function(){
	$('#stages li').removeClass('stage-selected');
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
	if(!$('.stage-selected').length > 0){
		$('#stageHelper').css("display", "inline");
	}
	else{
		var stage = $('.stage-selected').attr('id');
		closeStageDialog();
		drawStageShape(stage);
	}
	
	};

function drawStageShape(stage){
	switch(stage){
		case 'rectangle':
			drawRectangleStage();
			break;
		case 'semicircle':
			drawSemiCircleStage();
			break;
	}
}

function drawRectangleStage(){
	var canvas = document.getElementById('canvas-stage');
	var ctxt = canvas.getContext('2d');
	ctxt.clearRect(0, 0, canvas.width, canvas.height);
	ctxt.beginPath();
	ctxt.rect(.5, .5, canvas.width-1, canvas.height-1);
	ctxt.fillStyle = 'white';
	ctxt.fill();
	ctxt.lineWidth = 1;
	ctxt.strokeStyle = 'gray';
	ctxt.stroke(); 
}
function drawSemiCircleStage(){
	var canvas = document.getElementById('canvas-stage');
	var ctxt = canvas.getContext('2d');
	ctxt.clearRect(0, 0, canvas.width, canvas.height);
	ctxt.beginPath();
	var x = canvas.width/2+.5;
	var y = 1.5;
	var radius = canvas.height-2.5;
	var startAngle = 0; endAngle = Math.PI;
	ctxt.arc(x,y,radius, startAngle,endAngle);
	ctxt.closePath();
	ctxt.lineWidth = 1;
	ctxt.fillStyle = 'white';
	ctxt.fill();
	ctxt.strokeStyle = 'gray';
	ctxt.stroke();
}