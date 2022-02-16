# .DatabaseApplicationApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listDatabaseApplication**](DatabaseApplicationApi.md#listDatabaseApplication) | **GET** /database/{databaseId}/application | List applications using the database
[**removeApplicationFromDatabase**](DatabaseApplicationApi.md#removeApplicationFromDatabase) | **DELETE** /database/{databaseId}/application/{targetApplicationId} | Remove an application from this database 


# **listDatabaseApplication**
> ApplicationResponseList listDatabaseApplication()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatabaseApplicationApi(configuration);

let body:.DatabaseApplicationApiListDatabaseApplicationRequest = {
  // string | Database ID
  databaseId: "databaseId_example",
};

apiInstance.listDatabaseApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | [**string**] | Database ID | defaults to undefined


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

# **removeApplicationFromDatabase**
> void removeApplicationFromDatabase()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatabaseApplicationApi(configuration);

let body:.DatabaseApplicationApiRemoveApplicationFromDatabaseRequest = {
  // string | Database ID
  databaseId: "databaseId_example",
  // string | Target application ID
  targetApplicationId: "targetApplicationId_example",
};

apiInstance.removeApplicationFromDatabase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | [**string**] | Database ID | defaults to undefined
 **targetApplicationId** | [**string**] | Target application ID | defaults to undefined


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


