var twobombSlider  = (function(){
var drag = false;
var values = [];


$(".slider").each(function(i,e){
	updateView(e);
});
$(".slider>.bar>.lp,.slider>.bar>.rp").bind("mousedown",function(){
	drag = $(this);
})
$(document).bind("mousemove",function(e){
	if(!drag)
  	return;
   var x = (e.pageX - $(drag).outerWidth()/2 - $(drag).parent().parent().offset().left)/$(drag).parent().parent().outerWidth();
   if(x < 0 ) x = 0;
   if(x > 1) x = 1;
   var rp = $(drag).parent().find(".rp");
   var lp = $(drag).parent().find(".lp");
   if($(drag).hasClass("lp") && x > $(rp).attr("data-pos") ){
   		$(rp).attr("data-pos",x);
   }
   if($(drag).hasClass("rp") && x < $(lp).attr("data-pos") ){
   		$(lp).attr("data-pos",x);
   }
   $(drag).attr("data-pos",x);
   updateView($(drag).parent().parent());
});
$(document).bind("mouseup",function(){
	drag = false;
});
function updateView(slider){
	var startVal = parseInt($(slider).find(".bar").data("start"));
	var endVal = parseInt($(slider).find(".bar").data("end"));
  if(startVal > endVal)
  	endVal = startVal;
	startVal = startVal || 0;
  endVal = endVal || 100;
  var values = [];
  for(var i = startVal; i <= endVal;i++)
  	values.push(i);
	var l  =$(slider).find(".lp").attr("data-pos");
	var r  =$(slider).find(".rp").attr("data-pos");
  var x = $(slider).outerWidth() * l;
  var w = (r - l)*$(slider).outerWidth();
  $(slider).find(".bar").css({left:x+"px",width:w+"px"});
  var index = Math.round(values.length*l);
  if(index >= values.length)
  	index = values.length-1;
  $(slider).find(".lp").html("<span>"+values[index]+"</span>");
  index = Math.round(values.length*r);
  if(index >= values.length)
  	index = values.length-1;
  $(slider).find(".rp").html("<span>"+values[index]+"</span>");
  }
  })();


	////////////

	/*
	 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
	*/
	(function(){var b,f;b=this.jQuery||window.jQuery;f=b(window);b.fn.stick_in_parent=function(d){var A,w,J,n,B,K,p,q,k,E,t;null==d&&(d={});t=d.sticky_class;B=d.inner_scrolling;E=d.recalc_every;k=d.parent;q=d.offset_top;p=d.spacer;w=d.bottoming;null==q&&(q=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=b(document);null==w&&(w=!0);J=function(a,d,n,C,F,u,r,G){var v,H,m,D,I,c,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));
	if(!g.length)throw"failed to find stick parent";v=m=!1;(h=null!=p?p&&a.closest(p):b("<div />"))&&h.css("position",a.css("position"));x=function(){var c,f,e;if(!G&&(I=A.height(),c=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),d=parseInt(g.css("padding-bottom"),10),n=g.offset().top+c+f,C=g.height(),m&&(v=m=!1,null==p&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-q,
	u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:a.outerWidth(!0),height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r}),e))return l()};x();if(u!==C)return D=void 0,c=q,z=E,l=function(){var b,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+c>C+n,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,c=q,null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),
	h.detach()),b={position:"",width:"",top:""},a.css(b).removeClass(t).trigger("sticky_kit:unstick")),B&&(b=f.height(),u+q>b&&!v&&(c-=l,c=Math.max(b-u,c),c=Math.min(q,c),m&&a.css({top:c+"px"})))):e>F&&(m=!0,b={position:"fixed",top:c},b.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(b).addClass(t),null==p&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+c>C+n),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),
	a.css({position:"absolute",bottom:d,top:"auto"}).trigger("sticky_kit:bottom")},y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);b(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",
	y),b(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,0)}};n=0;for(K=this.length;n<K;n++)d=this[n],J(b(d));return this}}).call(this);

$('#aside1').stick_in_parent();

$(".sorting__title-btn--category").click(function () {
      $(this).siblings(".sorting__filters--category").slideToggle("slow");
    });

$(".sorting__title-btn--designer").click(function () {
		  $(this).siblings(".sorting__filters--designer").slideToggle("slow");
		});

$(".sorting__title-btn--price").click(function () {
		 	$(this).siblings(".sorting__filters--price").slideToggle("slow");
		});
	// var elem = document.getElementById("aside1");
 //  var body = document.body;
 //  var footer = document.getElementsByTagName("footer")[0];
 //  var main = document.getElementById("main");
 //  var height = elem.offsetHeight
 // // main.style = "min-height:" + height + ";";
 //
 //  var parent = document.getElementsByClassName("sorting__info")[0];
 //
 //  var cls = document.getElementsByClassName("sorting__main-middle")[0];
 //
 //  window.onscroll = function(){
 //  elem.style = "width :" + parent.offsetWidth + "px;";
 //  console.log(height, main.offsetHeight);
 //    if (height < cls.offsetHeight + 50){
 //      if (window.pageYOffset + 50 > main.offsetTop){
 //        elem.classList.add("fixxxed")
 //      }else{
 //          elem.classList.remove("fixxxed")
 //      }
 //        if (window.pageYOffset + height + 100 >= footer.offsetTop){
 //          elem.classList.remove("fixxxed");
 //          elem.classList.add("absss")
 //        }else{
 //          elem.classList.remove("absss")
 //        }
 //    }
 //  }
