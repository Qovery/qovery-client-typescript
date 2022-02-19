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

import { ClusterRoutingTableRequestRoutes } from './ClusterRoutingTableRequestRoutes';
import { HttpFile } from '../http/http';

export class ClusterRoutingTableRequest {
    'routes': Array<ClusterRoutingTableRequestRoutes>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "routes",
            "baseName": "routes",
            "type": "Array<ClusterRoutingTableRequestRoutes>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ClusterRoutingTableRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

