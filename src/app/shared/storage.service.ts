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
}
