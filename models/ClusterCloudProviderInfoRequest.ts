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

import { ClusterCloudProviderInfoRequestCredentials } from './ClusterCloudProviderInfoRequestCredentials';
import { HttpFile } from '../http/http';

export class ClusterCloudProviderInfoRequest {
    'cloudProvider'?: ClusterCloudProviderInfoRequestCloudProviderEnum;
    'credentials'?: ClusterCloudProviderInfoRequestCredentials;
    'region'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cloudProvider",
            "baseName": "cloud_provider",
            "type": "ClusterCloudProviderInfoRequestCloudProviderEnum",
            "format": ""
        },
        {
            "name": "credentials",
            "baseName": "credentials",
            "type": "ClusterCloudProviderInfoRequestCredentials",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ClusterCloudProviderInfoRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ClusterCloudProviderInfoRequestCloudProviderEnum = "AWS" | "DIGITAL_OCEAN" | "SCALEWAY" ;

