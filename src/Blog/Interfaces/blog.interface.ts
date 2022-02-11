import { Document } from 'mongoose';

export interface Blog extends Document {
    readonly title: string;
    readonly slug: string;
    readonly categories: object;
    readonly tags: object;
    readonly author: object;
    readonly status: string;
    readonly created_at: string;
}