

// PRIMERA PRE ENTREGA JAVASCRIPT HECTOR CANCHICA



function solicitudcredito(){


    let cotizardenuevo = true
    
    while(cotizardenuevo){
    
    alert("bienvenido/a a Inversiones HKS donde encontraras, prestamos personales, envio de remesas, cambio de divisas y muchos servicios mas")
    
    let monto =parseInt(prompt("ingrese un monto entre 1000 y 10000 dolares"))
    const interes= 0.18
    let meses =parseInt(prompt("ingrese un valor entre 6 y 12 cuotas"))
    let montototal=((monto*interes)+monto)
    let cuotas= montototal/meses
    
    if(monto>= 1000 && monto <= 10000){
    alert("pronto sabremos si calificas a " + monto +" "+ "dolares")
    
        if(meses >= 6 && meses <= 12) {
        alert("muy bien a elegido pagar en " + meses +" " + "meses")
        
            for(let i=1 ; i<=meses ; i++)
            alert("el valor de su cuota en el mes " + " " + i +" " +"es" + " " + cuotas + " "+ "dolares")
    
    
            let nombre= prompt("ingresa tu nombre")
            if(nombre !== "" && nombre!==null && nombre !== Number){
            
              let apellido= prompt("ingresa tu apellido")
              if((apellido !== "" && apellido!==null && apellido!== Number)){
              
                alert("es un placer procesar tu solicitud señor/a " + nombre + " " + apellido)
    
                  let prestamo = confirm("estas de acuerdo con las condiciones de pago?")
                  if (prestamo == true){
                  alert ("excelente, estas a un paso de saber si calificas al credito")
    
    
                  let salario = parseInt(prompt("ingresa tu salario mensual"))
                      if(salario>=1000){
                        alert("felicitaciones, usted accede al credito")}
    
                        else if(salario>= 500 && salario <=1000){
                        alert("usted califica para un monto maximo de 5000")}
    
                        else if(salario < 500){
                          alert("lo siento, no calificas, ganas muy poco")
                        }
                      
                  }
                  else {
                    alert(" =( lo siento, estaremos aqui si deseas intentarlo nuevamente")
                  }
                }
                else{
                  alert("tus datos no son correctos")
                }
            }
            else{
                alert ("ingresa un nombre valido")
              }
    
        }
        else{
          alert("el valor de la cuota debe estar entre 3 y 6")
        }
        
    }
    
    else{
      alert("el monto debe estar entre 1000 y 10000")
    }
    
    cotizardenuevo = confirm("deseas volver a calcular?")
    
    }
    
    }
    solicitudcredito()