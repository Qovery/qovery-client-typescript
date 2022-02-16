# .EnvironmentsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEnvironment**](EnvironmentsApi.md#createEnvironment) | **POST** /project/{projectId}/environment | Create an environment
[**getProjectEnvironmentServiceNumber**](EnvironmentsApi.md#getProjectEnvironmentServiceNumber) | **GET** /project/{projectId}/environment/stats | List total number of services for each environment of the project
[**getProjectEnvironmentStatus**](EnvironmentsApi.md#getProjectEnvironmentStatus) | **GET** /project/{projectId}/environment/status | List environments statuses
[**listEnvironment**](EnvironmentsApi.md#listEnvironment) | **GET** /project/{projectId}/environment | List environments


# **createEnvironment**
> EnvironmentResponse createEnvironment()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentsApi(configuration);

let body:.EnvironmentsApiCreateEnvironmentRequest = {
  // string | Project ID
  projectId: "projectId_example",
  // EnvironmentRequest (optional)
  environmentRequest: {
    name: "name_example",
    cluster: "cluster_example",
    mode: "PRODUCTION",
  },
};

apiInstance.createEnvironment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentRequest** | **EnvironmentRequest**|  |
 **projectId** | [**string**] | Project ID | defaults to undefined


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
**201** | Create environment |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**409** | Environment name within the project is already taken |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProjectEnvironmentServiceNumber**
> EnvironmentStatsResponseList getProjectEnvironmentServiceNumber()

Returns a list of environment ids, and for each its total numberof services

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentsApi(configuration);

let body:.EnvironmentsApiGetProjectEnvironmentServiceNumberRequest = {
  // string | Project ID
  projectId: "projectId_example",
};

apiInstance.getProjectEnvironmentServiceNumber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Project ID | defaults to undefined


### Return type

**EnvironmentStatsResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get number of services |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProjectEnvironmentStatus**
> Status getProjectEnvironmentStatus()

Returns a list of environments with only their id and status.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentsApi(configuration);

let body:.EnvironmentsApiGetProjectEnvironmentStatusRequest = {
  // string | Project ID
  projectId: "projectId_example",
};

apiInstance.getProjectEnvironmentStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Project ID | defaults to undefined


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

# **listEnvironment**
> EnvironmentResponseList listEnvironment()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EnvironmentsApi(configuration);

let body:.EnvironmentsApiListEnvironmentRequest = {
  // string | Project ID
  projectId: "projectId_example",
};

apiInstance.listEnvironment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | Project ID | defaults to undefined


### Return type

**EnvironmentResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List environments |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


