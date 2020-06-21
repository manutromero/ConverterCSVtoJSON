function getData() {
	return new Promise(function (resolve, reject) {
		var req = new XMLHttpRequest();
		req.open('GET', 'http://localhost:3002/data');

		req.onload = function () {
			if (req.status == 200) {
				resolve(JSON.parse(req.response));
			} else {
				reject();
			}
		};
		req.send();
	});
}

getData()
	.then((r) => {
		console.log(r);
	})
	.catch(() => {
		console.log('algo salio mal');
	});
