/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { PlantstoreApi } from "@fern-api/plantstore";
import * as core from "../../../core";

export const OwnerId: core.schemas.Schema<serializers.OwnerId.Raw, PlantstoreApi.OwnerId> = core.schemas.string();

export declare namespace OwnerId {
  type Raw = string;
}
