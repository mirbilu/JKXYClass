$(document).ready(function() {
	//加载完后根据显示屏宽度整理课程图标
	var class_x =$(".class_name").eq(0).width();
    var z =Math.floor($(".conter_class").width() / class_x);
    $(".class_name").each(function(index) {
    	var m=index+1;
        var n= m % z;
        if (n == 0) {
            $(".class_name").eq(index).css("margin-right", "0");
        }
    })
    // 对左侧导航栏的侧显示模块进行排列
    $(".m_c_l").each(function(index) {
        var m = (index + 1) * 39;
        $(".m_c_l").eq(index).children(".left_show").css("margin-top", "-" + m + "px");
    })
    // 设置顶部导航栏鼠标覆盖显示效果
    $(".top_nav").mouseover(function() {
        $(this).children(".topnavli").fadeIn();
    })
    // 设置顶部导航栏鼠标移出消失效果
    $(".topnavli").mouseout(function() {
        $(this).fadeOut();
    })
    // 设置课程信息鼠标覆盖显示效果
    $(".class_name").mouseover(function() {
        $(this).children("div").children(".c_introduce").fadeIn();
        $(this).children("div").children(".c_level").fadeIn();
        $(this).children(".video_bg").css({ "opacity": "0.5" });
        $(this).children(".video_bg").children("i").css("display", "block");
    })
    // 设置课程信息鼠标移除消失效果
    $(".class_name").mouseout(function() {
        $(this).children("div").children(".c_introduce").hide();
        $(this).children("div").children(".c_level").hide();
        $(this).children(".video_bg").css("opacity", "0");
        $(this).children(".video_bg").children("i").css("display", "none");
    })
    // 设置左侧导航栏的侧显示模块鼠标覆盖显示效果
    $(".m_c_l").mouseover(function() {
        $(this).children(".left_show").css("display", "block");
        $(this).css({ "box-shadow": "1px 1px 4px", "border-left": ".5px solid #ccc", "margin-left": "-1px" });
        $(this).children("a").css({ "color": "#35b558" });
    })
    // 设置左侧导航栏的侧显示模块鼠标移出消失效果
    $(".m_c_l").mouseout(function() {
        $(this).children(".left_show").css("display", "none");
        $(this).css({ "box-shadow": "none", "border-left": "0", "margin-left": "0" });
        $(this).children("a").css({ "color": "black" });
    })
    // 字体变绿效果
    $(".l_c_c_l").children("a").mouseover(function() {
        $(this).css({ "color": "#35b558" });
    })
    // 字体变黑效果
    $(".l_c_c_l").children("a").mouseout(function() {
        $(this).css({ "color": "black" });
    })
    // 字体变绿效果
    $(".l_content_h").mouseover(function() {
        $(this).css({ "color": "#35b558" });
    })
    // 字体变黑效果
    $(".l_content_h").mouseout(function() {
        $(this).css({ "color": "black" });
    })
    // 底部页面导航效果
    $(".page-n").mouseover(function(){
    	$(this).css("border","1px solid #35b558");
    })
    $(".page-n").mouseout(function(){
    	$(this).css("border","1px solid #fff");
    })
    // 顶部导航栏搜索框效果
    $("#admin_1").click(function(){
    	$("#search_part").fadeIn();
    	$("#admin_search").css("right","-155px");
    })
    $(".search_button").click(function(){
    	$("#admin_search").css("right","10px");
    	$("#search_part").hide();
    })
    // 侧边返回顶部按钮效果
    $(window).scroll(function(){
    	var m=$(window).scrollTop();
    	if (m>0) {
    		$("#cbt_ico1").fadeIn();
    	}else{
    		$("#cbt_ico1").fadeOut();
    	}
    })
    $("#cbt_ico1").click(function(){
    	$("html, body").animate({scrollTop: 0}, 500);
    })
})
