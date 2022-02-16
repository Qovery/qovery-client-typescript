# .ApplicationEventApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listApplicationEvent**](ApplicationEventApi.md#listApplicationEvent) | **GET** /application/{applicationId}/event | List application events


# **listApplicationEvent**
> EventPaginatedResponseList listApplicationEvent()

By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationEventApi(configuration);

let body:.ApplicationEventApiListApplicationEventRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // string | Starting point after which to return results (optional)
  startId: "startId_example",
};

apiInstance.listApplicationEvent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined
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


