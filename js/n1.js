var doOnce = false;

function func()
{
	if (doOnce) return;
	var btn = document.getElementById("n1-btn");
	
	let solution = document.createElement('div');
	solution.innerHTML =
	`
	<div>
		<div class = "row">
		<input type = "number" id="input1" class = "validate" value = "1000">
		<label for = "input1">Количество ламп</label>

		<input type = "number" id="input2" class = "validate" value = "80">
		<label for = "input2">Количество отказавших ламп</label>
		</div>

		<p>P*(t) = <a id = "o1"></a></p>
		<p>q*(t) = <a id = "o2"></a></p>

		<p><button id = "n1.1-btn" onclick = "func2()" class = "btn waves-effect waves-ligth red darken-2">Рассчитать</button></p>
	</div>
	`;

	document.getElementById('n1').appendChild(solution);
	btn.classList = "btn waves-effect waves-ligth grey darken-3";
	doOnce = true;
}

function func2()
{
	let all = document.getElementById("input1").value;
	let broken = document.getElementById("input2").value;
	let valid = all - broken;

	document.getElementById('o1').innerHTML = valid/all;
	document.getElementById('o2').innerHTML = broken/all;
}
