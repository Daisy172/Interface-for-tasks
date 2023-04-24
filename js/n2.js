var doOnce = false;

function func()
{
	if (doOnce) return;
	var btn = document.getElementById("n2-btn");

	let solution = document.createElement('div');
	solution.innerHTML =
	`
	<div>
		<div class = "row">
		<input type = "number" id="input1" class = "validate" value = "1000">
		<label for = "input1">Количество ламп</label>

		<input type = "number" id="input2" class = "validate" value = "80">
		<label for = "input2">Количество отказавших ламп в период от 0ч до 3000ч</label>

		<input type = "number" id="input3" class = "validate" value = "50">
		<label for = "input3">Количество отказавших ламп в период от 3000ч до 4000ч</label>
		</div>

		<p>f*(t) = <a id = "o1"></a></p>
		<p>&#955;*(t) = <a id = "o2"></a></p>

		<p><button id = "n2.1-btn" onclick = "func2()" class = "btn waves-effect waves-ligth red darken-2">Рассчитать</button></p>
	</div>
	`;

	document.getElementById('n2').appendChild(solution);
	btn.classList = "btn waves-effect waves-ligth grey darken-3";
	doOnce = true;
}

function func2()
{
	let all = document.getElementById("input1").value;
	let broken1 = document.getElementById("input2").value;
	let broken2 = document.getElementById("input3").value;
	let valid1 = all - broken1;
	let deltat = 1000;

	document.getElementById('o1').innerHTML = broken2/(all*deltat);
	document.getElementById('o2').innerHTML = broken2/(valid1*deltat);
}
