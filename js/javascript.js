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

function addDancers(){
	console.log("add clicked");

	var spinner = $( "#spinner" );
	console.log(spinner);
	//var numDancers = spinner.get(value)d;
	//var numDancers = spinner.spinner("value");
	var numDancers = 10;
	console.log("numDancers = "+numDancers);

	closeAddDancersDialog();
	var x = 30;
	var y = 10;

	for(var i=0; i < numDancers; i++){
		x;
		y=y+40;
		console.log('y='+y);

		addDancerAt(x,y);
	}

}
function addDancerAt(posX,posY){
	var draggableObject = $('<div id="draggable" class="ui-widget-content"><p>Drag me around</p></div>');
	var dancerItem = $('<img src="img/ballet_dancer1.png" id="img-dancer"/>');
	dancerItem.css("position","absolute");
	dancerItem.css("z-index", 1);
    dancerItem.css("width", 40);
    dancerItem.css("height", 40);
    dancerItem.css("top", posY);
    dancerItem.css("left", posX);
    console.log("dancer added?");

    draggableObject.append(dancerItem);
    
    //dancer.element = dancerItem;
    $("#canvasWrapper").append(draggableObject);
    console.log("dancer added at " + posX + ',' + posY + '?');
}
function closeAddDancersDialog() {
	$('#addDancersModal').modal('hide'); 
	};


// var movingDancer = null;         //keeps track of dancer/prop user is physically dragging
// var dancerSize = 40;
// //  Check to see if any pieces (images) are being moved (physically dragged around by user)
// //  To do this, look at when the mouse click on the upper-most canvas is down, moving, and up.
// $("#canvasWrapper").mousedown(function(e) {
//     //get the location of the click: (specifially on the canvas, not just the page)
//     var xPos = e.pageX - $('#canvasWrapper').offset().left;      
//     var yPos = e.pageY - $('#canvasWrapper').offset().top;
    
//     movingDancer = stage.getDancerAt(xPos,yPos);
//     return false;

// });

// $(document).mousemove(function(e) {
//     if(movingDancer!=null){
//         $(movingDancer.element).css("z-index", 999);      //move just the piece to top-most z-index
        
//         //move piece along with cursor
//         var xPos = Math.floor(e.pageX-$("#canvasWrapper").offset().left-(dancerSize/2));
//         var yPos = Math.floor(e.pageY-$("#canvasWrapper").offset().top-(dancerSize/2));
//         $(movingDancer.element).css("left", xPos);
//         $(movingDancer.element).css("top", yPos);
        
//     }

// });

// $(document).mouseup(function(e) {
//     if (movingPiece!=null){
//         //Check whether move is valid
//         var toRow = Math.floor((e.pageY-$("#top_canvas").offset().top)*(board.boardSize/400));
//         var toCol = Math.floor((e.pageX-$("#top_canvas").offset().left)*(board.boardSize/400))
//         var ramifications = rules.makeMove(movingPiece, directionOf(movingPiece.color), directionOf(whoseTurn), toRow, toCol);

//         //if invalid move, move back to original position:
//         if(ramifications == null){
//             $(movingPiece.element).css("top", movingPiece.row*sqheight);
//             $(movingPiece.element).css("left", movingPiece.col*sqwidth);
//             $(movingPiece.element).css("z-index", 0);           //move piece back to middle z-index
//             movingPiece = null; 
//         }
//         else{
//             toggleTurn();
//             $(movingPiece.element).css("z-index", 0);
//             movingPiece = null;
            
//             addUndoMove(ramifications);
//             redoArray = [];
//             handleUndoButton();
//             handleRedoButton();
//         }
//     }
// });

$(function() {
    $( "#draggable" ).draggable();
  });
