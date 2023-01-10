/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../environments";
import * as core from "../../../core";
import { PlantstoreApi } from "@fern-api/plantstore";
import urlJoin from "url-join";
import * as serializers from "../../../serialization";

export declare namespace Client {
  interface Options {
    environment?: environments.Environment | string;
    token?: core.Supplier<core.BearerToken>;
  }
}

export class Client {
  constructor(private readonly options: Client.Options) {}

  public async add(request: PlantstoreApi.AddOwnerRequest): Promise<PlantstoreApi.owner.add.Response> {
    const _response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/owner/"),
      method: "POST",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
      body: await serializers.owner.add.Request.json({
        name: request.name,
        age: request.age,
        plants: request.plants,
      }),
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.owner.add.Response.parse(_response.body as serializers.owner.add.Response.Raw),
      };
    }

    if (_response.error.reason === "status-code") {
      switch (_response.error.statusCode) {
        case 400:
          return {
            ok: false,
            error: PlantstoreApi.owner.add.Error.ownerNotFoundError(),
          };
      }
    }

    return {
      ok: false,
      error: PlantstoreApi.owner.add.Error._unknown(_response.error),
    };
  }

  public async delete(ownerId: PlantstoreApi.OwnerId): Promise<PlantstoreApi.owner.delete.Response> {
    const _response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, `/owner/${ownerId}`),
      method: "POST",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
    });
    if (_response.ok) {
      return {
        ok: true,
        body: undefined,
      };
    }

    return {
      ok: false,
      error: PlantstoreApi.owner.delete.Error._unknown(_response.error),
    };
  }
}
