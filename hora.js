function saludar(hora) {

    if (hora > 6 && hora <= 12 ) {
    return 'Buenos Días';
    }else if (hora > 12 && hora < 18) {
      return 'Buenas Tardes';
    } else if( (hora >= 18 && hora <=24) || (hora > 0 && hora > 6 ) ) {
    return 'Buenas Noches';
    }else {
      return 'Opción inválida';
    }
}
