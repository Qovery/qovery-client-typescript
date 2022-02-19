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

import { HttpFile } from '../http/http';

export class EnvironmentDatabasesCurrentMetricResponseStorage {
    'requestedInGb'?: number;
    'consumedInGb'?: number;
    'consumedInPercent'?: number;
    'warningThresholdInPercent'?: number;
    'alertThresholdInPercent'?: number;
    'status'?: EnvironmentDatabasesCurrentMetricResponseStorageStatusEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "requestedInGb",
            "baseName": "requested_in_gb",
            "type": "number",
            "format": ""
        },
        {
            "name": "consumedInGb",
            "baseName": "consumed_in_gb",
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
            "type": "EnvironmentDatabasesCurrentMetricResponseStorageStatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EnvironmentDatabasesCurrentMetricResponseStorage.attributeTypeMap;
    }

    public constructor() {
    }
}


export type EnvironmentDatabasesCurrentMetricResponseStorageStatusEnum = "OK" | "Warning" | "Alert" ;

