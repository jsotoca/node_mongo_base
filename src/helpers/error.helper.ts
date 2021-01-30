import ErrorTitles from "../enums/error-titles.enum";
import ErrorResponse from "../interfaces/error-response.interface";

export const _err = (status: number, message: string, name?: string) => {
    let err: ErrorResponse = {
        name: name || ErrorTitles.ERROR_DEFAULT,
        message: message || 'Error del lado de servidor.',
        status: status || 500
    }
    throw err;
};