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

export class DeployRequest {
    /**
    * Commit ID to deploy
    */
    'gitCommitId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "gitCommitId",
            "baseName": "git_commit_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DeployRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
