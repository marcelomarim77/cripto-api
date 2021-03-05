import { Injectable } from '@nestjs/common';
import fs = require('fs');

@Injectable()
export class AppService {

    async getCriptografar(msg: string) {
        const cripto: string = this.criptografar(msg);
        return cripto;
    }
        
    async getDescriptografar(msg: string) {
        const descripto: string = this.descriptografar(msg);
        return descripto;
    }

    criptografar(msg: string) {
        let secrets: any = null;
        secrets = JSON.parse(fs.readFileSync(`./chave/key.json`, { encoding: 'utf-8' },),);

        let cripto: string = '';
        for (let i = 0; i < msg.length; i++) {
            const secret = secrets[msg.substring(i, i+1).toLowerCase()];
            cripto += secret.key.toUpperCase();
        }

        return cripto;
    }

    descriptografar(msg: string) {
        let secrets: any = null;
        secrets = JSON.parse(fs.readFileSync(`./chave/key.json`, { encoding: 'utf-8' },),);

        let descripto: string = '';
        for (let i = 0; i < msg.length; i++) {
            const secret = secrets[msg.substring(i, i+1).toLowerCase()];
            descripto += secret.key.toUpperCase();
        }

        return descripto;
    }
}
