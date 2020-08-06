setup=function(){

t=0
jQuery("#outteroverout").mouseover(function(){

jQuery("#outertextoverout").text("mouseover");
t=t +1;
jQuery("#outercounterover").text(t + "over");
});

z=0;
jQuery("#outteroverout").mouseout(function(){

jQuery("#outertextoverout").text("mouse out");
z= z+ 1;
jQuery("#outercounterout").text(z + "outs");
});
//inner diva
a=0;
jQuery("#inneroverout").mouseover(function(){

jQuery("#innertextoverout").text("mouse over");
a= a+ 1;
jQuery("#innercounterover").text(a + "overs");
});
 i=0;
jQuery("#inneroverout").mouseout(function(){

jQuery("#innertextoverout").text("mouse out");
i= i+ 1;
jQuery("#innercounterout").text(i + "outs");
});
//Enter and Leave Events
//outer div
d=0;
jQuery("#outterenterleave").mouseenter(function(){

jQuery("#outertextenterleave").text("mouse enter");
d=d+ 1;
jQuery("#outercounterenter").text(d + "enters");
});
n=0;
jQuery("#outterenterleave").mouseleave(function(){

jQuery("#outertextenterleave").text("mouse leaves");
n= n+ 1;
jQuery("#outercounterleave").text(n + "leaves");
});
//Inner div
c=0;
jQuery("#innerenterleave").mouseenter(function(){

jQuery("#innertextenterleave").text("mouse enter");
c=c+ 1;
jQuery("#innercounterenter").text(c + "enters");
});
y=0;
jQuery("#innerenterleave").mouseleave(function(){

jQuery("#innertextenterleave").text("mouse leave");
y=y + 1;
jQuery("#innercounterleave").text(y + "leaves");
});
}
jQuery(document).ready(setup)
