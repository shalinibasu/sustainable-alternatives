var usBtn = $(".us-btn");
var chinaBtn = $(".china-btn");
var germanyBtn = $(".germany-btn");
var egyptBtn = $(".egypt-btn");
var indiaBtn = $(".india-btn");


usBtn.on("click", toggleUSInfo);
chinaBtn.on("click", toggleChinaInfo);
germanyBtn.on("click", toggleGermanyInfo);
egyptBtn.on("click", toggleEgyptInfo);
indiaBtn.on("click", toggleIndiaInfo);

function toggleUSInfo() {
  var usBox = $(".us-info");
  usBox.toggle();
}

function toggleChinaInfo() {
  var chinaBox = $(".china-info");
  chinaBox.toggle();
}

function toggleGermanyInfo() {
  var germanyBox = $(".germany-info");
  germanyBox.toggle();
}

function toggleEgyptInfo() {
  var egyptBox = $(".egypt-info");
  egyptBox.toggle();
}

function toggleIndiaInfo() {
  var indiaBox = $(".india-info");
  indiaBox.toggle();
}
