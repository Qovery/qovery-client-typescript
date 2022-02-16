# .BackupsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBackupDatabase**](BackupsApi.md#addBackupDatabase) | **POST** /database/{databaseId}/backup | Add a backup to the Database 
[**listDatabaseBackup**](BackupsApi.md#listDatabaseBackup) | **GET** /database/{databaseId}/backup | List database  backups
[**removeDatabaseBackup**](BackupsApi.md#removeDatabaseBackup) | **DELETE** /database/{databaseId}/backup/{backupId} | Remove database  backup


# **addBackupDatabase**
> BackupResponse addBackupDatabase()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BackupsApi(configuration);

let body:.BackupsApiAddBackupDatabaseRequest = {
  // string | Database ID
  databaseId: "databaseId_example",
  // BackupRequest (optional)
  backupRequest: {
    name: "name_example",
    message: "message_example",
  },
};

apiInstance.addBackupDatabase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backupRequest** | **BackupRequest**|  |
 **databaseId** | [**string**] | Database ID | defaults to undefined


### Return type

**BackupResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Added backup |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listDatabaseBackup**
> BackupPaginatedResponseList listDatabaseBackup()

By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BackupsApi(configuration);

let body:.BackupsApiListDatabaseBackupRequest = {
  // string | Database ID
  databaseId: "databaseId_example",
  // string | Starting point after which to return results (optional)
  startId: "startId_example",
};

apiInstance.listDatabaseBackup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | [**string**] | Database ID | defaults to undefined
 **startId** | [**string**] | Starting point after which to return results | (optional) defaults to undefined


### Return type

**BackupPaginatedResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List backups |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeDatabaseBackup**
> void removeDatabaseBackup()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BackupsApi(configuration);

let body:.BackupsApiRemoveDatabaseBackupRequest = {
  // string | Database ID
  databaseId: "databaseId_example",
  // string | Database Backup ID
  backupId: "backupId_example",
};

apiInstance.removeDatabaseBackup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **databaseId** | [**string**] | Database ID | defaults to undefined
 **backupId** | [**string**] | Database Backup ID | defaults to undefined


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


