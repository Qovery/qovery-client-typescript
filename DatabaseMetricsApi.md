# .DatabaseMetricsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDatabaseCurrentMetric**](DatabaseMetricsApi.md#getDatabaseCurrentMetric) | **GET** /database/{databaseId}/currentMetric | Get current metric consumption of the database 
[**getDatabaseMetricCpu**](DatabaseMetricsApi.md#getDatabaseMetricCpu) | **GET** /database/{databaseId}/metric/cpu | Get CPU consumption metric over time for the database
[**getDatabaseMetricHealthCheck**](DatabaseMetricsApi.md#getDatabaseMetricHealthCheck) | **GET** /database/{databaseId}/metric/healthCheck | Get Health Check latency  metric over time for the database
[**getDatabaseMetricMemory**](DatabaseMetricsApi.md#getDatabaseMetricMemory) | **GET** /database/{databaseId}/metric/memory | Get Memory consumption metric over time for the database
[**getDatabaseMetricRestart**](DatabaseMetricsApi.md#getDatabaseMetricRestart) | **GET** /database/{databaseId}/metric/restart | List database restarts
[**getDatabaseMetricStorage**](DatabaseMetricsApi.md#getDatabaseMetricStorage) | **GET** /database/{databaseId}/metric/storage | Get Storage consumption metric over time for the database


# **getDatabaseCurrentMetric**
> DatabaseCurrentMetricResponse getDatabaseCurrentMetric()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatabaseMetricsApi(configuration);

let body:.DatabaseMetricsApiGetDatabaseCurrentMetricRequest = {
  // string | Database ID
  databaseId: "databaseId_example",
};

apiInstance.getDatabaseCurrentMetric(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | [**string**] | Database ID | defaults to undefined


### Return type

**DatabaseCurrentMetricResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get database  current metric |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDatabaseMetricCpu**
> MetricCPUDatapointResponseList getDatabaseMetricCpu()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatabaseMetricsApi(configuration);

let body:.DatabaseMetricsApiGetDatabaseMetricCpuRequest = {
  // string | Database ID
  databaseId: "databaseId_example",
  // number | Up to how many seconds in the past to ask analytics results
  lastSeconds: 3.14,
};

apiInstance.getDatabaseMetricCpu(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | [**string**] | Database ID | defaults to undefined
 **lastSeconds** | [**number**] | Up to how many seconds in the past to ask analytics results | defaults to undefined


### Return type

**MetricCPUDatapointResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | CPU consumption |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDatabaseMetricHealthCheck**
> MetricGenericResponseList getDatabaseMetricHealthCheck()

The value returned corresponds to the 95th centile

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatabaseMetricsApi(configuration);

let body:.DatabaseMetricsApiGetDatabaseMetricHealthCheckRequest = {
  // string | Database ID
  databaseId: "databaseId_example",
  // number | Up to how many seconds in the past to ask analytics results
  lastSeconds: 3.14,
};

apiInstance.getDatabaseMetricHealthCheck(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | [**string**] | Database ID | defaults to undefined
 **lastSeconds** | [**number**] | Up to how many seconds in the past to ask analytics results | defaults to undefined


### Return type

**MetricGenericResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Health Check Latency |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDatabaseMetricMemory**
> MetricMemoryDatapointResponseList getDatabaseMetricMemory()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatabaseMetricsApi(configuration);

let body:.DatabaseMetricsApiGetDatabaseMetricMemoryRequest = {
  // string | Database ID
  databaseId: "databaseId_example",
  // number | Up to how many seconds in the past to ask analytics results
  lastSeconds: 3.14,
};

apiInstance.getDatabaseMetricMemory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | [**string**] | Database ID | defaults to undefined
 **lastSeconds** | [**number**] | Up to how many seconds in the past to ask analytics results | defaults to undefined


### Return type

**MetricMemoryDatapointResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Memory consumption |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDatabaseMetricRestart**
> MetricRestartResponse getDatabaseMetricRestart()

Get database restart message and timestamp.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatabaseMetricsApi(configuration);

let body:.DatabaseMetricsApiGetDatabaseMetricRestartRequest = {
  // string | Database ID
  databaseId: "databaseId_example",
  // number | Up to how many seconds in the past to ask analytics results
  lastSeconds: 3.14,
};

apiInstance.getDatabaseMetricRestart(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | [**string**] | Database ID | defaults to undefined
 **lastSeconds** | [**number**] | Up to how many seconds in the past to ask analytics results | defaults to undefined


### Return type

**MetricRestartResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Restarts |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDatabaseMetricStorage**
> MetricStorageDatapointResponseList getDatabaseMetricStorage()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatabaseMetricsApi(configuration);

let body:.DatabaseMetricsApiGetDatabaseMetricStorageRequest = {
  // string | Database ID
  databaseId: "databaseId_example",
  // number | Up to how many seconds in the past to ask analytics results
  lastSeconds: 3.14,
};

apiInstance.getDatabaseMetricStorage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | [**string**] | Database ID | defaults to undefined
 **lastSeconds** | [**number**] | Up to how many seconds in the past to ask analytics results | defaults to undefined


### Return type

**MetricStorageDatapointResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Storage consumption |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


