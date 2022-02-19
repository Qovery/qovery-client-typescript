/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * OpenAPI spec version: 1.0.2
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class DeploymentRuleRequest {
    /**
    * name is case insensitive
    */
    'name': string;
    'description'?: string;
    'mode': DeploymentRuleRequestModeEnum;
    'cluster': string;
    'autoDeploy'?: boolean;
    'autoStop': boolean;
    /**
    * specify value only if auto_stop = false
    */
    'timezone'?: string;
    /**
    * specify value only if auto_stop = false
    */
    'startTime'?: Date;
    /**
    * specify value only if auto_stop = false
    */
    'stopTime'?: Date;
    /**
    * specify value only if auto_stop = false
    */
    'weekdays'?: Array<DeploymentRuleRequestWeekdaysEnum>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "DeploymentRuleRequestModeEnum",
            "format": ""
        },
        {
            "name": "cluster",
            "baseName": "cluster",
            "type": "string",
            "format": "uuid"
        },
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
            "type": "Array<DeploymentRuleRequestWeekdaysEnum>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DeploymentRuleRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type DeploymentRuleRequestModeEnum = "PRODUCTION" | "DEVELOPMENT" ;
export type DeploymentRuleRequestWeekdaysEnum = "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY" ;

