import { IsDefined } from "class-validator";

export class AuthorDTO {

    @IsDefined()
    readonly first_name: string;

    readonly last_name: string;
    readonly avatar: string;
    readonly designation: string;
}