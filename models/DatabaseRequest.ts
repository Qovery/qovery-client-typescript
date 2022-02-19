/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * OpenAPI spec version: 1.0.1
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class DatabaseRequest {
    /**
    * name is case insensitive
    */
    'name': string;
    'type': DatabaseRequestTypeEnum;
    'version': string;
    'mode': DatabaseRequestModeEnum;
    'accessibility'?: DatabaseRequestAccessibilityEnum;
    /**
    * unit is millicores (m). 1000m = 1 cpu
    */
    'cpu'?: number;
    /**
    * unit is MB. 1024 MB = 1GB
    */
    'memory'?: number;
    /**
    * unit is MB
    */
    'storage'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "DatabaseRequestTypeEnum",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "DatabaseRequestModeEnum",
            "format": ""
        },
        {
            "name": "accessibility",
            "baseName": "accessibility",
            "type": "DatabaseRequestAccessibilityEnum",
            "format": ""
        },
        {
            "name": "cpu",
            "baseName": "cpu",
            "type": "number",
            "format": ""
        },
        {
            "name": "memory",
            "baseName": "memory",
            "type": "number",
            "format": ""
        },
        {
            "name": "storage",
            "baseName": "storage",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DatabaseRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type DatabaseRequestTypeEnum = "POSTGRESQL" | "MYSQL" | "MONGODB" | "REDIS" ;
export type DatabaseRequestModeEnum = "MANAGED" | "CONTAINER" ;
export type DatabaseRequestAccessibilityEnum = "PUBLIC" | "PRIVATE" ;

