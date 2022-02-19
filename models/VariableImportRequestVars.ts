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

export class VariableImportRequestVars {
    'name': string;
    'value': string;
    'scope': VariableImportRequestVarsScopeEnum;
    'isSecret': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "VariableImportRequestVarsScopeEnum",
            "format": ""
        },
        {
            "name": "isSecret",
            "baseName": "is_secret",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VariableImportRequestVars.attributeTypeMap;
    }

    public constructor() {
    }
}


export type VariableImportRequestVarsScopeEnum = "ORGANIZATION" | "PROJECT" | "ENVIRONMENT" | "APPLICATION" ;

