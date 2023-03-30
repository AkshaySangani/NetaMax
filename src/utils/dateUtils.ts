import { format, isValid } from "date-fns";
import { es } from "date-fns/locale";

/**
 * Formats date to locale string
 * @param {string} date date to format. Ex: 'March 01, 2022 18:34:23'
 * @returns {string} formatted date string. Ex: 'martes, 1 de marzo de 2022'
 */
export const convertDateToLocaleString = (date: string): string => {
  const dateFormatted = date.replace(/-/g, "/");
  return new Date(dateFormatted).toLocaleDateString("es-MX", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

/**
 * Formats date to specific string
 * @param {Date} date date to format. Ex: 'March 01, 2022 18:34:23'
 * @param {defaultValue} defaultValue In case the date passed is invalid show this text instead
 * @returns {string} formatted date string. Ex: 'martes, 1 de marzo de 2022'
 */
export const formatOrderDate = (date: Date, defaultValue = ""): string => {
  if (isValid(date)) {
    const day = format(date, "eeee", { locale: es });
    const month = format(date, "MMMM", { locale: es });
    const rest = format(date, "d, yyyy", { locale: es });

    const dayCapitalized = day.charAt(0).toUpperCase() + day.slice(1);
    const monthCapitalized = month.charAt(0).toUpperCase() + month.slice(1);
    return `${dayCapitalized}, ${monthCapitalized} ${rest}`;
  }

  return `${defaultValue}`;
};

/**
 * Status Picker.
 * @param {string} formatDate date
 * @param {boolean} invoice flag
 * @type {Function}
 * @returns {string} Color Status + msj.
 */
export default function newformatDate(
  formatDate: string | number | Date,
  invoice?: boolean
): string {
  // Creamos array con los meses del año
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  // Creamos el objeto fecha instanciándolo con la clase Date
  const fecha = new Date(formatDate);

  if (!invoice) {
    // Creamos array con los días de la semana
    const dias_semana = ["Domingo", "Lunes", "martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const result =
      dias_semana[fecha.getDay()] +
      ", " +
      fecha.getDate() +
      " de " +
      meses[fecha.getMonth()] +
      " de " +
      fecha.getUTCFullYear();

    // Construimos el formato de salida
    return result;
  } else {
    // Creamos el objeto fecha instanciándolo con la clase Date
    const fecha = new Date(formatDate);
    // Construimos el formato de salida
    const result =
      fecha.getDate() + " de " + meses[fecha.getMonth()] + " de " + fecha.getUTCFullYear();

    return result;
  }
}
