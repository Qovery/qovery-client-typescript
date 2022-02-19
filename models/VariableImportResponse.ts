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

import { VariableImportResponseSuccessfulImportedVariables } from './VariableImportResponseSuccessfulImportedVariables';
import { HttpFile } from '../http/http';

export class VariableImportResponse {
    'totalVariablesToImport': number;
    'successfulImportedVariables': Array<VariableImportResponseSuccessfulImportedVariables>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "totalVariablesToImport",
            "baseName": "total_variables_to_import",
            "type": "number",
            "format": ""
        },
        {
            "name": "successfulImportedVariables",
            "baseName": "successful_imported_variables",
            "type": "Array<VariableImportResponseSuccessfulImportedVariables>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VariableImportResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

