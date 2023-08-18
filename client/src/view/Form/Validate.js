 const Validate = (input) =>  {
    let errors = {};
  
    if (!input.name) {
      errors.name = "Se requiere un Nombre";
    }
  
    if (input.hp < 100 ) {
      errors.hp = "La Vida no puede ser menor de 100";
    }
  
    if (input.attack < 50 || input.attack > 500) {
      errors.attack = "El Ataque no puede ser menor a 50 ni mayor a 500";
    }
  
    if (input.defense < 50 || input.defense > 500) {
      errors.defense = "La Defensa no puede ser menor de 50 ni mayor a 500";
    }
  
    if (input.speed < 50 || input.speed > 500) {
      errors.speed = "La Velocidad no puede ser menor de 50 ni mayor a 500";
    }
  
    if (input.height < 20 || input.height > 500) {
      errors.height = "La Altura minima es 20 y maxima 500";
    }
  
    if (input.weight < 20 || input.weight > 500) {
      errors.weight = "El Peso minimo es 20 y maxima 500";
    }
  
    return errors;
  }
   
  export { Validate }