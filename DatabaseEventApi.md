# .DatabaseEventApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listDatabaseEvent**](DatabaseEventApi.md#listDatabaseEvent) | **GET** /database/{databaseId}/event | List database  events


# **listDatabaseEvent**
> EventPaginatedResponseList listDatabaseEvent()

By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatabaseEventApi(configuration);

let body:.DatabaseEventApiListDatabaseEventRequest = {
  // string | Database ID
  databaseId: "databaseId_example",
  // string | Starting point after which to return results (optional)
  startId: "startId_example",
};

apiInstance.listDatabaseEvent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | [**string**] | Database ID | defaults to undefined
 **startId** | [**string**] | Starting point after which to return results | (optional) defaults to undefined


### Return type

**EventPaginatedResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List events |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


