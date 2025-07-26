// Validation de base pour les champs requis
export const required = value => {
  if (!value || value.trim() === '') {
    return 'Ce champ est obligatoire';
  }
  return null;
};

// Validation des emails
export const email = value => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (value && !regex.test(value)) {
    return 'Adresse email invalide';
  }
  return null;
};

// Validation des numéros de téléphone (format français)
export const phone = value => {
  const regex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
  if (value && !regex.test(value)) {
    return 'Numéro de téléphone invalide';
  }
  return null;
};