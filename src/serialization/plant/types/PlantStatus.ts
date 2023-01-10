/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { PlantstoreApi } from "@fern-api/plantstore";
import * as core from "../../../core";

export const PlantStatus: core.schemas.Schema<serializers.PlantStatus.Raw, PlantstoreApi.PlantStatus> =
  core.schemas.enum_(["available", "pending", "sold"]);

export declare namespace PlantStatus {
  type Raw = "available" | "pending" | "sold";
}