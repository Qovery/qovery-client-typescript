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
import { HttpFile } from '../http/http';

export class ServiceResponse {
    /**
    * type of the service (application, database, job, gateway...)
    */
    'type'?: ServiceResponseTypeEnum;
    /**
    * name of the service
    */
    'name'?: string;
    /**
    * uuid of the associated service (application, database, job, gateway...)
    */
    'id': string;
    /**
    * Git commit ID corresponding to the deployed version of the application
    */
    'deployedCommitId'?: string;
    /**
    * uuid of the user that made the last update
    */
    'lastUpdatedBy'?: string;
    /**
    * global overview of resources consumption of the service
    */
    'consumedResourcesInPercent'?: number;
    /**
    * describes the typology of service (container, postgresl, redis...)
    */
    'serviceTypology'?: string;
    /**
    * for databases this field exposes the database version
    */
    'serviceVersion'?: string;
    'toUpdate'?: boolean;
    'createdAt': Date;
    'updatedAt'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ServiceResponseTypeEnum",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "deployedCommitId",
            "baseName": "deployed_commit_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastUpdatedBy",
            "baseName": "last_updated_by",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "consumedResourcesInPercent",
            "baseName": "consumed_resources_in_percent",
            "type": "number",
            "format": ""
        },
        {
            "name": "serviceTypology",
            "baseName": "service_typology",
            "type": "string",
            "format": ""
        },
        {
            "name": "serviceVersion",
            "baseName": "service_version",
            "type": "string",
            "format": ""
        },
        {
            "name": "toUpdate",
            "baseName": "to_update",
            "type": "boolean",
            "format": ""
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
        return ServiceResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

