import ErrorTitles from "../enums/error-titles.enum";
import ErrorResponse from "../interfaces/error-response.interface";

export const _err = (status: number, message: string, name?: string) => {
    let err: ErrorResponse = {
        status: status || 500,
        message: message || 'Error del lado de servidor.',
        name: name || ErrorTitles.ERROR_DEFAULT
    }
    throw err;
};