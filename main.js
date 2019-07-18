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
  console.log(usBox.style);
  // var displaySetting = usBox.style.display;
  // if (displaySetting == "block") {
  //   usBox.style.display == "none";
  // } else {
  //   usBox.style.display = "block";
  // }
}

function toggleChinaInfo() {
  var chinaBox = $(".china-info");
  var displaySetting = chinaBox.style.display;
  if (displaySetting == "block") {
    usBox.style.display == "none";
  } else {
    usBox.style.display = "block";
  }
}

function toggleGermanyInfo() {
  var germanyBox = $(".germany-info");
  var displaySetting = germanyBox.style.display;
  if (displaySetting == "block") {
    usBox.style.display == "none";
  } else {
    usBox.style.display = "block";
  }
}

function toggleEgyptInfo() {
  var egyptBox = $(".egypt-info");
  var displaySetting = egyptBox.style.display;
  if (displaySetting == "block") {
    usBox.style.display == "none";
  } else {
    usBox.style.display = "block";
  }
}

function toggleIndiaInfo() {
  var indiaBox = $(".india-info");
  var displaySetting = indiaBox.style.display;
  if (displaySetting == "block") {
    usBox.style.display == "none";
  } else {
    usBox.style.display = "block";
  }
}
