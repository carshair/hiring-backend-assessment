import { VINInfo } from "./vin-into";
import companyLookup from "./data/companies.json";
const yearCodes = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "R",
  "S",
  "T",
  "V",
  "W",
  "X",
  "Y",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
const MAKE_FROM = 0, MAKE_TO = 3,YEAR_INDEX = 9, MODEL_FROM =3, MODEL_TO = 8;

const getMake = (vin: string): string => {
  const companyCode  = vin.substring(MAKE_FROM, MAKE_TO);
  const company = companyLookup.find(c => c.code === companyCode.toUpperCase());
  if(!company) {
    throw new Error("Invalid VIN. Company not found.");
  }
  return company.name;
};

const getYear = (vin: string): number | undefined => {
  const code = vin.charAt(YEAR_INDEX);

  const now = new Date();
  const currentYear = now.getFullYear();

  const yearOffset = yearCodes.indexOf(code);

  if (yearOffset === -1) {
    return undefined;
  }

  const possibleYears = [
    2010 + yearOffset,
    1980 + yearOffset,
  ];

  if (possibleYears[1] > currentYear) {
    return possibleYears[1];
  }
  if (possibleYears[0] > currentYear) {
    return possibleYears[1];
  }
};

const getModel = (vin: string): string =>{
  return vin.substring(MODEL_FROM, MODEL_TO);
};

/**
 * Validate a VIN
 * @param {string} vin
 * @returns {boolean} true if is valid
 */
export const validate = (vin: string): boolean => vin.length === 17;
/**
 *
 * @param {string} vin
 * @returns {VINInfo} - The decoded value of the VIN
 */
export const decode  = (vin: string): VINInfo => {
  return {
    make: getMake(vin),
    year: getYear(vin),
    model: getModel(vin)
  };
};
