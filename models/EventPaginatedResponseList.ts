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

import { EventResponse } from './EventResponse';
import { PaginationDataResponse } from './PaginationDataResponse';
import { HttpFile } from '../http/http';

export class EventPaginatedResponseList {
    'results'?: Array<EventResponse>;
    'page': number;
    'pageSize': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<EventResponse>",
            "format": ""
        },
        {
            "name": "page",
            "baseName": "page",
            "type": "number",
            "format": ""
        },
        {
            "name": "pageSize",
            "baseName": "page_size",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EventPaginatedResponseList.attributeTypeMap;
    }

    public constructor() {
    }
}

