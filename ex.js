let persons = [
  {
    PERSON_ID: 1,
    FIRST_NAME: "Alberts",
    FAMILY_NAME: "SMITH",
    ADDRESS: "BROADWAY 35",
    CITY: "BOSTON",
    COUNTRY: "US",
    AREA_CODE: "MA 02215",
    EMAIL: "",
    BANK_ACCOUNT: 123456789,
    BIRTH_DATE: "1983-12-04T00:00:00",
    GENDER: "M",
    DISCOUNT: 5.0,
    GUIDE: "N",
    STAFF: "Y",
  },
  {
    PERSON_ID: 5,
    FIRST_NAME: "Daniel",
    FAMILY_NAME: "BROWNS",
    ADDRESS: "KINGSLEY RD 49",
    CITY: "YORKSS",
    COUNTRY: "UK",
    AREA_CODE: "Y02 2AA",
    EMAIL: "",
    BANK_ACCOUNT: 288234001,
    BIRTH_DATE: "1985-06-21T00:00:00",
    GENDER: "M",
    DISCOUNT: 1.0,
    GUIDE: "Y",
    STAFF: "N",
  },
  {
    PERSON_ID: 6,
    FIRST_NAME: "Gerald",
    FAMILY_NAME: "DAVIES",
    ADDRESS: "THE PANTINES 223II",
    CITY: "WALTON-ON-SEA",
    COUNTRY: "UK",
    AREA_CODE: "WA7 6DP",
    EMAIL: "",
    BANK_ACCOUNT: 456666541,
    BIRTH_DATE: "1990-11-06T00:00:00",
    GENDER: "M",
    DISCOUNT: 5.0,
    GUIDE: "Y",
    STAFF: "N",
  },
  {
    PERSON_ID: 10,
    FIRST_NAME: "Jean-michel",
    FAMILY_NAME: "JOHNSON",
    ADDRESS: "AVENUE LOUISE 23",
    CITY: "BRUSSELS",
    COUNTRY: "BE",
    AREA_CODE: "B - 1050",
    EMAIL: "",
    BANK_ACCOUNT: "",
    BIRTH_DATE: "2003-04-26T00:00:00",
    GENDER: "M",
    DISCOUNT: 0.0,
    GUIDE: "N",
    STAFF: "Y",
  },
  {
    PERSON_ID: 14,
    FIRST_NAME: "Winston Lionel",
    FAMILY_NAME: "JONES",
    ADDRESS: "CLAPHAM SQ 130 F",
    CITY: "LONDON",
    COUNTRY: "UK",
    AREA_CODE: "SE17 9LJ",
    EMAIL: "",
    BANK_ACCOUNT: "",
    BIRTH_DATE: "1988-05-24T00:00:00",
    GENDER: "M",
    DISCOUNT: 2.0,
    GUIDE: "N",
    STAFF: "N",
  },
  {
    PERSON_ID: 22,
    FIRST_NAME: "Damian",
    FAMILY_NAME: "JONES",
    ADDRESS: "HOLLAND PARK 23",
    CITY: "LONDON",
    COUNTRY: "UK",
    AREA_CODE: "N10 7BJ",
    EMAIL: "",
    BANK_ACCOUNT: "",
    BIRTH_DATE: "1962-10-17T00:00:00",
    GENDER: "M",
    DISCOUNT: 5.0,
    GUIDE: "N",
    STAFF: "N",
  },
  {
    PERSON_ID: 23,
    FIRST_NAME: "Theophile",
    FAMILY_NAME: "GREEN",
    ADDRESS: "AVENUE LOUISE 36",
    CITY: "BRUSSELS",
    COUNTRY: "BE",
    AREA_CODE: "B - 1050",
    EMAIL: "",
    BANK_ACCOUNT: "",
    BIRTH_DATE: "1998-10-30T00:00:00",
    GENDER: "M",
    DISCOUNT: 0.0,
    GUIDE: "N",
    STAFF: "N",
  },
  {
    PERSON_ID: 31,
    FIRST_NAME: "Philip",
    FAMILY_NAME: "BROWNE",
    ADDRESS: "SUNSET BLD 16",
    CITY: "HOLLYWOOD",
    COUNTRY: "US",
    AREA_CODE: "CA 90048",
    EMAIL: "",
    BANK_ACCOUNT: "",
    BIRTH_DATE: "1980-02-10T00:00:00",
    GENDER: "M",
    DISCOUNT: 0.0,
    GUIDE: "N",
    STAFF: "N",
  },
  {
    PERSON_ID: 35,
    FIRST_NAME: "Hans",
    FAMILY_NAME: "WILLIAMS",
    ADDRESS: "MONDSTRASSE 103",
    CITY: "BERLIN",
    COUNTRY: "GE",
    AREA_CODE: 10437,
    EMAIL: "",
    BANK_ACCOUNT: "",
    BIRTH_DATE: "1983-10-19T00:00:00",
    GENDER: "M",
    DISCOUNT: 0.0,
    GUIDE: "N",
    STAFF: "N",
  },
  {
    PERSON_ID: 137,
    FIRST_NAME: "Hans",
    FAMILY_NAME: "VAN DER MEER",
    ADDRESS: "KEIZERSGRACHT 802",
    CITY: "AMSTERDAM",
    COUNTRY: "NL",
    AREA_CODE: "1435 PP",
    EMAIL: "",
    BANK_ACCOUNT: 445678901,
    BIRTH_DATE: "1996-05-11T00:00:00",
    GENDER: "M",
    DISCOUNT: 10.0,
    GUIDE: "Y",
    STAFF: "N",
  },
  {
    PERSON_ID: 200,
    FIRST_NAME: "Adrian",
    FAMILY_NAME: "ALBU",
    ADDRESS: "BARONIESTRAAT",
    CITY: "ALMERE-BUITEN",
    COUNTRY: "NL",
    AREA_CODE: "1333 TH",
    EMAIL: "whiteadi@yahoo.com",
    BANK_ACCOUNT: 123456789,
    BIRTH_DATE: "2003-04-26T00:00:00",
    GENDER: "M",
    DISCOUNT: 0.0,
    GUIDE: "N",
    STAFF: "N",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const myGrid = document.querySelector("#myGrid");
  myGrid.personsInput = persons;
});
