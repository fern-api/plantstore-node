/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { PlantStoreApi } from "@fern-api/plantstore";
import * as core from "../../../../core";

export const EmployeeId: core.serialization.Schema<serializers.EmployeeId.Raw, PlantStoreApi.EmployeeId> =
    core.serialization.string();

export declare namespace EmployeeId {
    type Raw = string;
}