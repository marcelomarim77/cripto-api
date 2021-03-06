import { Injectable } from '@nestjs/common';
import fs = require('fs');

import { CriptoDto } from './dtos/cripto.dto';

@Injectable()
export class AppService {

    async getCriptografar(msg: string) {
        const cripto = new CriptoDto();
        cripto.resultado = this.criptografar(msg);
        return cripto;
    }
        
    async getDescriptografar(msg: string) {
        const descripto = new CriptoDto();
        descripto.resultado = this.descriptografar(msg);
        return descripto;
    }

    criptografar(msg: string) {
        let secrets: any = null;
        secrets = JSON.parse(fs.readFileSync(`./chave/key.json`, { encoding: 'utf-8' },),);

        let cripto: string = '';
        for (let i = 0; i < msg.length; i++) {
            const secret = secrets[msg.substring(i, i+1)];
            cripto += secret.key;
        }

        return cripto;
    }

    descriptografar(msg: string) {
        let secrets: any = null;
        secrets = JSON.parse(fs.readFileSync(`./chave/key.json`, { encoding: 'utf-8' },),);

        let descripto: string = '';
        for (let i = 0; i < msg.length; i++) {
            const secret = secrets[msg.substring(i, i+1)];
            descripto += secret.key;
        }

        return descripto;
    }
}
