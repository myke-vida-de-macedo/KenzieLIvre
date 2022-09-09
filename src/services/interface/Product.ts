export interface IProduct {
    brand?: string,
    category?: string,
    color?: string,
    currentPrice?: number,
    description?: string,
    id?: number,
    images?: string[],
    lastPrice?: number,
    model?: string,
    promotion?: boolean,
    quantity?: number,
    userId?: number,
    warranty?: string,
}

export interface IProductReturn extends IProduct {
    id:number
}