// request permission on page load


if (Notification.permission !== "granted")
	Notification.requestPermission();

// var intervalID = window.setInterval(checkState, 10000);

checkState();

function checkState() {

  var text = document.getElementsByClassName('views-field-state')[1].innerText;
  
  if (text == 'Waiting') {
    notifyMe();
  }
  else if (text == 'Online Request') {
    setTimeout(function() {
      location.reload();
    }, 5000);
  }

}

function notifyMe() {
  if (!Notification) {
    alert("Desktop notifications not available in your browser. Try Chrome."); 
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
  	//var imgURL = chrome.extension.getURL("bus_128.png");
    imgURL = "https://78462f86-a-05545e67-s-sites.googlegroups.com/a/publicservicevehicles.com/www/brown/bus/Brown_University_Shuttle_207_2015.JPG?attachauth=ANoY7col0rhSl3bq1g9PhplBtpaIy1tsPipxg5B0kcKWkVatITXH6ovCUVU6zlhc9zjE-fc9vOXN3cXwnR-ugQ1v-h9HYVCTrqDu5rTW76TscRuvnPCaxi7H1EI88ZCphcG9L4jOJ-l39gX8aWtWr3zYqTabg-j0ZW18wKtGmAoTY_cZAA2lZIhF09JrWT5x5bWdvDO4fIXCrk2sHvQrhuJrxuBB80QsCPQD5LvRvemNFpd44cfR7Caz1wem5vM7yXZ_-IL__Ge_ngeS_ogBqqSri-hObwe2nA%3D%3D&attredirects=0";
    var notification = new Notification('Brown onCall', {
      icon: imgURL,
      body: "Hey, your shuttle is comming! :)",
    });

    // notification.onclick = function () {
    //   window.open("http://www.google.com");      
    // };
  }
}