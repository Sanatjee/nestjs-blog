import { IsDefined } from "class-validator";

export class CategoryDTO {
    @IsDefined()
    readonly title: string;
    readonly slug: string;
    readonly status: string;
}