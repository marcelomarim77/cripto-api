import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CriptoInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        Logger.warn('#1','CriptoInterceptor');

        const now = Date.now();
        return next
            .handle()
            .pipe(
            tap(() => Logger.warn(`#2 ${Date.now() - now}ms`,'CriptoInterceptor')),
        );
    }
}
