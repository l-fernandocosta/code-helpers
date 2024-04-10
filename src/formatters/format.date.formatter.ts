import { parseISO, format, Locale } from "date-fns";
import { ptBR } from "date-fns/locale";

export interface FormatDateInput {
  formatStr?: string,
  locale: Locale | undefined
}

const formatDate = (date: string, { locale = ptBR, formatStr = "dd/MM/yyyy" }: FormatDateInput): string => {
  return format(parseISO(date), formatStr, { locale })
}

export {
  formatDate
}