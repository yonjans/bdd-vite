
import { IStorageClient } from '@clients/storage/types';
import type { IJsonAPI, JsonAPIObjectResp } from './types';

import _ from 'lodash';

export class BackendAPI implements IJsonAPI {

    private baseUrl: string;
    private localStorageClient: IStorageClient

    private buildHeaders(headers: Map<string, string>): Headers {
        let _headers = new Headers()
        _.keys(headers).forEach((value, key) => {
            _headers.append(key.toString(), value)
        })
        return _headers;
    }
    private async parseResponse<T>(response: Response): Promise<T> {
        if (response.status == 200) {
            return response.json() as T
        }

        // TODO: deserialize json api error
        throw new Error('Failed to load')
    }
    private async request<T, U>(path: string, headers: Map<string, string>, method: string, shouldUseToken: boolean, body?: T): Promise<JsonAPIObjectResp<U>> {
        const _headers = this.buildHeaders(headers)
        if (shouldUseToken) {
            const accessToken = await this.localStorageClient.getAccessToken()
            _headers.append('Authorization', `Bearer ${accessToken}`)
        }
        const requestOption: RequestInit = {
            method: method,
            headers: this.buildHeaders(headers),
        }

        if (!_.isUndefined(body)) {
            requestOption.body = JSON.stringify(body)
        }
        const resp = await fetch(`${this.baseUrl}/${path}`, requestOption)
        return await this.parseResponse(resp)
    }

    constructor(baseUrl: string, localStorageClient: IStorageClient) {
        this.baseUrl = baseUrl
        this.localStorageClient = localStorageClient
    }

    get<T>(path: string, headers: Map<string, string> = new Map(), shouldUseToken: boolean = true): Promise<JsonAPIObjectResp<T>> {
        return this.request(path, headers, 'GET', shouldUseToken)
    }
    post<T, U>(path: string, body: T, headers: Map<string, string> = new Map(), shouldUseToken: boolean = true): Promise<JsonAPIObjectResp<U>> {
        return this.request<T, U>(path, headers, 'POST', shouldUseToken, body)
    }
    put<T, U>(path: string, body: T, headers: Map<string, string> = new Map(), shouldUseToken: boolean = true): Promise<JsonAPIObjectResp<U>> {
        return this.request<T, U>(path, headers, 'PUT', shouldUseToken, body)
    }
    delete(path: string, headers: Map<string, string>, shouldUseToken: boolean = true): Promise<JsonAPIObjectResp<{}>> {
        return this.request(path, headers, 'POST', shouldUseToken)
    }
}
