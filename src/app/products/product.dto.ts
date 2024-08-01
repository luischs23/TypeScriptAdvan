import { Product } from "./product.model";

export interface CreateProductDto extends Omit<Product,'id'|'createAt'| 'updateAt'| 'category'>{
  categoryId: string
}

type example = Pick<Product, 'color'|'description'>;

export interface updateProductDto extends Partial<CreateProductDto>{};

type example2 = Required<Product>;

export interface findProductDto extends Readonly<Partial<Omit<Product,'tags'>>>{
  readonly tags: ReadonlyArray<string>;
};

type example3 = Readonly<Product>;
