import { Product } from "./Product";

export interface DummyJSON {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}