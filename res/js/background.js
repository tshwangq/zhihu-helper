﻿/*HKing 2016-03-10*/
const version = "1.0";
const url="d3d3LnpoaWh1LmNvbQ==";
chrome.browserAction.onClicked.addListener((tab) =>{
	chrome.tabs.getAllInWindow(null, fuckBat = tabs =>{
		for(var t of tabs){
			if (t.url.match(atob(url))) {
				fuckBat.bTab = true;
				chrome.tabs.update(t.id, {selected:true});
				break;
			}
		}
		!fuckBat.bTab && chrome.tabs.create({"url":`https://${atob(url)}`, "selected":true});
	});
});

var xhr = new XMLHttpRequest();
xhr.open ('GET','https://raw.githubusercontent.com/unclehking/zhihu-material-design-theme/master/version.json');
xhr.send();
xhr.onreadystatechange = function (){
    if ( xhr.readyState == 4 && xhr.status == 200 ){
		if(xhr.responseText == version){
			console.log(xhr.responseText);
		}
    }
};　
