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

import { MetricRestartResponseResults } from './MetricRestartResponseResults';
import { HttpFile } from '../http/http';

export class MetricRestartResponse {
    'results'?: Array<MetricRestartResponseResults>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<MetricRestartResponseResults>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MetricRestartResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

