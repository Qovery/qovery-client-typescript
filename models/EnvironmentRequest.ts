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

export class EnvironmentRequest {
    /**
    * name is case insensitive
    */
    'name': string;
    'cluster'?: string;
    'mode'?: EnvironmentRequestModeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "cluster",
            "baseName": "cluster",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "EnvironmentRequestModeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EnvironmentRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type EnvironmentRequestModeEnum = "PRODUCTION" | "DEVELOPMENT" | "STAGING" | "PREVIEW" ;

