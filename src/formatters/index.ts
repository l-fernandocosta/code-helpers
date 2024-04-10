import { formatDate } from "./format.date.formatter";
import { removeSpecialCharFormatter } from "./remove-special-chars.formatter";
import { formatZipcode } from "./zipcode.formatter";

const formatter = {
  /**
   * @description format the string to a valid zipcode
   */
  Zipcode: formatZipcode,
  /**
   * @description remove all the special chars from the string
   */
  Clear: removeSpecialCharFormatter,
  /***
   * @argument date - string
   * @argument formatString (optional) eg. "PPP" 
   * @argument locale (optional) default is `ptBR`
   * @description format date string based on the `formatString`, if no formatString is passed the default is "dd/MM/yyyy"
   * @example date input: "2023-02-20";  output: "23/02/2020"
   */
  FormatDate: formatDate
}
export { formatter }