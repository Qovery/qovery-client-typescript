# .ApplicationDatabaseApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachDatabasetoApplication**](ApplicationDatabaseApi.md#attachDatabasetoApplication) | **POST** /application/{applicationId}/database/{targetDatabaseId} | Link a database to the application
[**attachLogicalDatabasetoApplication**](ApplicationDatabaseApi.md#attachLogicalDatabasetoApplication) | **POST** /application/{applicationId}/logicalDatabase/{targetLogicalDatabaseId} | Link a logical database to the application
[**listApplicationDatabase**](ApplicationDatabaseApi.md#listApplicationDatabase) | **GET** /application/{applicationId}/database | List linked databases
[**listApplicationLogicalDatabase**](ApplicationDatabaseApi.md#listApplicationLogicalDatabase) | **GET** /application/{applicationId}/logicalDatabase | List linked logical databases
[**removeDatabaseFromApplication**](ApplicationDatabaseApi.md#removeDatabaseFromApplication) | **DELETE** /application/{applicationId}/database/{targetDatabaseId} | Remove database link to this application.
[**removeLogicalDatabaseFromApplication**](ApplicationDatabaseApi.md#removeLogicalDatabaseFromApplication) | **DELETE** /application/{applicationId}/logicalDatabase/{targetLogicalDatabaseId} | Remove logical database link to this application.


# **attachDatabasetoApplication**
> DatabaseResponse attachDatabasetoApplication()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationDatabaseApi(configuration);

let body:.ApplicationDatabaseApiAttachDatabasetoApplicationRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // string | Target database ID
  targetDatabaseId: "targetDatabaseId_example",
};

apiInstance.attachDatabasetoApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined
 **targetDatabaseId** | [**string**] | Target database ID | defaults to undefined


### Return type

**DatabaseResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Linked the database to the application |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**409** | This database is already linked to the application |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **attachLogicalDatabasetoApplication**
> LogicalDatabaseResponse attachLogicalDatabasetoApplication()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationDatabaseApi(configuration);

let body:.ApplicationDatabaseApiAttachLogicalDatabasetoApplicationRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // string | Target database ID
  targetLogicalDatabaseId: "targetLogicalDatabaseId_example",
};

apiInstance.attachLogicalDatabasetoApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined
 **targetLogicalDatabaseId** | [**string**] | Target database ID | defaults to undefined


### Return type

**LogicalDatabaseResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Linked the Logical database to the application |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**409** | This logical database is already linked to the application |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listApplicationDatabase**
> DatabaseResponseList listApplicationDatabase()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationDatabaseApi(configuration);

let body:.ApplicationDatabaseApiListApplicationDatabaseRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
};

apiInstance.listApplicationDatabase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined


### Return type

**DatabaseResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List linked databases |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listApplicationLogicalDatabase**
> LogicalDatabaseResponseList listApplicationLogicalDatabase()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationDatabaseApi(configuration);

let body:.ApplicationDatabaseApiListApplicationLogicalDatabaseRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
};

apiInstance.listApplicationLogicalDatabase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined


### Return type

**LogicalDatabaseResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List linked databases |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeDatabaseFromApplication**
> void removeDatabaseFromApplication()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationDatabaseApi(configuration);

let body:.ApplicationDatabaseApiRemoveDatabaseFromApplicationRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // string | Target database ID
  targetDatabaseId: "targetDatabaseId_example",
};

apiInstance.removeDatabaseFromApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined
 **targetDatabaseId** | [**string**] | Target database ID | defaults to undefined


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
**204** | no content |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeLogicalDatabaseFromApplication**
> void removeLogicalDatabaseFromApplication()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationDatabaseApi(configuration);

let body:.ApplicationDatabaseApiRemoveLogicalDatabaseFromApplicationRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // string | Target database ID
  targetLogicalDatabaseId: "targetLogicalDatabaseId_example",
};

apiInstance.removeLogicalDatabaseFromApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined
 **targetLogicalDatabaseId** | [**string**] | Target database ID | defaults to undefined


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
**204** | no content |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


