var doOnce = false;

function func()
{
	if (doOnce) return;
	var btn = document.getElementById("n6-btn");

	let tAverage = [2.5, 7.5, 12.5, 17.5, 22.5, 27.5, 32.5, 37.5, 42.5, 47.5, 52.5, 57.5, 62.5, 67.5, 72.5, 77.5];
	let ni = [1, 5, 8, 2, 5, 6, 4, 3, 0, 1, 0, 0, 3, 3, 3, 1]; 
	let N = 45;
	let sum = 0;

	for (i = 0; i < tAverage.length; i++)
	{
		sum = sum + tAverage[i]*ni[i];
	}

	let me = sum/N;

	document.getElementById('n6').innerHTML = me;
	btn.classList = "btn waves-effect waves-ligth grey darken-3";
	doOnce = true;
}