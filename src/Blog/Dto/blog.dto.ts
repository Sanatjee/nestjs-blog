import { IsDefined } from 'class-validator';

export class BlogDTO {
    readonly title: string;
    readonly slug: string;
    readonly categories: object;
    readonly tags: object;
    readonly author: object;
    readonly status: string;
    readonly created_at: string;
}