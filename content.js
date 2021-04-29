(function(){
	function searchWordWall(){
		chrome.runtime.onMessage.addListener(updateLocation);

		function updateLocation(request, sender, sendResponse){
			const msg = request;
			location = `https://wordwall.net/community/?query=${msg.searchText}`
		}
	};
	function alertNotSupported(){
		alert("this page is not supported yet:(");
	}

	if(location.href.includes("wordwall.net")){
		searchWordWall();
	}else{
		chrome.runtime.onMessage.addListener(alertNotSupported);
	};

})();