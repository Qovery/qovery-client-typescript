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

import { HttpFile } from '../http/http';

export class CommitResponse {
    'createdAt': Date;
    'gitCommitId': string;
    'tag': string;
    'message': string;
    'authorName': string;
    'authorAvatarUrl'?: string;
    'commitPageUrl'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "gitCommitId",
            "baseName": "git_commit_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "tag",
            "baseName": "tag",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "authorName",
            "baseName": "author_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "authorAvatarUrl",
            "baseName": "author_avatar_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "commitPageUrl",
            "baseName": "commit_page_url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CommitResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

