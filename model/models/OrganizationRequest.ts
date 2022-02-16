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

export class OrganizationRequest {
    /**
    * name is case insensitive
    */
    'name': string;
    'description'?: string;
    'plan': OrganizationRequestPlanEnum;
    'websiteUrl'?: string;
    'repository'?: string;
    'logoUrl'?: string;
    'iconUrl'?: string;

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
            "name": "plan",
            "baseName": "plan",
            "type": "OrganizationRequestPlanEnum",
            "format": ""
        },
        {
            "name": "websiteUrl",
            "baseName": "website_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "repository",
            "baseName": "repository",
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
            "name": "iconUrl",
            "baseName": "icon_url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrganizationRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type OrganizationRequestPlanEnum = "COMMUNITY" | "FREE" | "PROFESSIONAL" | "BUSINESS" ;

