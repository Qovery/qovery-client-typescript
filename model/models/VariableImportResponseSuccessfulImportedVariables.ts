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

export class VariableImportResponseSuccessfulImportedVariables {
    'name': string;
    /**
    * Optional if the variable is secret
    */
    'value'?: string;
    'scope': VariableImportResponseSuccessfulImportedVariablesScopeEnum;
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
            "type": "VariableImportResponseSuccessfulImportedVariablesScopeEnum",
            "format": ""
        },
        {
            "name": "isSecret",
            "baseName": "is_secret",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VariableImportResponseSuccessfulImportedVariables.attributeTypeMap;
    }

    public constructor() {
    }
}


export type VariableImportResponseSuccessfulImportedVariablesScopeEnum = "ORGANIZATION" | "PROJECT" | "ENVIRONMENT" | "APPLICATION" ;

