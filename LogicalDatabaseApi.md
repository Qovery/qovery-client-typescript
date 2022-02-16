# .LogicalDatabaseApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteLogicalDatabase**](LogicalDatabaseApi.md#deleteLogicalDatabase) | **DELETE** /logicalDatabase/{logicalDatabaseId} | Delete a Logical database
[**editLogicalDatabase**](LogicalDatabaseApi.md#editLogicalDatabase) | **PUT** /logicalDatabase/{logicalDatabaseId} | Edit a logical database
[**editLogicalDatabaseCredentials**](LogicalDatabaseApi.md#editLogicalDatabaseCredentials) | **PUT** /logicalDatabase/{logicalDatabaseId}/credentials | Edit logical database credentials
[**getLogicalDatabase**](LogicalDatabaseApi.md#getLogicalDatabase) | **GET** /logicalDatabase/{logicalDatabaseId} | Get logical database by ID
[**getLogicalDatabaseCredentials**](LogicalDatabaseApi.md#getLogicalDatabaseCredentials) | **GET** /logicalDatabase/{logicalDatabaseId}/credentials | Get  credentials of the logical database
[**listLogicalDatabaseApplication**](LogicalDatabaseApi.md#listLogicalDatabaseApplication) | **GET** /logicalDatabase/{logicalDatabaseId}/application | List linked applications
[**listLogicalDatabaseDatabase**](LogicalDatabaseApi.md#listLogicalDatabaseDatabase) | **GET** /database/{databaseId}/logicalDatabase | List logical databases of a database


# **deleteLogicalDatabase**
> void deleteLogicalDatabase()

To delete a logical database you must have the project user permission

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LogicalDatabaseApi(configuration);

let body:.LogicalDatabaseApiDeleteLogicalDatabaseRequest = {
  // string | Logical Database ID
  logicalDatabaseId: "logicalDatabaseId_example",
};

apiInstance.deleteLogicalDatabase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logicalDatabaseId** | [**string**] | Logical Database ID | defaults to undefined


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

# **editLogicalDatabase**
> LogicalDatabaseResponse editLogicalDatabase()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LogicalDatabaseApi(configuration);

let body:.LogicalDatabaseApiEditLogicalDatabaseRequest = {
  // string | Logical Database ID
  logicalDatabaseId: "logicalDatabaseId_example",
  // LogicalDatabaseRequest (optional)
  logicalDatabaseRequest: {
    name: "name_example",
    description: "description_example",
  },
};

apiInstance.editLogicalDatabase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logicalDatabaseRequest** | **LogicalDatabaseRequest**|  |
 **logicalDatabaseId** | [**string**] | Logical Database ID | defaults to undefined


### Return type

**LogicalDatabaseResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Edit a Logical Database |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **editLogicalDatabaseCredentials**
> CredentialsResponse editLogicalDatabaseCredentials()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LogicalDatabaseApi(configuration);

let body:.LogicalDatabaseApiEditLogicalDatabaseCredentialsRequest = {
  // string | Logical Database ID
  logicalDatabaseId: "logicalDatabaseId_example",
  // CredentialsRequest (optional)
  credentialsRequest: {
    login: "login_example",
    password: "password_example",
  },
};

apiInstance.editLogicalDatabaseCredentials(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentialsRequest** | **CredentialsRequest**|  |
 **logicalDatabaseId** | [**string**] | Logical Database ID | defaults to undefined


### Return type

**CredentialsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Edit logical database credentials |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getLogicalDatabase**
> LogicalDatabaseResponse getLogicalDatabase()

A logical database exists inside a database. The database is a service that exists within an environment, that you can deploy, and that has allocated resources. A database can have several logical databases

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LogicalDatabaseApi(configuration);

let body:.LogicalDatabaseApiGetLogicalDatabaseRequest = {
  // string | Logical Database ID
  logicalDatabaseId: "logicalDatabaseId_example",
};

apiInstance.getLogicalDatabase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logicalDatabaseId** | [**string**] | Logical Database ID | defaults to undefined


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
**200** | Get logical database by ID |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getLogicalDatabaseCredentials**
> CredentialsResponse getLogicalDatabaseCredentials()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LogicalDatabaseApi(configuration);

let body:.LogicalDatabaseApiGetLogicalDatabaseCredentialsRequest = {
  // string | Logical Database ID
  logicalDatabaseId: "logicalDatabaseId_example",
};

apiInstance.getLogicalDatabaseCredentials(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logicalDatabaseId** | [**string**] | Logical Database ID | defaults to undefined


### Return type

**CredentialsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | get credentials |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listLogicalDatabaseApplication**
> ApplicationResponseList listLogicalDatabaseApplication()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LogicalDatabaseApi(configuration);

let body:.LogicalDatabaseApiListLogicalDatabaseApplicationRequest = {
  // string | Logical Database ID
  logicalDatabaseId: "logicalDatabaseId_example",
};

apiInstance.listLogicalDatabaseApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logicalDatabaseId** | [**string**] | Logical Database ID | defaults to undefined


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
**200** | List linked applications |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listLogicalDatabaseDatabase**
> LogicalDatabaseResponseList listLogicalDatabaseDatabase()

A logical database exists inside a database. The database is a service that exists within an environment, that you can deploy, and that has allocated resources. A database can have several logical databases

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LogicalDatabaseApi(configuration);

let body:.LogicalDatabaseApiListLogicalDatabaseDatabaseRequest = {
  // string | Database ID
  databaseId: "databaseId_example",
};

apiInstance.listLogicalDatabaseDatabase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | [**string**] | Database ID | defaults to undefined


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
**200** | List logical databases |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


