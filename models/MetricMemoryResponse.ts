/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MetricMemoryDatapointResponse } from './MetricMemoryDatapointResponse';
import { HttpFile } from '../http/http';

export class MetricMemoryResponse {
    'instanceName': string;
    'data': Array<MetricMemoryDatapointResponse>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "instanceName",
            "baseName": "instance_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<MetricMemoryDatapointResponse>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MetricMemoryResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

