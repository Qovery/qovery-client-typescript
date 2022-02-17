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

import { URI } from './URI';
import { HttpFile } from '../http/http';

export class ApplicationGitRepositoryResponse {
    'hasAccess'?: boolean;
    'provider'?: ApplicationGitRepositoryResponseProviderEnum;
    'owner'?: string;
    'url'?: URI;
    /**
    * repository name
    */
    'name'?: string;
    'branch'?: string;
    'rootPath'?: string;
    /**
    * Git commit ID corresponding to the deployed version of the app
    */
    'deployedCommitId'?: string;
    /**
    * Git commit date corresponding to the deployed version of the app
    */
    'deployedCommitDate'?: Date;
    /**
    * Git commit user corresponding to the deployed version of the app
    */
    'deployedCommitContributor'?: string;
    'deployedCommitTag'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "hasAccess",
            "baseName": "has_access",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "ApplicationGitRepositoryResponseProviderEnum",
            "format": ""
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "URI",
            "format": "uri"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "branch",
            "baseName": "branch",
            "type": "string",
            "format": ""
        },
        {
            "name": "rootPath",
            "baseName": "root_path",
            "type": "string",
            "format": ""
        },
        {
            "name": "deployedCommitId",
            "baseName": "deployed_commit_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "deployedCommitDate",
            "baseName": "deployed_commit_date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "deployedCommitContributor",
            "baseName": "deployed_commit_contributor",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "deployedCommitTag",
            "baseName": "deployed_commit_tag",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApplicationGitRepositoryResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ApplicationGitRepositoryResponseProviderEnum = "GITHUB" | "GITLAB" ;

