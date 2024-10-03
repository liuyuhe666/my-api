import { appInfo } from "../constants/index.ts";

export function wrapBaseResponse(obj: object, message = appInfo.defaultMessage, ok = true) {
    return {
        ok,
        message,
        data: obj || {}
    }
}