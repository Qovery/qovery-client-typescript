# .DatabasesApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDatabase**](DatabasesApi.md#createDatabase) | **POST** /environment/{environmentId}/database | Create a database
[**getEnvironmentDatabaseStatus**](DatabasesApi.md#getEnvironmentDatabaseStatus) | **GET** /environment/{environmentId}/database/status | List all environment databases statuses
[**listDatabase**](DatabasesApi.md#listDatabase) | **GET** /environment/{environmentId}/database | List environment databases
[**listEnvironmentDatabaseConfig**](DatabasesApi.md#listEnvironmentDatabaseConfig) | **GET** /environment/{environmentId}/databaseConfiguration | List eligible database types, versions and modes for the environment
[**listEnvironmentDatabaseCurrentMetric**](DatabasesApi.md#listEnvironmentDatabaseCurrentMetric) | **GET** /environment/{environmentId}/database/currentMetric | List current metric consumption for each database


# **createDatabase**
> DatabaseResponse createDatabase()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatabasesApi(configuration);

let body:.DatabasesApiCreateDatabaseRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
  // DatabaseRequest (optional)
  databaseRequest: {
    name: "name_example",
    type: "POSTGRESQL",
    version: "10.1",
    mode: "MANAGED",
    accessibility: "PRIVATE",
    cpu: 1250,
    memory: 1024,
    storage: 10240,
  },
};

apiInstance.createDatabase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseRequest** | **DatabaseRequest**|  |
 **environmentId** | [**string**] | Environment ID | defaults to undefined


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
**201** | Create database  |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**409** | Database name within the environment is already taken |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEnvironmentDatabaseStatus**
> ReferenceObjectStatusResponseList getEnvironmentDatabaseStatus()

Returns a list of databases with only their id and status.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatabasesApi(configuration);

let body:.DatabasesApiGetEnvironmentDatabaseStatusRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
};

apiInstance.getEnvironmentDatabaseStatus(body).then((data:any) => {
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

# **listDatabase**
> DatabaseResponseList listDatabase()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatabasesApi(configuration);

let body:.DatabasesApiListDatabaseRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
};

apiInstance.listDatabase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] | Environment ID | defaults to undefined


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
**200** | List databases |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listEnvironmentDatabaseConfig**
> DatabaseConfigurationResponseList listEnvironmentDatabaseConfig()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatabasesApi(configuration);

let body:.DatabasesApiListEnvironmentDatabaseConfigRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
};

apiInstance.listEnvironmentDatabaseConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] | Environment ID | defaults to undefined


### Return type

**DatabaseConfigurationResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List eligible database |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listEnvironmentDatabaseCurrentMetric**
> EnvironmentDatabasesCurrentMetricResponseList listEnvironmentDatabaseCurrentMetric()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatabasesApi(configuration);

let body:.DatabasesApiListEnvironmentDatabaseCurrentMetricRequest = {
  // string | Environment ID
  environmentId: "environmentId_example",
};

apiInstance.listEnvironmentDatabaseCurrentMetric(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **environmentId** | [**string**] | Environment ID | defaults to undefined


### Return type

**EnvironmentDatabasesCurrentMetricResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List current metric for each database |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


