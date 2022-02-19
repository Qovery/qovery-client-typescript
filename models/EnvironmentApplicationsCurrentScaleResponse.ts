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

export class EnvironmentApplicationsCurrentScaleResponse {
    'application'?: string;
    'min'?: number;
    'max'?: number;
    'running'?: number;
    'runningInPercent'?: number;
    'warningThresholdInPercent'?: number;
    'alertThresholdInPercent'?: number;
    'status'?: EnvironmentApplicationsCurrentScaleResponseStatusEnum;
    'updatedAt'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "application",
            "baseName": "application",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "min",
            "baseName": "min",
            "type": "number",
            "format": ""
        },
        {
            "name": "max",
            "baseName": "max",
            "type": "number",
            "format": ""
        },
        {
            "name": "running",
            "baseName": "running",
            "type": "number",
            "format": ""
        },
        {
            "name": "runningInPercent",
            "baseName": "running_in_percent",
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
            "type": "EnvironmentApplicationsCurrentScaleResponseStatusEnum",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return EnvironmentApplicationsCurrentScaleResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export type EnvironmentApplicationsCurrentScaleResponseStatusEnum = "OK" | "Warning" | "Alert" ;

