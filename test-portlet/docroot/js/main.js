function hideAll() {
	$(".sheet").hide();
}
function menuClick(id) {
	hideAll();
	$("#menuUl > li").removeClass("active");
	$("#li" + id).addClass("active");
	$("#sheet" + id).show();
}
$(document).ready(function() {
	hideAll();
	$("#sheet1").show();
});