# .OrganizationMainCallsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrganization**](OrganizationMainCallsApi.md#createOrganization) | **POST** /organization | Create an organization
[**deleteOrganization**](OrganizationMainCallsApi.md#deleteOrganization) | **DELETE** /organization/{organizationId} | Delete an organization
[**editOrganization**](OrganizationMainCallsApi.md#editOrganization) | **PUT** /organization/{organizationId} | Edit an organization
[**getOrganization**](OrganizationMainCallsApi.md#getOrganization) | **GET** /organization/{organizationId} | Get organization by ID
[**listOrganization**](OrganizationMainCallsApi.md#listOrganization) | **GET** /organization | List user organizations


# **createOrganization**
> OrganizationResponse createOrganization()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationMainCallsApi(configuration);

let body:.OrganizationMainCallsApiCreateOrganizationRequest = {
  // OrganizationRequest (optional)
  organizationRequest: {
    name: "name_example",
    description: "description_example",
    plan: "COMMUNITY",
    websiteUrl: "websiteUrl_example",
    repository: "repository_example",
    logoUrl: "logoUrl_example",
    iconUrl: "iconUrl_example",
  },
};

apiInstance.createOrganization(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationRequest** | **OrganizationRequest**|  |


### Return type

**OrganizationResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Create organization |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**409** | Organization name is already taken |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteOrganization**
> void deleteOrganization()

To delete an organization you must have the admin permission

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationMainCallsApi(configuration);

let body:.OrganizationMainCallsApiDeleteOrganizationRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
};

apiInstance.deleteOrganization(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**void**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The resource was deleted successfully |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **editOrganization**
> OrganizationResponse editOrganization()

To edit an organization you must have the admin permission

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationMainCallsApi(configuration);

let body:.OrganizationMainCallsApiEditOrganizationRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // OrganizationEditRequest (optional)
  organizationEditRequest: {
    name: "name_example",
    description: "description_example",
    websiteUrl: "websiteUrl_example",
    repository: "repository_example",
    logoUrl: "logoUrl_example",
    iconUrl: "iconUrl_example",
  },
};

apiInstance.editOrganization(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationEditRequest** | **OrganizationEditRequest**|  |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**OrganizationResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Edit an organization |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**409** | Organization name is already taken |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOrganization**
> OrganizationResponse getOrganization()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationMainCallsApi(configuration);

let body:.OrganizationMainCallsApiGetOrganizationRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
};

apiInstance.getOrganization(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**OrganizationResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get organization by ID |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOrganization**
> OrganizationResponseList listOrganization()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrganizationMainCallsApi(configuration);

let body:any = {};

apiInstance.listOrganization(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**OrganizationResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List organizations |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


