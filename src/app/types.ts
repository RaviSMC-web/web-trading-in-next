export interface APIinterface {
  symbol_token: string;
  symbol_name: string;
  exchange: string;
  segment: string;
  instrument_type: string;
  company_name: string;
  [key: string]: any;
}

export interface IWatchlist {
  watchlist_name: string;
  watchlist_serial_number: number;
  data?: APIinterface[] | null;
}

export interface IWatchListData {
  watchlist_name: string;
  watchlist_serial_number: number;
  data?: APIinterface[] | null;
}

export type User = {
  id: number;
  name: string;
  email: string;
};
