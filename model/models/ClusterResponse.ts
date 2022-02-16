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

import { BaseResponse } from './BaseResponse';
import { Cluster } from './Cluster';
import { ClusterFeatureResponse } from './ClusterFeatureResponse';
import { HttpFile } from '../http/http';

export class ClusterResponse {
    /**
    * This is an estimation of the cost this cluster will represent on your cloud proider bill, based on your current configuration
    */
    'estimatedCloudProviderCost'?: number;
    'status'?: ClusterResponseStatusEnum;
    'hasAccess'?: boolean;
    'version'?: string;
    'isDefault'?: boolean;
    'id': string;
    'createdAt': Date;
    'updatedAt'?: Date;
    /**
    * name is case-insensitive
    */
    'name': string;
    'description'?: string;
    'cloudProvider': ClusterResponseCloudProviderEnum;
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
    'title'?: string;
    'costPerMonthInCents'?: number;
    'costPerMonth'?: number;
    'currencyCode'?: string;
    'valueType'?: ClusterResponseValueTypeEnum;
    'value'?: string;
    'isValueUpdatable'?: boolean;
    'acceptedValues'?: Array<string | boolean>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "estimatedCloudProviderCost",
            "baseName": "estimated_cloud_provider_cost",
            "type": "number",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ClusterResponseStatusEnum",
            "format": ""
        },
        {
            "name": "hasAccess",
            "baseName": "has_access",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        },
        {
            "name": "isDefault",
            "baseName": "is_default",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date",
            "format": "date-time"
        },
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
            "type": "ClusterResponseCloudProviderEnum",
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
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "costPerMonthInCents",
            "baseName": "cost_per_month_in_cents",
            "type": "number",
            "format": ""
        },
        {
            "name": "costPerMonth",
            "baseName": "cost_per_month",
            "type": "number",
            "format": ""
        },
        {
            "name": "currencyCode",
            "baseName": "currency_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "valueType",
            "baseName": "value_type",
            "type": "ClusterResponseValueTypeEnum",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "isValueUpdatable",
            "baseName": "is_value_updatable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "acceptedValues",
            "baseName": "accepted_values",
            "type": "Array<string | boolean>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ClusterResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ClusterResponseStatusEnum = "READY" | "RUNNING" | "WARNING" ;
export type ClusterResponseCloudProviderEnum = "AWS" | "DIGITAL_OCEAN" | "SCALEWAY" ;
export type ClusterResponseValueTypeEnum = "BOOLEAN" ;

