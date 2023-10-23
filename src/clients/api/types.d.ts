// https://jsonapi.org/format/#document-top-level
export declare type JsonAPIObjectResp<T> = {
    data: T
}
// https://jsonapi.org/format/#error-objects
declare type JsonAPIError = {
    status: string
    title: string
    detail: string?
}
export declare type JsonAPIErrorResp = {
    errors: JsonAPIError[]
}

export declare type JsonAPIResp<T> = JsonAPIObjectResp<T> | JsonAPIErrorResp

export declare interface IJsonAPI {
    get<T>(
        path: string,
        headers: Map<string, string> = new Map(),
        shouldUseToken: boolean = true
    ): Promise<JsonAPIObjectResp<T>>
    post<T, U>(
        path: string,
        body: T,
        headers: Map<string, string> = new Map(),
        shouldUseToken: boolean = true
    ): Promise<JsonAPIObjectResp<U>>
    put<T, U>(
        path: string,
        body: T,
        headers: Map<string, string> = new Map(),
        shouldUseToken: boolean = true
    ): Promise<JsonAPIObjectResp<U>>
    delete(
        path: string,
        headers: Map<string, string> = new Map(),
        shouldUseToken: boolean = true
    ): Promise<JsonAPIObjectResp<{}>>
}
