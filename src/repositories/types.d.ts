export declare type IRepository = {}

export declare type ICRUDModel = {
    id: string
}

export declare interface ICRUDRepository<T extends ICRUDModel, U> extends IRepository {
    get(id: string): Promise<T>
    post(data: U): Promise<T>
    put(id: string, data: U): Promise<T>
    delete(id: string): Promise<{}>
}
