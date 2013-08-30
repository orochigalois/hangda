
//fl.enableImmediateUpdates();
fl.outputPanel.clear();
fl.openDocument("file:///probanner_rebuild.fla");
var doc=fl.getDocumentDOM();
var tl=doc.getTimeline();
var lib=doc.library;
var newSel=new Array();
var si,li,ci,pi,tx,r0,nr,cx,cy;

//movie properties
doc.width=956;
doc.height=158;
doc.frameRate=24;
doc.backgroundColor="#FFFFFF";

