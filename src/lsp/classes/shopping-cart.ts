/** se S é um subtipo de T, então os objetos do tipo T, em um programa,
 * podem ser substituídos pelos objetos de tipo S sem que seja necessário
 * alterar as propriedades deste programa. - wikipedia
 */
import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.slice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  totalWithDiscount(): number {
    // const result = this.discount.calculate(this.total());
    // if (typeof result === 'number') return result;
    // return this.total();
    return this.discount.calculate(this.total());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo');
    this._items.length = 0;
  }
}
