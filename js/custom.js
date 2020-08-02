$(document).ready(function () {
	$("#productBox").sortable();
	$("input[name=txtItem]").keyup(function (event) {
		//here user press enter key button click event will fire
		if (event.keyCode == 13) {
			$("#btnAdd").click();
		}
	});
	$("#btnAdd").click(function () {
		var item = $("#txtItem").val()
		if (item) {
			item = item.trim();
			let uniqueTimestamp = new Date().valueOf();
			$("#productBox").append(
				`<li class="list-group-item mb-3 bg-primary" id="${item}-${uniqueTimestamp}">${item}</li>`
			);
			$("#noProduct").empty();
			$("input[name=txtItem]").val("");
			checkMessage();
		}
	});
	$(document).on("dblclick", "li", function () {
		var liId = $(this).attr("id");
		var counter = 5;
		var intervalId = null;
		function remove() {
			clearInterval(intervalId);
			$("#" + liId).remove();
			checkMessage();
		}
		function checkTime() {
			if (counter == 0) remove();
			else {
				counter--;
			}
		}
		intervalId = setInterval(checkTime, 500);
		$("#" + $(this).attr("id")).fadeOut(500);
	});
	function checkMessage() {
		if ($("#productBox").contents().length == 0) {
			$("#noProduct").html("There is No Product");
		} else {
			$("#noProduct").html("You can delete list by double click on it");
		}
	}
});