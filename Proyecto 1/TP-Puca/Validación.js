
	function valida_envia(parameter){
    //valido el nombre
    if (document.fvalida.nombre.value.length==0){
            alert("Tiene que escribir su nombre")
            document.fvalida.nombre.focus()
            return 0;
    }
    
    //valido la edad. tiene que ser entero mayor que 18
       {
    edad = document.fvalida.edad.value
    edad = validarEntero(edad)
    document.fvalida.edad.value=edad
    if (edad==""){
            alert("Tiene que introducir un número entero en su edad.")
            document.fvalida.edad.focus()
            return 0;
    }else{
            if (edad<18){
                    alert("Debe ser mayor de 18 años.")
                    document.fvalida.edad.focus()
                    return 0;
            }
    }
    
    //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit(_text);
	}
	//La API utilizada es SendGrid API Documentation
	const options = {
    method: 'patch',
    url: 'https://rapidprod-sendgrid-v1.p.rapidapi.com/alerts/%7Balert_id%7D',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '87f9c27f07msh9eafce871445fd9p146feajsn6de2b56aeaae',
      'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com'
    },
    data: '{"type":"edad","email_to":"example@test.com","frequency":"daily"}'
 	 };

  axios.request(options).then(function(response) {
      console.log(response.data);
  	}) .catch (function (error){
    });console.error(error).any  
      document.requestStorageAccess(ename)}
