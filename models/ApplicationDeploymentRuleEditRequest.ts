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

import { ApplicationDeploymentRestriction } from './ApplicationDeploymentRestriction';
import { HttpFile } from '../http/http';

export class ApplicationDeploymentRuleEditRequest {
    'deploymentRestrictions'?: Array<ApplicationDeploymentRestriction>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "deploymentRestrictions",
            "baseName": "deployment_restrictions",
            "type": "Array<ApplicationDeploymentRestriction>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApplicationDeploymentRuleEditRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

