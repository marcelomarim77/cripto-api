import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('/decrypt/:msg')
    async getDecrypt(@Param('msg') msg: string) {
        return this.appService.getDescriptografar(msg);
    }

    @Get('/crypt/:msg')
    async getCrypt(@Param('msg') msg: string) {
        return this.appService.getCriptografar(msg);
    }
}
