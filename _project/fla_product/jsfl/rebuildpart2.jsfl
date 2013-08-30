
var doc=fl.getDocumentDOM();
var tl=doc.getTimeline();
var lib=doc.library;
var newSel=new Array();
var si,li,ci,pi,tx,r0,nr,cx,cy;

//create library
//symbol_2.swf saved. character ID:2
si=lib.findItemIndex("symbol_2.swf");
if (si=='') {si=lib.findItemIndex("symbol_2");}
lib.items[si].name="Symbol_2";
lib.items[si].symbolType="movie clip";
//create Symbol_3. character ID:3
lib.addNewItem("movie clip","Symbol_3");
lib.editItem("Symbol_3");
tl=doc.getTimeline();
tl.layers[0].name="L1";
lib.addItemToDocument({x:0, y:0},"Symbol_2");
newSel[0]=tl.layers[0].frames[0].elements[0];
doc.selectNone();
doc.selection=newSel;
doc.moveSelectionBy({x:478, y:79});
doc.selectNone();
doc.exitEditMode();
//symbol_5.swf saved. character ID:5
si=lib.findItemIndex("symbol_5.swf");
if (si=='') {si=lib.findItemIndex("symbol_5");}
lib.items[si].name="Symbol_5";
lib.items[si].symbolType="movie clip";
//create Symbol_6. character ID:6
lib.addNewItem("movie clip","Symbol_6");
lib.editItem("Symbol_6");
tl=doc.getTimeline();
tl.layers[0].name="L1";
lib.addItemToDocument({x:0, y:0},"Symbol_5");
newSel[0]=tl.layers[0].frames[0].elements[0];
doc.selectNone();
doc.selection=newSel;
doc.moveSelectionBy({x:478, y:79});
doc.selectNone();
doc.exitEditMode();
//symbol_8.swf saved. character ID:8
si=lib.findItemIndex("symbol_8.swf");
if (si=='') {si=lib.findItemIndex("symbol_8");}
lib.items[si].name="Symbol_8";
lib.items[si].symbolType="movie clip";
//create Symbol_9. character ID:9
lib.addNewItem("movie clip","Symbol_9");
lib.editItem("Symbol_9");
tl=doc.getTimeline();
tl.layers[0].name="L1";
lib.addItemToDocument({x:0, y:0},"Symbol_8");
newSel[0]=tl.layers[0].frames[0].elements[0];
doc.selectNone();
doc.selection=newSel;
doc.moveSelectionBy({x:478, y:79});
doc.selectNone();
doc.exitEditMode();
//symbol_11.swf saved. character ID:11
si=lib.findItemIndex("symbol_11.swf");
if (si=='') {si=lib.findItemIndex("symbol_11");}
lib.items[si].name="Symbol_11";
lib.items[si].symbolType="movie clip";
//create Symbol_12. character ID:12
lib.addNewItem("movie clip","Symbol_12");
lib.editItem("Symbol_12");
tl=doc.getTimeline();
tl.layers[0].name="L1";
lib.addItemToDocument({x:0, y:0},"Symbol_11");
newSel[0]=tl.layers[0].frames[0].elements[0];
doc.selectNone();
doc.selection=newSel;
doc.moveSelectionBy({x:479, y:80.5});
doc.selectNone();
doc.exitEditMode();

