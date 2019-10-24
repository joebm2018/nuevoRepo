console.log($('.item-2'));
$(".item-2").find("li:eq(0)").css("background-color","skyblue");
// $(".item-a").parent().css("list-style","none");
// .parents() aplicara para todo los padres de un elemento ejm ("")
$(".item-a").parents().css("list-style","none");

//.parentsUntil("selector") hace lo mismo peroparara cuando ecuentra el elemento enviado
$(".nivel-1>li").addClass("vinetas");