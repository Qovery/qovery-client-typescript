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

import { BaseResponse } from './BaseResponse';
import { HttpFile } from '../http/http';

export class EnvironmentDeploymentRuleResponse {
    'autoDeploy'?: boolean;
    'autoStop'?: boolean;
    'autoDelete'?: boolean;
    'autoPreview'?: boolean;
    'timezone': string;
    'startTime': Date;
    'stopTime': Date;
    'weekdays': Array<EnvironmentDeploymentRuleResponseWeekdaysEnum>;
    'id': string;
    'createdAt': Date;
    'updatedAt'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "autoDeploy",
            "baseName": "auto_deploy",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "autoStop",
            "baseName": "auto_stop",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "autoDelete",
            "baseName": "auto_delete",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "autoPreview",
            "baseName": "auto_preview",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "timezone",
            "baseName": "timezone",
            "type": "string",
            "format": ""
        },
        {
            "name": "startTime",
            "baseName": "start_time",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "stopTime",
            "baseName": "stop_time",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "weekdays",
            "baseName": "weekdays",
            "type": "Array<EnvironmentDeploymentRuleResponseWeekdaysEnum>",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return EnvironmentDeploymentRuleResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

