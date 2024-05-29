const http = new XMLHttpRequest()

Let result = document.querySelector("#result")

document. querySelector("#share").addEventListener
	("click", 0) => {
		findMyCoordinates()

	})
function findMyCoordinates(){

	if (navigator .geolocation) {

		navigator.geolocation.getCurrentPosition
		((position) => {
			console.log (position.coords.latitude, position.
			coords.longitude)
		})
	} else {
		alert ("Geolocation is not supported by youl
		browser")
	}
}