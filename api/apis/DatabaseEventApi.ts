// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';


import { EventPaginatedResponseList } from '..model/models/EventPaginatedResponseList';

/**
 * no description
 */
export class DatabaseEventApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter
     * List database  events
     * @param databaseId Database ID
     * @param startId Starting point after which to return results
     */
    public async listDatabaseEvent(databaseId: string, startId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'databaseId' is not null or undefined
        if (databaseId === null || databaseId === undefined) {
            throw new RequiredError("DatabaseEventApi", "listDatabaseEvent", "databaseId");
        }



        // Path Params
        const localVarPath = '/database/{databaseId}/event'
            .replace('{' + 'databaseId' + '}', encodeURIComponent(String(databaseId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (startId !== undefined) {
            requestContext.setQueryParam("startId", ObjectSerializer.serialize(startId, "string", "uuid"));
        }


        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DatabaseEventApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDatabaseEvent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listDatabaseEvent(response: ResponseContext): Promise<EventPaginatedResponseList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EventPaginatedResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EventPaginatedResponseList", ""
            ) as EventPaginatedResponseList;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Access token is missing or invalid", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Access forbidden", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Resource not found", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EventPaginatedResponseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EventPaginatedResponseList", ""
            ) as EventPaginatedResponseList;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
