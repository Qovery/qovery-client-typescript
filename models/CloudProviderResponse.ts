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

import { ClusterRegionResponse } from './ClusterRegionResponse';
import { HttpFile } from '../http/http';

export class CloudProviderResponse {
    'shortName'?: string;
    'name'?: string;
    'logoUrl'?: string;
    'regions'?: Array<ClusterRegionResponse>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "shortName",
            "baseName": "short_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "logoUrl",
            "baseName": "logo_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "regions",
            "baseName": "regions",
            "type": "Array<ClusterRegionResponse>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CloudProviderResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

