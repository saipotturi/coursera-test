//EVENT HANDLING
document.addEventListener("DOMContentLoaded",
	function (event) {
		$ajaxUtils.sendGetRequest("Data/Thunderbolt.txt", 
			function(request)
			{
				document.querySelector("#Thunderbolt")
					.innerHTML = request;
			}
		);

	}
);