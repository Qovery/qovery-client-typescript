# .DatabaseApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLogicalDatabaseOnDatabase**](DatabaseApi.md#createLogicalDatabaseOnDatabase) | **POST** /database/{databaseId}/logicalDatabase | Create a logical database on the database


# **createLogicalDatabaseOnDatabase**
> LogicalDatabaseResponse createLogicalDatabaseOnDatabase()

If you don't specify credentials, Qovery will autogenerate them.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DatabaseApi(configuration);

let body:.DatabaseApiCreateLogicalDatabaseOnDatabaseRequest = {
  // string | Database ID
  databaseId: "databaseId_example",
  // LogicalDatabaseRequest (optional)
  logicalDatabaseRequest: {
    name: "name_example",
    description: "description_example",
  },
};

apiInstance.createLogicalDatabaseOnDatabase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logicalDatabaseRequest** | **LogicalDatabaseRequest**|  |
 **databaseId** | [**string**] | Database ID | defaults to undefined


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
**201** | Created database on the database |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**409** | Logical Database with this name already exists on the database |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


