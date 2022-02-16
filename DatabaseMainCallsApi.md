# .DatabaseMainCallsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteDatabase**](DatabaseMainCallsApi.md#deleteDatabase) | **DELETE** /database/{databaseId} | Delete a database 
[**editDatabase**](DatabaseMainCallsApi.md#editDatabase) | **PUT** /database/{databaseId} | Edit a database 
[**editDatabaseCredentials**](DatabaseMainCallsApi.md#editDatabaseCredentials) | **PUT** /database/{databaseId}/masterCredentials | Edit database  master credentials
[**getDatabase**](DatabaseMainCallsApi.md#getDatabase) | **GET** /database/{databaseId} | Get database by ID
[**getDatabaseMasterCredentials**](DatabaseMainCallsApi.md#getDatabaseMasterCredentials) | **GET** /database/{databaseId}/masterCredentials | Get master credentials of the database
[**getDatabaseStatus**](DatabaseMainCallsApi.md#getDatabaseStatus) | **GET** /database/{databaseId}/status | Get database status
[**listDatabaseVersion**](DatabaseMainCallsApi.md#listDatabaseVersion) | **GET** /database/{databaseId}/version | List eligible versions for the database


# **deleteDatabase**
> void deleteDatabase()

To delete a database you must have the admin permission

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatabaseMainCallsApi(configuration);

let body:.DatabaseMainCallsApiDeleteDatabaseRequest = {
  // string | Database ID
  databaseId: "databaseId_example",
};

apiInstance.deleteDatabase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | [**string**] | Database ID | defaults to undefined


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

# **editDatabase**
> DatabaseResponse editDatabase()

To edit a database  you must have the admin permission

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatabaseMainCallsApi(configuration);

let body:.DatabaseMainCallsApiEditDatabaseRequest = {
  // string | Database ID
  databaseId: "databaseId_example",
  // DatabaseEditRequest (optional)
  databaseEditRequest: {
    name: "name_example",
    version: "10.1",
    accessibility: "PUBLIC",
    cpu: 1250,
    memory: 1024,
    storage: 4,
  },
};

apiInstance.editDatabase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseEditRequest** | **DatabaseEditRequest**|  |
 **databaseId** | [**string**] | Database ID | defaults to undefined


### Return type

**DatabaseResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Edit a database  |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**409** | Database  name within the environment is already taken |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **editDatabaseCredentials**
> CredentialsResponse editDatabaseCredentials()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatabaseMainCallsApi(configuration);

let body:.DatabaseMainCallsApiEditDatabaseCredentialsRequest = {
  // string | Database ID
  databaseId: "databaseId_example",
  // CredentialsRequest (optional)
  credentialsRequest: {
    login: "login_example",
    password: "password_example",
  },
};

apiInstance.editDatabaseCredentials(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentialsRequest** | **CredentialsRequest**|  |
 **databaseId** | [**string**] | Database ID | defaults to undefined


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
**200** | Edit database credentials |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDatabase**
> DatabaseResponse getDatabase()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatabaseMainCallsApi(configuration);

let body:.DatabaseMainCallsApiGetDatabaseRequest = {
  // string | Database ID
  databaseId: "databaseId_example",
};

apiInstance.getDatabase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | [**string**] | Database ID | defaults to undefined


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
**200** | Get database  by ID |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDatabaseMasterCredentials**
> CredentialsResponse getDatabaseMasterCredentials()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatabaseMainCallsApi(configuration);

let body:.DatabaseMainCallsApiGetDatabaseMasterCredentialsRequest = {
  // string | Database ID
  databaseId: "databaseId_example",
};

apiInstance.getDatabaseMasterCredentials(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | [**string**] | Database ID | defaults to undefined


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

# **getDatabaseStatus**
> Status getDatabaseStatus()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatabaseMainCallsApi(configuration);

let body:.DatabaseMainCallsApiGetDatabaseStatusRequest = {
  // string | Database ID
  databaseId: "databaseId_example",
};

apiInstance.getDatabaseStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | [**string**] | Database ID | defaults to undefined


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

# **listDatabaseVersion**
> VersionResponseList listDatabaseVersion()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatabaseMainCallsApi(configuration);

let body:.DatabaseMainCallsApiListDatabaseVersionRequest = {
  // string | Database ID
  databaseId: "databaseId_example",
};

apiInstance.listDatabaseVersion(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | [**string**] | Database ID | defaults to undefined


### Return type

**VersionResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List eligible versions |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


