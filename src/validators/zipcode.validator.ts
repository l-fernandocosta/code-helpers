import { rgx } from "../regex"
/**
 * @description regex to validate if the typed zipcode is valid
 * @returns boolean
 */
function zipcodeValidator(zipcode: string) : boolean {
  return rgx.zipcode.test(zipcode)
}

export {
  zipcodeValidator
}