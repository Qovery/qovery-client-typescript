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

import { ApplicationGitRepositoryResponse } from './ApplicationGitRepositoryResponse';
import { ApplicationPortResponse } from './ApplicationPortResponse';
import { ApplicationPortResponsePorts } from './ApplicationPortResponsePorts';
import { ApplicationStorageResponse } from './ApplicationStorageResponse';
import { ApplicationStorageResponseStorage } from './ApplicationStorageResponseStorage';
import { BaseResponse } from './BaseResponse';
import { Healthcheck } from './Healthcheck';
import { ReferenceObject } from './ReferenceObject';
import { HttpFile } from '../http/http';

export class ApplicationResponse {
    'environment'?: ReferenceObject;
    'gitRepository'?: ApplicationGitRepositoryResponse;
    /**
    * Maximum cpu that can be allocated to the application based on organization cluster configuration. unit is millicores (m). 1000m = 1 cpu
    */
    'maximumCpu'?: number;
    /**
    * Maximum memory that can be allocated to the application based on organization cluster configuration. unit is MB. 1024 MB = 1GB
    */
    'maximumMemory'?: number;
    /**
    * name is case insensitive
    */
    'name'?: string;
    /**
    * give a description to this application
    */
    'description'?: string;
    /**
    * `DOCKER` requires `dockerfile_path` `BUILDPACKS` does not require any `dockerfile_path` 
    */
    'buildMode'?: ApplicationResponseBuildModeEnum;
    /**
    * The path of the associated Dockerfile. Only if you are using build_mode = DOCKER
    */
    'dockerfilePath'?: string;
    /**
    * Development language of the application
    */
    'buildpackLanguage'?: ApplicationResponseBuildpackLanguageEnum;
    /**
    * unit is millicores (m). 1000m = 1 cpu
    */
    'cpu'?: number;
    /**
    * unit is MB. 1024 MB = 1GB
    */
    'memory'?: number;
    /**
    * Minimum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: 0 means that there is no application running. 
    */
    'minRunningInstances'?: number;
    /**
    * Maximum number of instances running. This resource auto-scale based on the CPU and Memory consumption. Note: -1 means that there is no limit. 
    */
    'maxRunningInstances'?: number;
    'healthcheck'?: Healthcheck;
    /**
    * Specify if the environment preview option is activated or not for this application. If activated, a preview environment will be automatically cloned at each pull request. 
    */
    'autoPreview'?: boolean;
    'id': string;
    'createdAt': Date;
    'updatedAt'?: Date;
    'storage'?: Array<ApplicationStorageResponseStorage>;
    'ports'?: Array<ApplicationPortResponsePorts>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "environment",
            "baseName": "environment",
            "type": "ReferenceObject",
            "format": ""
        },
        {
            "name": "gitRepository",
            "baseName": "git_repository",
            "type": "ApplicationGitRepositoryResponse",
            "format": ""
        },
        {
            "name": "maximumCpu",
            "baseName": "maximum_cpu",
            "type": "number",
            "format": ""
        },
        {
            "name": "maximumMemory",
            "baseName": "maximum_memory",
            "type": "number",
            "format": ""
        },
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
            "name": "buildMode",
            "baseName": "build_mode",
            "type": "ApplicationResponseBuildModeEnum",
            "format": ""
        },
        {
            "name": "dockerfilePath",
            "baseName": "dockerfile_path",
            "type": "string",
            "format": ""
        },
        {
            "name": "buildpackLanguage",
            "baseName": "buildpack_language",
            "type": "ApplicationResponseBuildpackLanguageEnum",
            "format": ""
        },
        {
            "name": "cpu",
            "baseName": "cpu",
            "type": "number",
            "format": ""
        },
        {
            "name": "memory",
            "baseName": "memory",
            "type": "number",
            "format": ""
        },
        {
            "name": "minRunningInstances",
            "baseName": "min_running_instances",
            "type": "number",
            "format": ""
        },
        {
            "name": "maxRunningInstances",
            "baseName": "max_running_instances",
            "type": "number",
            "format": ""
        },
        {
            "name": "healthcheck",
            "baseName": "healthcheck",
            "type": "Healthcheck",
            "format": ""
        },
        {
            "name": "autoPreview",
            "baseName": "auto_preview",
            "type": "boolean",
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
            "name": "storage",
            "baseName": "storage",
            "type": "Array<ApplicationStorageResponseStorage>",
            "format": ""
        },
        {
            "name": "ports",
            "baseName": "ports",
            "type": "Array<ApplicationPortResponsePorts>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApplicationResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

