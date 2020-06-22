function getData(url) {
	return new Promise(function (resolve, reject) {
		var req = new XMLHttpRequest();
		req.open('GET', url);

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
getData('http://localhost:3002/Barrios')
	.then((response) => {
		var ctx = document.getElementById('myChartBarrios');
		var myChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: Object.keys(response[0]),
				datasets: [
					{
						label: 'Barrios mas populares',
						data: Object.values(response[0]),
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 179, 24, 0.2)',
							'rgba(153, 139, 74, 0.2)',
							'rgba(255, 3, 54, 0.2)',
							'rgba(153, 50, 19, 0.2)',
							'rgba(255, 90, 34, 0.2)',
							'rgba(153, 10, 54, 0.2)',
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)',
							'rgba(153, 139, 74, 1)',
							'rgba(255, 3, 54, 1)',
							'rgba(153, 50, 19, 1)',
							'rgba(255, 90, 34, 1)',
							'rgba(153, 10, 54, 1)',
						],
						borderWidth: 1,
					},
				],
			},
			options: {
				title: {
					display: true,
					text: 'Barrios de bogota donde podemos crecer',
				},
			},
		});
	})
	.catch(() => {
		console.log('algo salio mal');
	});

getData('http://localhost:3002/Redes')
	.then((response) => {
		var newArrayDataFB = [];
		var newArrayDataINS = [];
		var newDays = [];
		response.forEach((element) => {
			newArrayDataFB.push(element.FACEBOOK);
			newArrayDataINS.push(element.INSTAGRAM);
			newDays.push(element.DIA);
		});
		var ctx = document.getElementById('myChartRedes');
		var myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: newDays,
				datasets: [
					{
						label: 'INSTAGRAM',
						data: newArrayDataINS,
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)',
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)',
						],
						borderWidth: 2,
					},
					{
						label: 'FACEBOOK',
						data: newArrayDataFB,
						backgroundColor: [
							'rgba(47,115,206,0.42)',
							'rgba(47,115,206,0.42)',
							'rgba(47,115,206,0.42)',
							'rgba(47,115,206,0.42)',
							'rgba(47,115,206,0.42)',
							'rgba(47,115,206,0.42)',
						],
						borderColor: [
							'rgba(47,115,133,0.42)',
							'rgba(47,115,133,0.42)',
							'rgba(47,115,133,0.42)',
							'rgba(47,115,133,0.42)',
							'rgba(47,115,133,0.42)',
							'rgba(47,115,133,0.42)',
						],
						borderWidth: 2,
					},
				],
			},
			options: {
				title: {
					display: true,
					text: 'Alcance total de personas. Mes JUNIO',
				},
			},
		});
	})
	.catch(() => {
		console.log('algo salio mal');
	});

getData('http://localhost:3002/CrecimientoRedes')
	.then((response) => {
		var newArrayDataFB = [];
		var newArrayDataINS = [];
		var newMoths = [];
		response.forEach((element) => {
			console.log('element', element);
			newArrayDataFB.push(element.FACEBOOK);
			newArrayDataINS.push(element.INSTAGRAM);
			newMoths.push(element.MES);
		});
		var ctx = document.getElementById('myChartCrecimientoRedes');
		var myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: newMoths,
				datasets: [
					{
						label: 'INSTAGRAM',
						data: newArrayDataINS,
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)',
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)',
						],
						borderWidth: 2,
					},
					{
						label: 'FACEBOOK',
						data: newArrayDataFB,
						backgroundColor: [
							'rgba(47,115,206,0.42)',
							'rgba(47,115,206,0.42)',
							'rgba(47,115,206,0.42)',
							'rgba(47,115,206,0.42)',
							'rgba(47,115,206,0.42)',
							'rgba(47,115,206,0.42)',
						],
						borderColor: [
							'rgba(47,115,133,0.42)',
							'rgba(47,115,133,0.42)',
							'rgba(47,115,133,0.42)',
							'rgba(47,115,133,0.42)',
							'rgba(47,115,133,0.42)',
							'rgba(47,115,133,0.42)',
						],
						borderWidth: 2,
					},
				],
			},
			options: {
				title: {
					display: true,
					text: 'Crecimiento ANUAL redes sociales',
				},
			},
		});
	})
	.catch(() => {
		console.log('algo salio mal');
	});
