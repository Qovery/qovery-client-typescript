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

export class CreditCardRequest {
    'number': string;
    'cvv': string;
    'expiryMonth': number;
    'expiryYear': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "number",
            "baseName": "number",
            "type": "string",
            "format": ""
        },
        {
            "name": "cvv",
            "baseName": "cvv",
            "type": "string",
            "format": ""
        },
        {
            "name": "expiryMonth",
            "baseName": "expiry_month",
            "type": "number",
            "format": ""
        },
        {
            "name": "expiryYear",
            "baseName": "expiry_year",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreditCardRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

