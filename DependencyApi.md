# .DependencyApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplicationDependency**](DependencyApi.md#createApplicationDependency) | **POST** /application/{applicationId}/dependency/{targetApplicationId} | Add application dependency to this application.
[**listApplicationDependency**](DependencyApi.md#listApplicationDependency) | **GET** /application/{applicationId}/dependency | List application dependencies
[**removeApplicationDependency**](DependencyApi.md#removeApplicationDependency) | **DELETE** /application/{applicationId}/dependency/{targetApplicationId} | Remove application dependency to this application.


# **createApplicationDependency**
> ApplicationResponse createApplicationDependency()

Add application dependency to this application to prevent this application starting before the linked dependencies

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DependencyApi(configuration);

let body:.DependencyApiCreateApplicationDependencyRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // string | Target application ID
  targetApplicationId: "targetApplicationId_example",
};

apiInstance.createApplicationDependency(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined
 **targetApplicationId** | [**string**] | Target application ID | defaults to undefined


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
**200** | Add application dependencies |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listApplicationDependency**
> ApplicationResponseList listApplicationDependency()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DependencyApi(configuration);

let body:.DependencyApiListApplicationDependencyRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
};

apiInstance.listApplicationDependency(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined


### Return type

**ApplicationResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List dependencies |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeApplicationDependency**
> void removeApplicationDependency()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DependencyApi(configuration);

let body:.DependencyApiRemoveApplicationDependencyRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // string | Target application ID
  targetApplicationId: "targetApplicationId_example",
};

apiInstance.removeApplicationDependency(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined
 **targetApplicationId** | [**string**] | Target application ID | defaults to undefined


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


