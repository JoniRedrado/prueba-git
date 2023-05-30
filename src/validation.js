export const validation = (futbolista) => {
  let errors = {};
  if (futbolista.name.length > 30)
    errors.name = "Nombre u Pais demasiado largo";
  if (futbolista.pais.length > 30)
    errors.pais = "Nombre u Pais demasiado largo";
  if (futbolista.numeroCamiseta < 1 && futbolista.numeroCamiseta !== 0)
    errors.numeroCamiseta = "El numero de camiseta tiene que ser mayor a 0";
  return errors;
};
