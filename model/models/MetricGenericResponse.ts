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

import { MetricGenericDatapointResponse } from './MetricGenericDatapointResponse';
import { HttpFile } from '../http/http';

export class MetricGenericResponse {
    'instanceName': string;
    'data': Array<MetricGenericDatapointResponse>;

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
            "type": "Array<MetricGenericDatapointResponse>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MetricGenericResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

