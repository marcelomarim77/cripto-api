import { Controller, Get, Post, Body, Param, UseInterceptors, Logger, UseFilters } from '@nestjs/common';

import { AppService } from './app.service';
import { CriptoDto } from './dtos/cripto.dto';
import { CriptoInterceptor } from './cripto.interceptor';
import { ValidationPipe } from './validation.pipe';
import { CriptoExceptionFilter } from './critpo.exception.filter';
@Controller()
@UseInterceptors(new CriptoInterceptor())
@UseFilters(new CriptoExceptionFilter())
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('/crypt/:msg')
    async getCrypt(@Param('msg') msg: string) {
        Logger.debug('#1','Controller - GET');

        return await this.appService.getCriptografar(msg);
    }

    @Post()
    async create(@Body(new ValidationPipe()) criptoDto: CriptoDto) {
        Logger.debug('#1','Controller - POST');

        await this.appService.postCriptografar(criptoDto);
    }
}
