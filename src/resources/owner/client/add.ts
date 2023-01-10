/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PlantstoreApi } from "@fern-api/plantstore";
import * as core from "../../../core";

export type Response = core.APIResponse<PlantstoreApi.PlantOwner, PlantstoreApi.owner.add.Error>;
export type Error = PlantstoreApi.owner.add.Error.OwnerNotFoundError | PlantstoreApi.owner.add.Error._Unknown;

export declare namespace Error {
  interface OwnerNotFoundError extends _Utils {
    statusCode: 400;
  }

  interface _Unknown extends _Utils {
    statusCode: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <_Result>(visitor: PlantstoreApi.owner.add.Error._Visitor<_Result>) => _Result;
  }

  interface _Visitor<_Result> {
    ownerNotFoundError: () => _Result;
    _other: (value: core.Fetcher.Error) => _Result;
  }
}

export const Error = {
  ownerNotFoundError: (): PlantstoreApi.owner.add.Error.OwnerNotFoundError => {
    const valueWithoutVisit: Omit<PlantstoreApi.owner.add.Error.OwnerNotFoundError, "_visit"> = {
      statusCode: 400,
    };
    return core.addNonEnumerableProperty(valueWithoutVisit, "_visit", function <
      _Result
    >(this: PlantstoreApi.owner.add.Error.OwnerNotFoundError, visitor: PlantstoreApi.owner.add.Error._Visitor<_Result>) {
      return PlantstoreApi.owner.add.Error._visit(this, visitor);
    });
  },

  _unknown: (fetcherError: core.Fetcher.Error): PlantstoreApi.owner.add.Error._Unknown => {
    const valueWithoutVisit = fetcherError as unknown as Omit<PlantstoreApi.owner.add.Error._Unknown, "_visit">;
    return core.addNonEnumerableProperty(valueWithoutVisit, "_visit", function <
      _Result
    >(this: PlantstoreApi.owner.add.Error._Unknown, visitor: PlantstoreApi.owner.add.Error._Visitor<_Result>) {
      return PlantstoreApi.owner.add.Error._visit(this, visitor);
    });
  },

  _visit: <_Result>(
    value: PlantstoreApi.owner.add.Error,
    visitor: PlantstoreApi.owner.add.Error._Visitor<_Result>
  ): _Result => {
    switch (value.statusCode) {
      case 400:
        return visitor.ownerNotFoundError();
      default:
        return visitor._other(value as any);
    }
  },
} as const;
