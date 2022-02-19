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

import { EnvironmentApplicationsCurrentScaleResponse } from './EnvironmentApplicationsCurrentScaleResponse';
import { HttpFile } from '../http/http';

export class EnvironmentApplicationsCurrentScaleResponseList {
    'results'?: Array<EnvironmentApplicationsCurrentScaleResponse>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<EnvironmentApplicationsCurrentScaleResponse>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EnvironmentApplicationsCurrentScaleResponseList.attributeTypeMap;
    }

    public constructor() {
    }
}

