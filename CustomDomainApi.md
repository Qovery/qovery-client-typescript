# .CustomDomainApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApplicationCustomDomain**](CustomDomainApi.md#createApplicationCustomDomain) | **POST** /application/{applicationId}/customDomain | Add custom domain to the application.
[**deleteCustomDomain**](CustomDomainApi.md#deleteCustomDomain) | **DELETE** /application/{applicationId}/customDomain/{customDomainId} | Delete a Custom Domain
[**editCustomDomain**](CustomDomainApi.md#editCustomDomain) | **PUT** /application/{applicationId}/customDomain/{customDomainId} | Edit a Custom Domain
[**getCustomDomainStatus**](CustomDomainApi.md#getCustomDomainStatus) | **GET** /application/{applicationId}/customDomain/{customDomainId}/status | Get Custom Domain status
[**listApplicationCustomDomain**](CustomDomainApi.md#listApplicationCustomDomain) | **GET** /application/{applicationId}/customDomain | List application custom domains


# **createApplicationCustomDomain**
> CustomDomainResponse createApplicationCustomDomain()

Add a custom domain to this application in order not to use qovery autogenerated domain

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomDomainApi(configuration);

let body:.CustomDomainApiCreateApplicationCustomDomainRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // CustomDomainRequest (optional)
  customDomainRequest: {
    domain: "my.domain.tld",
  },
};

apiInstance.createApplicationCustomDomain(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customDomainRequest** | **CustomDomainRequest**|  |
 **applicationId** | [**string**] | Application ID | defaults to undefined


### Return type

**CustomDomainResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Added application custom domain |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCustomDomain**
> void deleteCustomDomain()

To delete an CustomDomain you must have the project user permission

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomDomainApi(configuration);

let body:.CustomDomainApiDeleteCustomDomainRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // string | Custom Domain ID
  customDomainId: "customDomainId_example",
};

apiInstance.deleteCustomDomain(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined
 **customDomainId** | [**string**] | Custom Domain ID | defaults to undefined


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

# **editCustomDomain**
> CustomDomainResponse editCustomDomain()

To edit a Custom Domain  you must have the project user permission

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomDomainApi(configuration);

let body:.CustomDomainApiEditCustomDomainRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // string | Custom Domain ID
  customDomainId: "customDomainId_example",
  // CustomDomainRequest (optional)
  customDomainRequest: {
    domain: "my.domain.tld",
  },
};

apiInstance.editCustomDomain(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customDomainRequest** | **CustomDomainRequest**|  |
 **applicationId** | [**string**] | Application ID | defaults to undefined
 **customDomainId** | [**string**] | Custom Domain ID | defaults to undefined


### Return type

**CustomDomainResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Edit a CustomDomain |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCustomDomainStatus**
> CustomDomainResponse getCustomDomainStatus()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomDomainApi(configuration);

let body:.CustomDomainApiGetCustomDomainStatusRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // string | Custom Domain ID
  customDomainId: "customDomainId_example",
};

apiInstance.getCustomDomainStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined
 **customDomainId** | [**string**] | Custom Domain ID | defaults to undefined


### Return type

**CustomDomainResponse**

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

# **listApplicationCustomDomain**
> CustomDomainResponseList listApplicationCustomDomain()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomDomainApi(configuration);

let body:.CustomDomainApiListApplicationCustomDomainRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
};

apiInstance.listApplicationCustomDomain(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined


### Return type

**CustomDomainResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List custom domains |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

