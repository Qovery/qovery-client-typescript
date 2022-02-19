/**
 * Qovery API
 * - Qovery is the fastest way to deploy your full-stack apps on any Cloud provider. - ℹ️ The API is stable and still in development. 
 *
 * OpenAPI spec version: 1.0.1
 * Contact: support+api+documentation@qovery.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ReferenceObject } from './ReferenceObject';
import { Status } from './Status';
import { HttpFile } from '../http/http';

export class ReferenceObjectStatusResponse {
    'id': string;
    /**
    * Status is a state machine. It starts with `BUILDING` or `DEPLOYING` state (or `INITIALIZED`if auto-deploy is deactivated). Then finish with `*_ERROR` or any termination state. 
    */
    'state': ReferenceObjectStatusResponseStateEnum;
    /**
    * message related to the state
    */
    'message'?: string;
    'serviceDeploymentStatus'?: ReferenceObjectStatusResponseServiceDeploymentStatusEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "ReferenceObjectStatusResponseStateEnum",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "serviceDeploymentStatus",
            "baseName": "service_deployment_status",
            "type": "ReferenceObjectStatusResponseServiceDeploymentStatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ReferenceObjectStatusResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ReferenceObjectStatusResponseStateEnum = "INITIALIZED" | "BUILDING_QUEUED" | "BUILDING" | "BUILD_ERROR" | "BUILT" | "DEPLOYMENT_QUEUED" | "DEPLOYING" | "DEPLOYMENT_ERROR" | "DEPLOYED" | "STOP_QUEUED" | "STOPPING" | "STOP_ERROR" | "STOPPED" | "DELETE_QUEUED" | "DELETING" | "DELETE_ERROR" | "DELETED" | "RUNNING" | "RUNNING_ERROR" | "CANCEL_QUEUED" | "CANCELLING" | "CANCEL_ERROR" | "CANCELLED" ;
export type ReferenceObjectStatusResponseServiceDeploymentStatusEnum = "NEVER_DEPLOYED" | "UP_TO_DATE" | "OUT_OF_DATE" ;

