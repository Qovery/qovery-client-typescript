/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * OpenAPI spec version: 1.0.2
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { BaseResponse } from './BaseResponse';
import { CustomDomainRequest } from './CustomDomainRequest';
import { HttpFile } from '../http/http';

export class CustomDomainResponse {
    /**
    * URL provided by Qovery. You must create a CNAME on your DNS provider using that URL
    */
    'validationDomain'?: string;
    'status'?: CustomDomainResponseStatusEnum;
    'id': string;
    'createdAt': Date;
    'updatedAt'?: Date;
    /**
    * your custom domain
    */
    'domain': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "validationDomain",
            "baseName": "validation_domain",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "CustomDomainResponseStatusEnum",
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
            "name": "domain",
            "baseName": "domain",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomDomainResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

