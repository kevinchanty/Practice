import { Injectable, Logger } from '@nestjs/common';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { runInThisContext } from 'vm';

@Injectable()
export class ProductsService {
  private products;
  private productsArr;

  constructor() {
    try {
      const data = readFileSync(resolve('./public/data.json'), {
        encoding: 'utf-8',
      });
      const dataObject = JSON.parse(data);
      const rawProductsArr: any[] = dataObject.products;

      this.productsArr = rawProductsArr.map((product, index) => ({
        ...product,
        id: index,
      }));

      this.products = this.productsArr.reduce((prev, current, index) => {
        prev[current.id] = current;
        // prev[index].id = index;
        return prev;
      }, {});
    } catch (error) {
      throw Error('Error in loading product data');
    }
  }

  findAll() {
    return this.productsArr;
  }

  findOne(code: string) {
    return this.products[code];
  }
}
