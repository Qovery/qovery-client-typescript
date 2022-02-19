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

import { HttpFile } from '../http/http';

export class ApplicationPortRequestPorts {
    'name'?: string;
    /**
    * The listening port of your application
    */
    'internalPort': number;
    /**
    * The exposed port for your application. This is optional. If not set a default port will be used.
    */
    'externalPort'?: number;
    /**
    * Expose the port to the world
    */
    'publiclyAccessible': boolean;
    'protocol'?: ApplicationPortRequestPortsProtocolEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "internalPort",
            "baseName": "internal_port",
            "type": "number",
            "format": ""
        },
        {
            "name": "externalPort",
            "baseName": "external_port",
            "type": "number",
            "format": ""
        },
        {
            "name": "publiclyAccessible",
            "baseName": "publicly_accessible",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "protocol",
            "baseName": "protocol",
            "type": "ApplicationPortRequestPortsProtocolEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApplicationPortRequestPorts.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ApplicationPortRequestPortsProtocolEnum = "HTTPS" | "HTTP" | "TCP" | "UDP" ;

