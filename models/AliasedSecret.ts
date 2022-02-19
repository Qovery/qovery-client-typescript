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

export class AliasedSecret {
    'id'?: string;
    'key'?: string;
    'scope'?: AliasedSecretScopeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "AliasedSecretScopeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AliasedSecret.attributeTypeMap;
    }

    public constructor() {
    }
}


export type AliasedSecretScopeEnum = "BUILT_IN" | "ENVIRONMENT" | "PROJECT" | "APPLICATION" ;

