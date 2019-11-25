import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment.prod';

import { catchError, tap, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface StickerResponse {
    filename: string;
    id: string;
    name: string;
    url: string;
}

@Injectable({providedIn: 'root'})
export class StickerService {

    stickerArray: StickerResponse[] = [];

    constructor(private httpClient: HttpClient) { }

    fetchStickers() {
        return this.httpClient.get<any>(
            environment.base_url + 'api/fetch/sticker',
            {
                observe: 'response',
                responseType: 'json'
            }
        ).pipe(map(responseData => {
            if (responseData.status === 200) {
               const stickers: StickerResponse[] = [];
               responseData.body.body.forEach(element => {
                   stickers.push(element);
               });
               this.stickerArray = stickers;
               return stickers;
            } else {
                return [];
            }
        }), catchError(error => {
            return throwError(error);
        }));
    }

    searchSticker(val) {
        if (val) {
            return this.stickerArray.filter(item => {
                if (item.name.match(val)) {
                    return item;
                }
            });
        } else {
            return this.stickerArray.slice();
        }
    }
}
