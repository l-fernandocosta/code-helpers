export function removeSpecialCharFormatter(string: string) {
  string = string.replace(/\D/g, "");
  return string;
}