function calcular()
{
	var vacation = document.getElementById("vacaciones").value;
	var weekday = parseInt(document.getElementById("dia").value);
    

	var isVacation = true;
	var isWeekday = false;

	var salida = document.getElementById("salida");

	if(vacation == "2")
	{
		isVacation = false;
	}

	if(weekday < 2)
	{
		isWeekday = true;
	}

	if(isVacation)
	{
		salida.innerHTML = "no";
	}else{
		if(isWeekday)
		{
			salida.innerHTML = "si";
		}else{
			salida.innerHTML = "no";
		}
	}
}