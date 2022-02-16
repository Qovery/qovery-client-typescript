# .ApplicationMetricsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApplicationCurrentInstance**](ApplicationMetricsApi.md#getApplicationCurrentInstance) | **GET** /application/{applicationId}/instance | List currently running instances of the application with their CPU and RAM metrics
[**getApplicationCurrentScale**](ApplicationMetricsApi.md#getApplicationCurrentScale) | **GET** /application/{applicationId}/currentScale | Get current scaling of the application
[**getApplicationCurrentStorageDisk**](ApplicationMetricsApi.md#getApplicationCurrentStorageDisk) | **GET** /application/{applicationId}/currentStorage | List current storage disk usage
[**getApplicationMetricCpu**](ApplicationMetricsApi.md#getApplicationMetricCpu) | **GET** /application/{applicationId}/metric/cpu | Get CPU consumption metric over time for the application
[**getApplicationMetricHealthCheck**](ApplicationMetricsApi.md#getApplicationMetricHealthCheck) | **GET** /application/{applicationId}/metric/healthCheck | Get Health Check latency  metric over time for the application
[**getApplicationMetricMemory**](ApplicationMetricsApi.md#getApplicationMetricMemory) | **GET** /application/{applicationId}/metric/memory | Get Memory consumption metric over time for the application
[**getApplicationMetricRestart**](ApplicationMetricsApi.md#getApplicationMetricRestart) | **GET** /application/{applicationId}/metric/restart | List application restarts
[**getApplicationMetricStorage**](ApplicationMetricsApi.md#getApplicationMetricStorage) | **GET** /application/{applicationId}/metric/storage | Get Storage consumption metric over time for the application


# **getApplicationCurrentInstance**
> InstanceResponseList getApplicationCurrentInstance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationMetricsApi(configuration);

let body:.ApplicationMetricsApiGetApplicationCurrentInstanceRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
};

apiInstance.getApplicationCurrentInstance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined


### Return type

**InstanceResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Know current resource consumption of the application for each running instance |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getApplicationCurrentScale**
> ApplicationCurrentScaleResponse getApplicationCurrentScale()

Returns min, max, and running number of instances of the application

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationMetricsApi(configuration);

let body:.ApplicationMetricsApiGetApplicationCurrentScaleRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
};

apiInstance.getApplicationCurrentScale(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined


### Return type

**ApplicationCurrentScaleResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get current scaling of the application |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getApplicationCurrentStorageDisk**
> StorageDiskResponseList getApplicationCurrentStorageDisk()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationMetricsApi(configuration);

let body:.ApplicationMetricsApiGetApplicationCurrentStorageDiskRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
};

apiInstance.getApplicationCurrentStorageDisk(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined


### Return type

**StorageDiskResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Know current storage disk |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getApplicationMetricCpu**
> MetricCPUResponseList getApplicationMetricCpu()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationMetricsApi(configuration);

let body:.ApplicationMetricsApiGetApplicationMetricCpuRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // number | Up to how many seconds in the past to ask analytics results
  lastSeconds: 3.14,
};

apiInstance.getApplicationMetricCpu(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined
 **lastSeconds** | [**number**] | Up to how many seconds in the past to ask analytics results | defaults to undefined


### Return type

**MetricCPUResponseList**

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

# **getApplicationMetricHealthCheck**
> MetricGenericResponseList getApplicationMetricHealthCheck()

The value returned corresponds to the 95th centile

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationMetricsApi(configuration);

let body:.ApplicationMetricsApiGetApplicationMetricHealthCheckRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // number | Up to how many seconds in the past to ask analytics results
  lastSeconds: 3.14,
};

apiInstance.getApplicationMetricHealthCheck(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined
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

# **getApplicationMetricMemory**
> MetricMemoryResponseList getApplicationMetricMemory()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationMetricsApi(configuration);

let body:.ApplicationMetricsApiGetApplicationMetricMemoryRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // number | Up to how many seconds in the past to ask analytics results
  lastSeconds: 3.14,
};

apiInstance.getApplicationMetricMemory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined
 **lastSeconds** | [**number**] | Up to how many seconds in the past to ask analytics results | defaults to undefined


### Return type

**MetricMemoryResponseList**

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

# **getApplicationMetricRestart**
> MetricRestartResponse getApplicationMetricRestart()

Get application restart message and timestamp.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationMetricsApi(configuration);

let body:.ApplicationMetricsApiGetApplicationMetricRestartRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // number | Up to how many seconds in the past to ask analytics results
  lastSeconds: 3.14,
};

apiInstance.getApplicationMetricRestart(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined
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

# **getApplicationMetricStorage**
> MetricStorageResponseList getApplicationMetricStorage()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationMetricsApi(configuration);

let body:.ApplicationMetricsApiGetApplicationMetricStorageRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // number | Up to how many seconds in the past to ask analytics results
  lastSeconds: 3.14,
};

apiInstance.getApplicationMetricStorage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined
 **lastSeconds** | [**number**] | Up to how many seconds in the past to ask analytics results | defaults to undefined


### Return type

**MetricStorageResponseList**

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


