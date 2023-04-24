var doOnce = false;

function func()
{
	if (doOnce) return;
	var btn = document.getElementById("n3-btn");

	let solution = document.createElement('div');
	solution.innerHTML =
	`
	<div>
		<div class = "row">
		<input type = "number" id="input1" class = "validate" value = "400">
		<label for = "input1">Количество изделий</label>

		<input type = "number" id="input2" class = "validate" value = "200">
		<label for = "input2">Количество отказавших изделий в период от 0ч до 3000ч</label>

		<input type = "number" id="input3" class = "validate" value = "100">
		<label for = "input3">Количество отказавших изделий в период от 3000ч до 3100ч</label>
		</div>

		<p>P*(3000) = <a id = "o1"></a></p>
		<p>P*(3100) = <a id = "o2"></a></p>
		<p>f*(3000) = <a id = "o3"></a></p>
		<p>&#955;*(3000) = <a id = "o4"></a></p>

		<p><button id = "n3.1-btn" onclick = "func2()" class = "btn waves-effect waves-ligth red darken-2">Рассчитать</button></p>
	</div>
	`;

	document.getElementById('n3').appendChild(solution);
	btn.classList = "btn waves-effect waves-ligth grey darken-3";
	doOnce = true;
}

function func2()
{
	let all = document.getElementById("input1").value;
	let broken1 = document.getElementById("input2").value;
	let broken2 = document.getElementById("input3").value;
	let valid1 = all - broken1;
	let valid2 = valid1 - broken2;
	let deltat = 100;

	document.getElementById('o1').innerHTML = valid1/all;
	document.getElementById('o2').innerHTML = valid2/all;
	document.getElementById('o3').innerHTML = broken2/(all*deltat);
	document.getElementById('o4').innerHTML = broken2/(valid1*deltat);
}
