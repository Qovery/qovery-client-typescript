# .ApplicationMainCallsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplicationTag**](ApplicationMainCallsApi.md#createApplicationTag) | **POST** /application/{applicationId}/tag | Add application tag
[**deleteApplication**](ApplicationMainCallsApi.md#deleteApplication) | **DELETE** /application/{applicationId} | Delete application
[**deleteApplicationTag**](ApplicationMainCallsApi.md#deleteApplicationTag) | **DELETE** /application/{applicationId}/tag/{tagId} | Delete application tag
[**editApplication**](ApplicationMainCallsApi.md#editApplication) | **PUT** /application/{applicationId} | Edit application
[**getApplication**](ApplicationMainCallsApi.md#getApplication) | **GET** /application/{applicationId} | Get application by ID
[**getApplicationStatus**](ApplicationMainCallsApi.md#getApplicationStatus) | **GET** /application/{applicationId}/status | Get application status
[**listApplicationCommit**](ApplicationMainCallsApi.md#listApplicationCommit) | **GET** /application/{applicationId}/commit | List last commits
[**listApplicationContributor**](ApplicationMainCallsApi.md#listApplicationContributor) | **GET** /application/{applicationId}/contributor | List contributors
[**listApplicationLinks**](ApplicationMainCallsApi.md#listApplicationLinks) | **GET** /application/{applicationId}/link | List all URLs of the application
[**listApplicationTag**](ApplicationMainCallsApi.md#listApplicationTag) | **GET** /application/{applicationId}/tag | List tags


# **createApplicationTag**
> TagResponseList createApplicationTag()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationMainCallsApi(configuration);

let body:.ApplicationMainCallsApiCreateApplicationTagRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // TagRequest (optional)
  tagRequest: {
    name: "name_example",
  },
};

apiInstance.createApplicationTag(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagRequest** | **TagRequest**|  |
 **applicationId** | [**string**] | Application ID | defaults to undefined


### Return type

**TagResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Create application |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteApplication**
> void deleteApplication()

To delete the application you must have the admin permission

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationMainCallsApi(configuration);

let body:.ApplicationMainCallsApiDeleteApplicationRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
};

apiInstance.deleteApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined


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

# **deleteApplicationTag**
> void deleteApplicationTag()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationMainCallsApi(configuration);

let body:.ApplicationMainCallsApiDeleteApplicationTagRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // string | Tag ID
  tagId: "tagId_example",
};

apiInstance.deleteApplicationTag(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined
 **tagId** | [**string**] | Tag ID | defaults to undefined


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

# **editApplication**
> ApplicationResponse editApplication()

- To edit the application you must have the admin permission. - For port edition, if you provide a port id, we will update the corresponding port. If you don't we will create a new one. If you remove a port from the payload, we will delete it. - For storage edition, if you provide a storage id, we will update the corresponding storage. If you don't we will create a new one. If you remove a storage from the payload, we will delete it. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationMainCallsApi(configuration);

let body:.ApplicationMainCallsApiEditApplicationRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // ApplicationEditRequest (optional)
  applicationEditRequest: ,
};

apiInstance.editApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationEditRequest** | **ApplicationEditRequest**|  |
 **applicationId** | [**string**] | Application ID | defaults to undefined


### Return type

**ApplicationResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Edit application |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**409** | Application name within the environment is already taken |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getApplication**
> ApplicationResponse getApplication()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationMainCallsApi(configuration);

let body:.ApplicationMainCallsApiGetApplicationRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
};

apiInstance.getApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined


### Return type

**ApplicationResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get application by ID |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getApplicationStatus**
> Status getApplicationStatus()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationMainCallsApi(configuration);

let body:.ApplicationMainCallsApiGetApplicationStatusRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
};

apiInstance.getApplicationStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined


### Return type

**Status**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get status |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listApplicationCommit**
> CommitResponseList listApplicationCommit()

Returns list of the last 100 commits made on the repository linked to the application

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationMainCallsApi(configuration);

let body:.ApplicationMainCallsApiListApplicationCommitRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // string | Starting point after which to return results (optional)
  startId: "startId_example",
  // string | Git Commit ID (optional)
  gitCommitId: "gitCommitId_example",
};

apiInstance.listApplicationCommit(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined
 **startId** | [**string**] | Starting point after which to return results | (optional) defaults to undefined
 **gitCommitId** | [**string**] | Git Commit ID | (optional) defaults to undefined


### Return type

**CommitResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List commits |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listApplicationContributor**
> UserResponseList listApplicationContributor()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationMainCallsApi(configuration);

let body:.ApplicationMainCallsApiListApplicationContributorRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
};

apiInstance.listApplicationContributor(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined


### Return type

**UserResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List application contributors |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listApplicationLinks**
> LinkResponseList listApplicationLinks()

This will return all the custom domains and Qovery autogenerated domain for the given application

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationMainCallsApi(configuration);

let body:.ApplicationMainCallsApiListApplicationLinksRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
};

apiInstance.listApplicationLinks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined


### Return type

**LinkResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List links |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listApplicationTag**
> TagResponseList listApplicationTag()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationMainCallsApi(configuration);

let body:.ApplicationMainCallsApiListApplicationTagRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
};

apiInstance.listApplicationTag(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined


### Return type

**TagResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List application tags |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


