import { DropdownItem } from './universal.interface';

export interface CarouselInfo {
  title: string;
  description: string;
  img: string;
  button: {
    display: boolean;
    content?: string;
    href?: string;
  };
}

export interface MenuInfo {
  name: string;
  hasChildren: boolean;
  redirect?: string;
  children?: MenuInfo[];
}

export interface ProductInfo {
  id: string;
  name: string;
  description: string;
  detail: string;
  category: string;
  img: string;
  gallery?: string[];
  onSale: boolean;
  costPrice: string;
  salePrice?: string;
  options?: DropdownItem[];
  inStock: boolean;
}

export interface CategoryInfo {
  name: string;
  redirect: string;
  count?: number;
  products?: ProductInfo[];
}

export interface ShoppingCartItem {
  product: ProductInfo;
  quantity: number;
  option: DropdownItem;
}
