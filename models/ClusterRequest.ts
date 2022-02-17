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

import { Cluster } from './Cluster';
import { ClusterFeatureRequest } from './ClusterFeatureRequest';
import { ClusterFeatureRequestFeatures } from './ClusterFeatureRequestFeatures';
import { HttpFile } from '../http/http';

export class ClusterRequest {
    /**
    * name is case-insensitive
    */
    'name': string;
    'description'?: string;
    'cloudProvider': ClusterRequestCloudProviderEnum;
    'region': string;
    'autoUpdate'?: boolean;
    /**
    * unit is millicores (m). 1000m = 1 cpu
    */
    'cpu'?: number;
    /**
    * unit is MB. 1024 MB = 1GB
    */
    'memory'?: number;
    'minRunningNodes'?: number;
    'maxRunningNodes'?: number;
    'features'?: Array<ClusterFeatureRequestFeatures>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "cloudProvider",
            "baseName": "cloud_provider",
            "type": "ClusterRequestCloudProviderEnum",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string",
            "format": ""
        },
        {
            "name": "autoUpdate",
            "baseName": "auto_update",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "cpu",
            "baseName": "cpu",
            "type": "number",
            "format": ""
        },
        {
            "name": "memory",
            "baseName": "memory",
            "type": "number",
            "format": ""
        },
        {
            "name": "minRunningNodes",
            "baseName": "min_running_nodes",
            "type": "number",
            "format": ""
        },
        {
            "name": "maxRunningNodes",
            "baseName": "max_running_nodes",
            "type": "number",
            "format": ""
        },
        {
            "name": "features",
            "baseName": "features",
            "type": "Array<ClusterFeatureRequestFeatures>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ClusterRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ClusterRequestCloudProviderEnum = "AWS" | "DIGITAL_OCEAN" | "SCALEWAY" ;
