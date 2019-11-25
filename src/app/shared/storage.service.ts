import { Injectable } from '@angular/core';

import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({ providedIn: 'root' })
export class StorageService {

    constructor() { }

    async setItemForTextArea(num: number) {
        await Storage.set({
            key: 'TextAreaNumber',
            value: num + ''
        });
    }

    async getItemForTextArea() {
        const item = await Storage.get({ key: 'TextAreaNumber' });
        // console.log('Got item: ', item.value);
        return item.value;
    }

    async removeItemForTextArea() {
        await Storage.remove({ key: 'TextAreaNumber' });
    }

    async setItemForImage(num: number) {
        await Storage.set({
            key: 'ImageNumber',
            value: num + ''
        });
    }

    async getItemForImage() {
        const item = await Storage.get({ key: 'ImageNumber' });
        return item.value;
    }

    async removeItemForImage() {
        await Storage.remove({ key: 'ImageNumber' });
    }

    async setItemForSticker(num: number) {
        await Storage.set({
            key: 'StickerNumber',
            value: num + ''
        });
    }

    async getItemForSticker() {
        const item = await Storage.get({ key: 'StickerNumber' });
        return item.value;
    }

    async removeItemForSticker() {
        await Storage.remove({ key: 'StickerNumber' });
    }
}
