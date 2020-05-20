const BASE_URL = 'https://mobile.ismet.kz/bpmn/api/v1/';
const BASE_URL2 = 'https://mobile.ismet.kz/bpmn/api/v2/';
const BASE_URL3 = 'https://integration.ismet.kz/bpmn/api/v2/private/';
const BASE_URL4 = 'https://integration.i-smet.kz/bpmn/api/v1/private/';
const BASE_URL5 = 'https://integration.ismet.kz/bpmn/api/v1/private/';

const CATALOG_URL = `${BASE_URL}public/catalog`;
const DEFAULT_URL = `https://www.ismet.kz/ru/catalog/`;

export default {
  AUTH_URL:
    'https://idp.ismet.kz/auth/realms/ocp/protocol/openid-connect/token',
  CATALOG_URL,
  BASE_URL,
  USER_INVITE: `${BASE_URL3}/company/`,
  POST_SERVICES_URL: `${BASE_URL}mobile/catalogList`,
  GET_COMPANIES_URL: `${BASE_URL2}public/search/company`,
  GET_SERVICES: `https://www.ismet.kz/bin/ocp/getServiceList?path=/content/ocp/ru/services`,
  GET_SERVICE: `${CATALOG_URL}`,
  GET_COMPANIES_LIST: `${BASE_URL2}public/search/all`,
  GET_USER_URL: `${BASE_URL}mobile/user`,
  GET_EASYPAY_ORDER_URL_URL:
    'https://integration.ismet.kz/bpmn/api/v1/mobile/easypay',
  REFERENCE_STATE_REGIONS: `${BASE_URL}public/reference/state`,
  REFERENCE_STATE_DISTRICT: `${BASE_URL}public/reference/state_district`,
  REFERENCE_STATE_PALOMA_CITIES: `${BASE_URL}/public/reference/paloma_city`,
  REFERENCE_KT_CALLBACK_SERVICE_REGIONS: `${BASE_URL}/public/reference/kt_cb_server`,
  REFERENCE_ACTIVITY: `https://www.ismet.kz/bin/ocp/tagfilter`,
  REFERENCE_TOWN_STATE: `${BASE_URL}public/reference/town_state`,
  REFERENCE_STREET: `${BASE_URL}public/reference/street`,
  SEND_CODE: `${BASE_URL}public/accountRecover/sendCode`,
  SIGN_UP: `${BASE_URL}public/user/registration`,
  CREATE_CHANNEL: 'https://integration.ismet.kz/chat/api/channel',
  GET_FULL_COMPANY_METADATA_URL: 'https://integration.i-smet.kz/bpmn/api/v1/public/company/',
  //GET_COMPANY_EMPLOYEE_URL: `${BASE_URL6}system/profile/yusupovaleila@gmail.com/companyWOBalance/`,
  GET_DEMO_COMPANY_METADATA_URL: `https://integration.i-smet.kz/bpmn/api/v1/public/company/`,
  //GET_REQUISITES_METADATA_URL:`${BASE_URL7}company/`,
  ORDER_URL: `${BASE_URL3}orders`,
  QUERY_ORDER_URL: `${BASE_URL}mobile/user`,
  ORDER_STATE_URL: `${BASE_URL}mobile/sAPI/state`,
  ORDER_KT_CALLBACK_SERVICE_URL: `${BASE_URL}public/kzCallBack`,
  UPDATE_USER_URL: `${BASE_URL}mobile/user`,
  CHECK_PASSWORD_URL: `${BASE_URL}someurl`,
  CREATE_PERSONAL_ACCOUNT: `${BASE_URL5}kt/account`,
  UPDATE_PASSWORD_URL: `${BASE_URL}mobile/user/`,
  RESET_PASSWORD_URL: `${BASE_URL}public/user/`,
  REFILL: `${BASE_URL}mobile/kt/account/refill`,
  GET_LIFE_CASE: `${DEFAULT_URL}cases/`,
  NOTIFCATION_TOKEN: `${BASE_URL}mobile/notifications/registrationToken`,
  CONTENT_ENCODED: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
  CONTENT_JSON: {
    'Content-Type': 'application/json',
  },
  CLIENT: {
    clientId: 'bpms_mobile',
    clientSecret: '326a59c8-9a21-4871-a0f0-907a698a88a3',
    // clientId: 'aem_system',
    // clientSecret: '0b9acb8f-8a12-4c6a-ad17-4c283215fc23'
  },
  CREATE_COMPANY_URL: 'https://www.ismet.kz/ru/cabinet/companies.html',
  AGREEMENT_URL: 'https://ismet.kz/ru/agreement',
  FAQ_URL: 'https://www.ismet.kz/ru/help',
  TARIFFS_URL: `${BASE_URL}public/odpTariffList/`,
  PAYMENT_URL: 'https://test.i-smet.kz/ru/payment_terms.html',
  ADVERTISEMENT_URL: `${CATALOG_URL}?serviceCategoryId=5`,
  LIFE_CASES: `${DEFAULT_URL}cases.children.5.json`,
  VERIFICATE_EMAIL: `${BASE_URL}public/isUserExist/`,
  FAVORITE: `${BASE_URL}mobile/favorites`,
  DOC_YEAR_LIST: `${BASE_URL}mobile/docFlow/yearMobile`,
  DOC_COMPANY_LIST: `${BASE_URL}mobile/docFlow/fileMobile`,
  DOC_YEAR_REF: `${BASE_URL}public/reference/doc_year`,
  DOC_PERIOD_REF: `${BASE_URL}public/reference/doc_period`,
  DOC_ORDER: `${BASE_URL}private/orderDoc`,
  MY_COMPANY_DETAIL: `${BASE_URL2}private/user/myCompanyDetail`,
  DETAIL_INTERNET: `${BASE_URL2}private/detalization/internet`,
  DETAIL_CALL: `${BASE_URL2}private/detalization/call`,
  DEVICE_DETAIL: `${BASE_URL}private/details`,
  STATISTICS_ACCOUNT: `${BASE_URL2}private/statistics/account`,
  DATE_LIST_PHONE: `${BASE_URL2}private/paymentGate/reportDateList`,
  BALANCE_LIST_MONTH: `${BASE_URL2}private/paymentGate/paymentAllList`,
};
