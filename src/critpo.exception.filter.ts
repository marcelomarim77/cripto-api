import { ExceptionFilter, Catch, ArgumentsHost, HttpException, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class CriptoExceptionFilter implements ExceptionFilter {

    catch(exception: HttpException, host: ArgumentsHost) {
        Logger.debug('#1','CriptoExceptionFilter');

        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();
        const message = exception.message;

        response
            .status(status)
            .json(
                {
                    statusCode: status,
                    timestamp: new Date().toISOString(),
                    error: message,
                    path: request.url,
                    body: request.body
                }
            );

        Logger.verbose(request.body,'CriptoExceptionFilter');
    }
}