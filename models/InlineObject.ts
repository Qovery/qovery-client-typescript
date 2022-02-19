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

import { ProjectProjectIdDeploymentRuleOrderProjectDeploymentRuleIdsInOrder } from './ProjectProjectIdDeploymentRuleOrderProjectDeploymentRuleIdsInOrder';
import { HttpFile } from '../http/http';

export class InlineObject {
    'projectDeploymentRuleIdsInOrder'?: Array<ProjectProjectIdDeploymentRuleOrderProjectDeploymentRuleIdsInOrder>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "projectDeploymentRuleIdsInOrder",
            "baseName": "project_deployment_rule_ids_in_order",
            "type": "Array<ProjectProjectIdDeploymentRuleOrderProjectDeploymentRuleIdsInOrder>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineObject.attributeTypeMap;
    }

    public constructor() {
    }
}

