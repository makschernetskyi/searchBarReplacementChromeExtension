(function(){
	const href = location.href;

	if(href.includes("wordwall.net")){
		search('https://wordwall.net/community/?query={request}');
	}else if(href.includes("allegro.pl")){
		search('https://allegro.pl/listing?string={request}&bmatch=e2101-d3859-c3683-fas-1-4-0429');
	}else if(href.includes("drive.google")){
		let userNumber = '';
		const pos = href.search(/\/u\/\d\//);
		if(pos!=-1){
			userNumber = 'u/'
			for(let i = pos+3, len = href.length; i<len && href[i] != '/'; i++){
					userNumber+=href[i];
			}
			userNumber+='/'
		}
		search(`https://drive.google.com/drive/${userNumber}search?q={request}`)
	}else if(href.includes("google")){
		search('https://www.google.com/search?q={request}')
	}else if(href.includes("yahoo")){
		search('https://search.yahoo.com/search?p={request}');
	}else if(href.includes("bing.com")){
		search('https://www.bing.com/search?q={request}');
	}else if(href.includes("youtube.com")){
		search('https://www.youtube.com/results?search_query={request}');
	}else if(href.includes("duckduckgo")){
		search('https://duckduckgo.com/?q={request}');
	}else if(href.includes("pornhub")){
		search('https://rt.pornhub.com/video/search?search={request}');
	}else if(href.includes("vk.com")){
		search('https://vk.com/search?c%5Bq%5D={request}');
	}else{
		chrome.runtime.onMessage.addListener(alertNotSupported);
	};


	function search(urlTemplate){
		chrome.runtime.onMessage.addListener(updateLocation);

		function updateLocation(request, sender, sendResponse){
			const msg = request;
			location = urlTemplate.replace("{request}", msg.searchText);
		}
	};

	function alertNotSupported(){
		alert("this page is not supported yet:(");
	}

})();