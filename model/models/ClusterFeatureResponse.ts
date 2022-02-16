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

export class ClusterFeatureResponse {
    'id'?: string;
    'title'?: string;
    'description'?: string;
    'costPerMonthInCents'?: number;
    'costPerMonth'?: number;
    'currencyCode'?: string;
    'valueType'?: ClusterFeatureResponseValueTypeEnum;
    'value'?: string;
    'isValueUpdatable'?: boolean;
    'acceptedValues'?: Array<string | boolean>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "title",
            "baseName": "title",
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
            "type": "ClusterFeatureResponseValueTypeEnum",
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
        return ClusterFeatureResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ClusterFeatureResponseValueTypeEnum = "BOOLEAN" ;

