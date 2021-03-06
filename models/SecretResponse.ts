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

import { AliasedSecret } from './AliasedSecret';
import { BaseResponse } from './BaseResponse';
import { OverriddenSecret } from './OverriddenSecret';
import { HttpFile } from '../http/http';

export class SecretResponse {
    /**
    * key is case sensitive
    */
    'key'?: string;
    'overriddenSecret'?: OverriddenSecret;
    'aliasedSecret'?: AliasedSecret;
    'scope': SecretResponseScopeEnum;
    'id': string;
    'createdAt': Date;
    'updatedAt'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "overriddenSecret",
            "baseName": "overridden_secret",
            "type": "OverriddenSecret",
            "format": ""
        },
        {
            "name": "aliasedSecret",
            "baseName": "aliased_secret",
            "type": "AliasedSecret",
            "format": ""
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "SecretResponseScopeEnum",
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
        return SecretResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

