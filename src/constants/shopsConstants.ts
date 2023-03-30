export enum ShopsLoginWizardSteps {
  PHONE_NUMBER = 1,
  VERIFICATION_CODE = 2,
  VERIFICATION_SUCCESS = 3,
}

export const LOGIN_TOKEN_LENGTH = 6;

export const COUNTDOWN_TIMER_SECONDS = 45;

export const ERROR_MESSAGE_INVALID_CODE = "Código inválido";
export const ERROR_MESSAGE_NO_STORE =
  "Tú número no está vinculado a ninguna tienda Neta, ponte en contacto con nuestro equipo de ventas";
export const ERROR_MESSAGE_INVALID_NUMBER =
  "El número {XXXXXXXXXX} no está vinculado a ninguna tienda Neta, ponte en contacto con nuestro equipo de ventas";

/* Help */
export const WHATSAPP_HELP = "https://wa.me/525545439866?text=Hablar%20con%20alguien";

/* Info */
export const SHARE_URL =
  "https://wa.me/?text=¡Hola!%20%C2%BFYa%20viste%20las%20promos%20de%20hoy%20en%20neta%3F%20Ingresa%20a%20mi%20liga:%20https://neta.mx/?";

/* USER MENU */
export const USER_SHOPS_TITLE = "Usuario";
export const MY_INFO_URL = "/info";
export const MY_CLIENTS_URL = "/clients";
export const MY_ORDERS_URL = "/invoices";
export const HELP_URL = "/ayuda";
export const LOGOUT = "Cerrar sesión";
export const TO_BACK = "Atrás";

export const SHOP_URLS = [
  {
    pathName: "/inicio-shop",
    name: "Inicio",
    order: 1,
  },
  {
    pathName: "/invoices",
    name: "Ventas",
    order: 2,
  },
  {
    pathName: "/clients",
    name: "Clientes",
    order: 3,
  },
  {
    pathName: "/info",
    name: "Cuenta",
    order: 4,
  },
];

/* TRACKING */
export const BEETRACK_URL = "https://app.beetrack.com/track/";

/* CLIENT */
export const WHATSAPP_CLIENT = "https://wa.me/5491138612713?text=Hablar%20con%20alguien";

/* MODAL INVOICE LIST */
export const columns = [
  { field: "Quantity", header: "Cant.", id: "1" },
  { field: "name", header: "Producto", id: "2" },
  { field: "UnitPriceInclTax", header: "Precio", id: "3" },
  { field: "PriceInclTax", header: "Total", id: "4" },
];
