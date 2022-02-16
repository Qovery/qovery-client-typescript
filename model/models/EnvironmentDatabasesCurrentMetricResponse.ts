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

import { EnvironmentDatabasesCurrentMetricResponseCpu } from './EnvironmentDatabasesCurrentMetricResponseCpu';
import { EnvironmentDatabasesCurrentMetricResponseMemory } from './EnvironmentDatabasesCurrentMetricResponseMemory';
import { EnvironmentDatabasesCurrentMetricResponseStorage } from './EnvironmentDatabasesCurrentMetricResponseStorage';
import { HttpFile } from '../http/http';

export class EnvironmentDatabasesCurrentMetricResponse {
    'database'?: string;
    'cpu'?: EnvironmentDatabasesCurrentMetricResponseCpu;
    'memory'?: EnvironmentDatabasesCurrentMetricResponseMemory;
    'storage'?: EnvironmentDatabasesCurrentMetricResponseStorage;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "database",
            "baseName": "database",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "cpu",
            "baseName": "cpu",
            "type": "EnvironmentDatabasesCurrentMetricResponseCpu",
            "format": ""
        },
        {
            "name": "memory",
            "baseName": "memory",
            "type": "EnvironmentDatabasesCurrentMetricResponseMemory",
            "format": ""
        },
        {
            "name": "storage",
            "baseName": "storage",
            "type": "EnvironmentDatabasesCurrentMetricResponseStorage",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EnvironmentDatabasesCurrentMetricResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

