# .ApplicationConfigurationApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**editApplicationNetwork**](ApplicationConfigurationApi.md#editApplicationNetwork) | **PUT** /application/{applicationId}/network | Edit Application Network
[**getApplicationNetwork**](ApplicationConfigurationApi.md#getApplicationNetwork) | **GET** /application/{applicationId}/network | Get Application Network information


# **editApplicationNetwork**
> ApplicationNetworkResponse editApplicationNetwork()

Edit the Network settings of the application.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationConfigurationApi(configuration);

let body:.ApplicationConfigurationApiEditApplicationNetworkRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
  // ApplicationNetworkRequest (optional)
  applicationNetworkRequest: {
    stickySession: false,
  },
};

apiInstance.editApplicationNetwork(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationNetworkRequest** | **ApplicationNetworkRequest**|  |
 **applicationId** | [**string**] | Application ID | defaults to undefined


### Return type

**ApplicationNetworkResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Updated application network setting |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getApplicationNetwork**
> ApplicationNetworkResponse getApplicationNetwork()

Get status of the application network settings.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationConfigurationApi(configuration);

let body:.ApplicationConfigurationApiGetApplicationNetworkRequest = {
  // string | Application ID
  applicationId: "applicationId_example",
};

apiInstance.getApplicationNetwork(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationId** | [**string**] | Application ID | defaults to undefined


### Return type

**ApplicationNetworkResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Network information |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


