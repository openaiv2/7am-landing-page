import { proSolidIcons } from "../styles";
import numeral from "numeral";

const ICON_ASSET_BASE_URL = "https://assets.7am.io/fa-icons/";

export function $getIconByName(name: string): string {
  return ICON_ASSET_BASE_URL + name + ".svg";
}

export type SearchIconByNameResponseType = {
  name: string;
};

export function $searchIconByName(
  query: string,
): SearchIconByNameResponseType[] {
  return proSolidIcons
    .filter((name) => name.toLowerCase().includes(query))
    .map((name: string) => ({
      name: name,
    }));
}

type CurrencyFormatterProps = {
  amount: number;
  language?: string;
  currency?: string;
};

export const $currencyFormatter = (props: CurrencyFormatterProps) => {
  const { amount, language, currency } = props;
  const options = {};
  if (currency) Object.assign(options, { currency, style: "currency" });

  return new Intl.NumberFormat(language || navigator?.language, {
    minimumFractionDigits: 2,
    ...options,
  }).format(amount);
};

export function $currencyFormatterHelper(
  currencySymbol: string = "$",
  value: number,
  options?: { showSign?: boolean; fixedTo?: number },
): string {
  let format = `${currencySymbol}0.${"0".repeat(options?.fixedTo ?? 2)}`;
  if (options?.showSign) format = (value > 0 ? "+" : "-") + format;
  return numeral(value).format(format);
}
