import { IsDefined } from 'class-validator';

export class TagDTO {
    @IsDefined()
    readonly title: string;
    readonly slug: string;
    readonly status: string;
}