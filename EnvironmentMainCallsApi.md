# .EnvironmentMainCallsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteEnvironment**](EnvironmentMainCallsApi.md#deleteEnvironment) | **DELETE** /environment/{environmentId} | Delete an environment
[**editEnvironment**](EnvironmentMainCallsApi.md#editEnvironment) | **PUT** /environment/{environmentId} | Edit an environment
[**getEnvironment**](EnvironmentMainCallsApi.md#getEnvironment) | **GET** /environment/{environmentId} | Get environment by ID
[**getEnvironmentStatus**](EnvironmentMainCallsApi.md#getEnvironmentStatus) | **GET** /environment/{environmentId}/status | Get environment status
[**listEnvironmentLinks**](EnvironmentMainCallsApi.md#listEnvironmentLinks) | **GET** /environment/{environmentId}/link | List all URLs of the environment


# **deleteEnvironment**
> void deleteEnvironment()

To delete an environment you must have the admin permission

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentMainCallsApi(configuration);

let body:.EnvironmentMainCallsApiDeleteEnvironmentRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
};

apiInstance.deleteEnvironment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] | Environment ID | defaults to undefined


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

# **editEnvironment**
> EnvironmentResponse editEnvironment()

To edit an environment you must have the admin permission

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentMainCallsApi(configuration);

let body:.EnvironmentMainCallsApiEditEnvironmentRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
  // EnvironmentEditRequest (optional)
  environmentEditRequest: {
    name: "name_example",
  },
};

apiInstance.editEnvironment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentEditRequest** | **EnvironmentEditRequest**|  |
 **environmentId** | [**string**] | Environment ID | defaults to undefined


### Return type

**EnvironmentResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Edit an environment |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**409** | Environment name within the project is already taken |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEnvironment**
> EnvironmentResponse getEnvironment()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentMainCallsApi(configuration);

let body:.EnvironmentMainCallsApiGetEnvironmentRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
};

apiInstance.getEnvironment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] | Environment ID | defaults to undefined


### Return type

**EnvironmentResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get environment by ID |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEnvironmentStatus**
> Status getEnvironmentStatus()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentMainCallsApi(configuration);

let body:.EnvironmentMainCallsApiGetEnvironmentStatusRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
};

apiInstance.getEnvironmentStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] | Environment ID | defaults to undefined


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

# **listEnvironmentLinks**
> LinkResponseList listEnvironmentLinks()

This will return all the custom domains and Qovery autogenerated domain for all the applications within this environment

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentMainCallsApi(configuration);

let body:.EnvironmentMainCallsApiListEnvironmentLinksRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
};

apiInstance.listEnvironmentLinks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] | Environment ID | defaults to undefined


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


