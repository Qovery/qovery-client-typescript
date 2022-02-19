/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * OpenAPI spec version: 1.0.3
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CostResponse } from './CostResponse';
import { HttpFile } from '../http/http';

export class GenericObjectCurrentCostResponse {
    'id': string;
    'name': string;
    'consumedTimeInSeconds': number;
    'cost': CostResponse;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "consumedTimeInSeconds",
            "baseName": "consumed_time_in_seconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "cost",
            "baseName": "cost",
            "type": "CostResponse",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GenericObjectCurrentCostResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

