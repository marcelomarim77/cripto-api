import { IsString } from 'class-validator';
export class CriptoDto {

    @IsString()
    resultado: string;
}
