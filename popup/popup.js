(function (){
	const searchBar = document.getElementById('searchBar');
	const searchBtn = document.getElementById('searchButton');

	state = {
		searchText: ""
	}

	searchBar.oninput = updateStateSearchText;

	searchBtn.onclick = queryTabsAndSendMessage;

	document.onkeyup = event =>{
		const enterKeyCode = 13;
		if(event.keyCode === enterKeyCode){
			queryTabsAndSendMessage();
		}
	}

	function updateStateSearchText(){
		const text = searchBar.value;
		state.searchText = encodeURI(text);

	}

	function queryTabsAndSendMessage(){
		params ={
			active: true,
			currentWindow: true
		}

		chrome.tabs.query(params, sendMessage)
	}

	function sendMessage(tabs){
		console.log(state.searchText);
		const activeTab = tabs[0];
		chrome.tabs.sendMessage(activeTab.id, state);
	}
})();


