import { Document } from 'mongoose';
export interface Tag extends Document {
    readonly title: string;
    readonly slug: string;
    readonly statys: string;
}