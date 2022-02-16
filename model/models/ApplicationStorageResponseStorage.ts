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

export class ApplicationStorageResponseStorage {
    'id'?: string;
    'type': ApplicationStorageResponseStorageTypeEnum;
    /**
    * unit is GB
    */
    'size': number;
    'mountPoint': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ApplicationStorageResponseStorageTypeEnum",
            "format": ""
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number",
            "format": ""
        },
        {
            "name": "mountPoint",
            "baseName": "mount_point",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApplicationStorageResponseStorage.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ApplicationStorageResponseStorageTypeEnum = "SLOW_HDD" | "HDD" | "SSD" | "FAST_SSD" ;

