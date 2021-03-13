import { Injectable, Logger } from '@nestjs/common';
import fs = require('fs');

import { CriptoDto } from './dtos/cripto.dto';

@Injectable()
export class AppService {

    async postCriptografar(criptoDto: CriptoDto) {
        Logger.log('#4','Service');
    }

    async getCriptografar(msg: string) {
        const cripto = new CriptoDto();
        Logger.log('#1','Service');
        cripto.resultado = this.criptografar(msg);
        Logger.log('#2','Service');
        return cripto;
    }

    criptografar(msg: string) {
        let secrets: any = null;
        secrets = JSON.parse(fs.readFileSync(`./chave/key.json`, { encoding: 'utf-8' },),);

        let cripto: string = '';
        for (let i = 0; i < msg.length; i++) {
            const secret = secrets[msg.substring(i, i+1)];
            cripto += secret.key;
        }

        Logger.verbose('#3','Service');
        return cripto;
    }
}
