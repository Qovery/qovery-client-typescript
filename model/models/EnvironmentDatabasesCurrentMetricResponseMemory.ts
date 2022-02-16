/**
 * [BETA] Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is in Beta and still in progress. Some endpoints are not available yet. 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class EnvironmentDatabasesCurrentMetricResponseMemory {
    'requestedInMb'?: number;
    'consumedInMb'?: number;
    'consumedInPercent'?: number;
    'warningThresholdInPercent'?: number;
    'alertThresholdInPercent'?: number;
    'status'?: EnvironmentDatabasesCurrentMetricResponseMemoryStatusEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "requestedInMb",
            "baseName": "requested_in_mb",
            "type": "number",
            "format": ""
        },
        {
            "name": "consumedInMb",
            "baseName": "consumed_in_mb",
            "type": "number",
            "format": ""
        },
        {
            "name": "consumedInPercent",
            "baseName": "consumed_in_percent",
            "type": "number",
            "format": ""
        },
        {
            "name": "warningThresholdInPercent",
            "baseName": "warning_threshold_in_percent",
            "type": "number",
            "format": ""
        },
        {
            "name": "alertThresholdInPercent",
            "baseName": "alert_threshold_in_percent",
            "type": "number",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "EnvironmentDatabasesCurrentMetricResponseMemoryStatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EnvironmentDatabasesCurrentMetricResponseMemory.attributeTypeMap;
    }

    public constructor() {
    }
}


export type EnvironmentDatabasesCurrentMetricResponseMemoryStatusEnum = "OK" | "Warning" | "Alert" ;
