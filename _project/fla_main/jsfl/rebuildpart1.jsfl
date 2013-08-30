
//fl.enableImmediateUpdates();
fl.outputPanel.clear();
fl.openDocument("file:///banner_rebuild.fla");
var doc=fl.getDocumentDOM();
var tl=doc.getTimeline();
var lib=doc.library;
var newSel=new Array();
var si,li,ci,pi,tx,r0,nr,cx,cy;

//movie properties
doc.width=958;
doc.height=222;
doc.frameRate=24;
doc.backgroundColor="#FFFFFF";

