var doOnce = false;

function func()
{
	if (doOnce) return;
	var btn = document.getElementById("n4-btn");

	let solution = document.createElement('div');
	solution.innerHTML =
	`
	<div>
		<div class="valign-wrapper">
		<input type = "number" id="input1" style="margin-left: 3%" class = "validate" value = "280">
		<label for = "input1">t1</label>

		<input type = "number" id="input2" style="margin-left: 3%" class = "validate" value = "350">
		<label for = "input2">t2</label>

		<input type = "number" id="input3" style="margin-left: 3%" class = "validate" value = "400">
		<label for = "input3">t3</label>

		<input type = "number" id="input4" style="margin-left: 3%" class = "validate" value = "320">
		<label for = "input4">t4</label>

		<input type = "number" id="input5" style="margin-left: 3%" class = "validate" value = "380">
		<label for = "input5">t5</label>

		<input type = "number" id="input6" style="margin-left: 3%" class = "validate" value = "330">
		<label for = "input6">t6</label>
		</div>

		<p>mt = <a id = "o1"></a></p>

		<p><button id = "n4.1-btn" onclick = "func2()" class = "btn waves-effect waves-ligth red darken-2">Рассчитать</button></p>
	</div>
	`;

	document.getElementById('n4').appendChild(solution);
	btn.classList = "btn waves-effect waves-ligth grey darken-3";
	doOnce = true;
}

function func2()
{
	let t1 = Number(document.getElementById("input1").value);
	let t2 = Number(document.getElementById("input2").value);
	let t3 = Number(document.getElementById("input3").value);
	let t4 = Number(document.getElementById("input4").value);
	let t5 = Number(document.getElementById("input5").value);
	let t6 = Number(document.getElementById("input6").value);

	document.getElementById('o1').innerHTML = (t1+t2+t3+t4+t5+t6)/6;
}
