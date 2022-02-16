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

import { BaseResponse } from './BaseResponse';
import { DatabaseRequest } from './DatabaseRequest';
import { ReferenceObject } from './ReferenceObject';
import { HttpFile } from '../http/http';

export class DatabaseResponse {
    'environment'?: ReferenceObject;
    'host'?: string;
    'port'?: number;
    /**
    * Maximum cpu that can be allocated to the database based on organization cluster configuration. unit is millicores (m). 1000m = 1 cpu
    */
    'maximumCpu'?: number;
    /**
    * Maximum memory that can be allocated to the database based on organization cluster configuration. unit is MB. 1024 MB = 1GB
    */
    'maximumMemory'?: number;
    /**
    * indicates if the database disk is encrypted or not
    */
    'diskEncrypted'?: boolean;
    'id': string;
    'createdAt': Date;
    'updatedAt'?: Date;
    /**
    * name is case insensitive
    */
    'name': string;
    'type': DatabaseResponseTypeEnum;
    'version': string;
    'mode': DatabaseResponseModeEnum;
    'accessibility'?: DatabaseResponseAccessibilityEnum;
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
            "name": "environment",
            "baseName": "environment",
            "type": "ReferenceObject",
            "format": ""
        },
        {
            "name": "host",
            "baseName": "host",
            "type": "string",
            "format": ""
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number",
            "format": ""
        },
        {
            "name": "maximumCpu",
            "baseName": "maximum_cpu",
            "type": "number",
            "format": ""
        },
        {
            "name": "maximumMemory",
            "baseName": "maximum_memory",
            "type": "number",
            "format": ""
        },
        {
            "name": "diskEncrypted",
            "baseName": "disk_encrypted",
            "type": "boolean",
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
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "DatabaseResponseTypeEnum",
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
            "type": "DatabaseResponseModeEnum",
            "format": ""
        },
        {
            "name": "accessibility",
            "baseName": "accessibility",
            "type": "DatabaseResponseAccessibilityEnum",
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
        return DatabaseResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export type DatabaseResponseTypeEnum = "POSTGRESQL" | "MYSQL" | "MONGODB" | "REDIS" ;
export type DatabaseResponseModeEnum = "MANAGED" | "CONTAINER" ;
export type DatabaseResponseAccessibilityEnum = "PUBLIC" | "PRIVATE" ;

