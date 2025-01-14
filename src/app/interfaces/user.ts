import { Residencia } from "./residencia";

export interface User {
    username: string;
    password: string;
    residencia?: Residencia
}
