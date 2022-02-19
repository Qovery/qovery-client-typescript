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

import { BaseResponse } from './BaseResponse';
import { EnvironmentVariableRequest } from './EnvironmentVariableRequest';
import { HttpFile } from '../http/http';

export class EnvironmentVariableResponse {
    'overriddenVariable'?: any;
    'aliasedVariable'?: any;
    'scope': EnvironmentVariableResponseScopeEnum;
    'serviceName'?: string;
    'id': string;
    'createdAt': Date;
    'updatedAt'?: Date;
    /**
    * key is case sensitive
    */
    'key': string;
    /**
    * value of the env variable.
    */
    'value': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "overriddenVariable",
            "baseName": "overridden_variable",
            "type": "any",
            "format": ""
        },
        {
            "name": "aliasedVariable",
            "baseName": "aliased_variable",
            "type": "any",
            "format": ""
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "EnvironmentVariableResponseScopeEnum",
            "format": ""
        },
        {
            "name": "serviceName",
            "baseName": "service_name",
            "type": "string",
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
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EnvironmentVariableResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

