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

export class DoCredentialsRequest {
    'name': string;
    'token'?: string;
    'spacesAccessId'?: string;
    'spacesSecretKey'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "string",
            "format": ""
        },
        {
            "name": "spacesAccessId",
            "baseName": "spaces_access_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "spacesSecretKey",
            "baseName": "spaces_secret_key",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DoCredentialsRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

