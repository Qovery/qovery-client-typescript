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

import { ApplicationGitRepositoryRequest } from './ApplicationGitRepositoryRequest';
import { ApplicationPortRequest } from './ApplicationPortRequest';
import { ApplicationPortRequestPorts } from './ApplicationPortRequestPorts';
import { ApplicationStorageRequest } from './ApplicationStorageRequest';
import { ApplicationStorageRequestStorage } from './ApplicationStorageRequestStorage';
import { Healthcheck } from './Healthcheck';
import { HttpFile } from '../http/http';

export class ApplicationRequest {
    /**
    * name is case insensitive
    */
    'name': string;
    /**
    * give a description to this application
    */
    'description'?: string;
    'gitRepository': ApplicationGitRepositoryRequest;
    /**
    * `DOCKER` requires `dockerfile_path` `BUILDPACKS` does not require any `dockerfile_path` 
    */
    'buildMode'?: ApplicationRequestBuildModeEnum;
    /**
    * The path of the associated Dockerfile. Only if you are using build_mode = DOCKER
    */
    'dockerfilePath'?: string;
    /**
    * Development language of the application
    */
    'buildpackLanguage'?: ApplicationRequestBuildpackLanguageEnum;
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
    'storage'?: Array<ApplicationStorageRequestStorage>;
    'ports'?: Array<ApplicationPortRequestPorts>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "name": "gitRepository",
            "baseName": "git_repository",
            "type": "ApplicationGitRepositoryRequest",
            "format": ""
        },
        {
            "name": "buildMode",
            "baseName": "build_mode",
            "type": "ApplicationRequestBuildModeEnum",
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
            "type": "ApplicationRequestBuildpackLanguageEnum",
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
            "name": "storage",
            "baseName": "storage",
            "type": "Array<ApplicationStorageRequestStorage>",
            "format": ""
        },
        {
            "name": "ports",
            "baseName": "ports",
            "type": "Array<ApplicationPortRequestPorts>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApplicationRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

