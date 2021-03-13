import { HttpStatus, HttpException, Logger } from '@nestjs/common';

export class CriptoException extends HttpException {
    constructor() {
        super('Forbidden', HttpStatus.FORBIDDEN);

        Logger.debug('#1','CriptoException');
    };
}
