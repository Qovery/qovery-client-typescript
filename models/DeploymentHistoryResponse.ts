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

import { BaseResponse } from './BaseResponse';
import { CommitResponse } from './CommitResponse';
import { HttpFile } from '../http/http';

export class DeploymentHistoryResponse {
    'commit'?: CommitResponse;
    'status'?: DeploymentHistoryResponseStatusEnum;
    'id': string;
    'createdAt': Date;
    'updatedAt'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "commit",
            "baseName": "commit",
            "type": "CommitResponse",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "DeploymentHistoryResponseStatusEnum",
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
        }    ];

    static getAttributeTypeMap() {
        return DeploymentHistoryResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

