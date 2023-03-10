/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";

export class OwnerNotFoundError extends errors.PlantStoreApiError {
    constructor() {
        super({
            message: "OwnerNotFoundError",
            statusCode: 400,
        });
        Object.setPrototypeOf(this, OwnerNotFoundError.prototype);
    }
}
