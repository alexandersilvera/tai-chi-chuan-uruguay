export function slugify(str) {
  if (typeof str !== 'string') {
    console.error('slugify expected a string, received:', str);
    return ''; // Return an empty string or handle as appropriate
  }
  return str
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '') // elimina tildes
    .replace(/\s+/g, '-') // espacios a guiones
    .replace(/[^\w-]+/g, ''); // elimina caracteres especiales
}
