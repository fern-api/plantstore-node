/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { PlantStoreApi } from "@fern-api/plantstore";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.PlantStoreApiEnvironment | string;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * Add a new plant to the store.
     * @throws {PlantStoreApi.InvalidResponseError}
     */
    public async add(request: PlantStoreApi.AddPlantRequest): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.PlantStoreApiEnvironment.Production, "/plant/"),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.AddPlantRequest.json(request),
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as any)?.["error"]) {
                case "InvalidResponseError":
                    throw new PlantStoreApi.InvalidResponseError();
                default:
                    throw new errors.PlantStoreApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PlantStoreApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.PlantStoreApiTimeoutError();
            case "unknown":
                throw new errors.PlantStoreApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {PlantStoreApi.PlantNotFoundError}
     * @throws {PlantStoreApi.InvalidIdSuppliedError}
     */
    public async find(plantId: PlantStoreApi.PlantId): Promise<PlantStoreApi.Plant> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.PlantStoreApiEnvironment.Production,
                `/plant/${plantId}`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.Plant.parse(_response.body as serializers.Plant.Raw);
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as any)?.["error"]) {
                case "PlantNotFoundError":
                    throw new PlantStoreApi.PlantNotFoundError();
                case "InvalidIdSuppliedError":
                    throw new PlantStoreApi.InvalidIdSuppliedError(
                        await serializers.InvalidId.parse(_response.error.body as serializers.InvalidId.Raw)
                    );
                default:
                    throw new errors.PlantStoreApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PlantStoreApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.PlantStoreApiTimeoutError();
            case "unknown":
                throw new errors.PlantStoreApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @throws {PlantStoreApi.PlantNotFoundError}
     * @throws {PlantStoreApi.InvalidIdSuppliedError}
     */
    public async delete(plantId: PlantStoreApi.PlantId): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.PlantStoreApiEnvironment.Production,
                `/plant/${plantId}`
            ),
            method: "DELETE",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as any)?.["error"]) {
                case "PlantNotFoundError":
                    throw new PlantStoreApi.PlantNotFoundError();
                case "InvalidIdSuppliedError":
                    throw new PlantStoreApi.InvalidIdSuppliedError(
                        await serializers.InvalidId.parse(_response.error.body as serializers.InvalidId.Raw)
                    );
                default:
                    throw new errors.PlantStoreApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.PlantStoreApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.PlantStoreApiTimeoutError();
            case "unknown":
                throw new errors.PlantStoreApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}