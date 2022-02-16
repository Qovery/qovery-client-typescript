# .ApplicationsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplication**](ApplicationsApi.md#createApplication) | **POST** /environment/{environmentId}/application | Create an application
[**getEnvironmentApplicationCurrentInstance**](ApplicationsApi.md#getEnvironmentApplicationCurrentInstance) | **GET** /environment/{environmentId}/application/instance | List running instances with CPU and RAM usage for each application
[**getEnvironmentApplicationCurrentScale**](ApplicationsApi.md#getEnvironmentApplicationCurrentScale) | **GET** /environment/{environmentId}/application/currentScale | List current scaling information for each application
[**getEnvironmentApplicationCurrentStorage**](ApplicationsApi.md#getEnvironmentApplicationCurrentStorage) | **GET** /environment/{environmentId}/application/currentStorage | List current storage disk usage for each application
[**getEnvironmentApplicationStatus**](ApplicationsApi.md#getEnvironmentApplicationStatus) | **GET** /environment/{environmentId}/application/status | List all environment applications statuses
[**getEnvironmentApplicationSupportedLanguages**](ApplicationsApi.md#getEnvironmentApplicationSupportedLanguages) | **GET** /environment/{environmentId}/application/supportedLanguage | List supported languages
[**listApplication**](ApplicationsApi.md#listApplication) | **GET** /environment/{environmentId}/application | List applications


# **createApplication**
> ApplicationResponse createApplication()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationsApi(configuration);

let body:.ApplicationsApiCreateApplicationRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
  // ApplicationRequest (optional)
  applicationRequest: ,
};

apiInstance.createApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationRequest** | **ApplicationRequest**|  |
 **environmentId** | [**string**] | Environment ID | defaults to undefined


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
**201** | Create application |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**409** | Application name within the environment is already taken |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEnvironmentApplicationCurrentInstance**
> EnvironmentApplicationsInstanceResponseList getEnvironmentApplicationCurrentInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationsApi(configuration);

let body:.ApplicationsApiGetEnvironmentApplicationCurrentInstanceRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
};

apiInstance.getEnvironmentApplicationCurrentInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] | Environment ID | defaults to undefined


### Return type

**EnvironmentApplicationsInstanceResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Know current resource consumption for each application of the environment |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEnvironmentApplicationCurrentScale**
> EnvironmentApplicationsCurrentScaleResponseList getEnvironmentApplicationCurrentScale()

Returns min, max, and running number of instances for each application

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationsApi(configuration);

let body:.ApplicationsApiGetEnvironmentApplicationCurrentScaleRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
};

apiInstance.getEnvironmentApplicationCurrentScale(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] | Environment ID | defaults to undefined


### Return type

**EnvironmentApplicationsCurrentScaleResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | list applications with current scaling |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEnvironmentApplicationCurrentStorage**
> EnvironmentApplicationsStorageResponseList getEnvironmentApplicationCurrentStorage()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationsApi(configuration);

let body:.ApplicationsApiGetEnvironmentApplicationCurrentStorageRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
};

apiInstance.getEnvironmentApplicationCurrentStorage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] | Environment ID | defaults to undefined


### Return type

**EnvironmentApplicationsStorageResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Current storage disk usage |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEnvironmentApplicationStatus**
> ReferenceObjectStatusResponseList getEnvironmentApplicationStatus()

Returns a list of applications with only their id and status.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationsApi(configuration);

let body:.ApplicationsApiGetEnvironmentApplicationStatusRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
};

apiInstance.getEnvironmentApplicationStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] | Environment ID | defaults to undefined


### Return type

**ReferenceObjectStatusResponseList**

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

# **getEnvironmentApplicationSupportedLanguages**
> EnvironmentApplicationsSupportedLanguageList getEnvironmentApplicationSupportedLanguages()

Returns list of languages supported by Buildpacks.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationsApi(configuration);

let body:.ApplicationsApiGetEnvironmentApplicationSupportedLanguagesRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
};

apiInstance.getEnvironmentApplicationSupportedLanguages(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] | Environment ID | defaults to undefined


### Return type

**EnvironmentApplicationsSupportedLanguageList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Supported languages list. |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listApplication**
> ApplicationResponseList listApplication()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationsApi(configuration);

let body:.ApplicationsApiListApplicationRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
  // boolean | return (or not) results that must be updated (optional)
  toUpdate: false,
};

apiInstance.listApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] | Environment ID | defaults to undefined
 **toUpdate** | [**boolean**] | return (or not) results that must be updated | (optional) defaults to undefined


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
**200** | List applications |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


