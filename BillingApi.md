# .BillingApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCreditCard**](BillingApi.md#addCreditCard) | **POST** /organization/{organizationId}/creditCard | Add credit card
[**addCreditCode**](BillingApi.md#addCreditCode) | **POST** /organization/{organizationId}/creditCode | Add credit code
[**deleteCreditCard**](BillingApi.md#deleteCreditCard) | **DELETE** /organization/{organizationId}/creditCard/{creditCardId} | Delete credit card
[**editOrganizationBillingInfo**](BillingApi.md#editOrganizationBillingInfo) | **PUT** /organization/{organizationId}/billingInfo | Edit Organization Billing Info
[**getClusterCurrentCost**](BillingApi.md#getClusterCurrentCost) | **GET** /organization/{organizationId}/cluster/{clusterId}/currentCost | Get cluster current cost
[**getOrganizationBillingInfo**](BillingApi.md#getOrganizationBillingInfo) | **GET** /organization/{organizationId}/billingInfo | Get organization billing info
[**getOrganizationBillingStatus**](BillingApi.md#getOrganizationBillingStatus) | **GET** /organization/{organizationId}/billingStatus | Get organization billing status
[**getOrganizationCurrentCost**](BillingApi.md#getOrganizationCurrentCost) | **GET** /organization/{organizationId}/currentCost | Get organization current cost
[**getOrganizationInvoice**](BillingApi.md#getOrganizationInvoice) | **GET** /organization/{organizationId}/invoice/{invoiceId} | Get organization invoice
[**getOrganizationInvoicePDF**](BillingApi.md#getOrganizationInvoicePDF) | **GET** /organization/{organizationId}/invoice/{invoiceId}/download | Get invoice link
[**listOrganizationCreditCards**](BillingApi.md#listOrganizationCreditCards) | **GET** /organization/{organizationId}/creditCard | List organization credit cards
[**listOrganizationInvoice**](BillingApi.md#listOrganizationInvoice) | **GET** /organization/{organizationId}/invoice | List organization invoices
[**organizationDownloadAllInvoices**](BillingApi.md#organizationDownloadAllInvoices) | **POST** /organization/{organizationId}/downloadInvoices | Download all invoices


# **addCreditCard**
> CreditCardResponse addCreditCard()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiAddCreditCardRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // CreditCardRequest (optional)
  creditCardRequest: {
    number: "number_example",
    cvv: "cvv_example",
    expiryMonth: 6,
    expiryYear: 2025,
  },
};

apiInstance.addCreditCard(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creditCardRequest** | **CreditCardRequest**|  |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**CreditCardResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Add credit card |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **addCreditCode**
> void addCreditCode()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiAddCreditCodeRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // OrganizationCreditCodeRequest (optional)
  organizationCreditCodeRequest: {
    code: "code_example",
  },
};

apiInstance.addCreditCode(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationCreditCodeRequest** | **OrganizationCreditCodeRequest**|  |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**void**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | add credit code |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCreditCard**
> void deleteCreditCard()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiDeleteCreditCardRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // string | Credit Card ID
  creditCardId: "creditCardId_example",
};

apiInstance.deleteCreditCard(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **creditCardId** | [**string**] | Credit Card ID | defaults to undefined


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

# **editOrganizationBillingInfo**
> BillingInfoResponse editOrganizationBillingInfo()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiEditOrganizationBillingInfoRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // BillingInfoRequest (optional)
  billingInfoRequest: {
    firstName: "Forrest",
    lastName: "Gump",
    email: "forrest@gump.com",
    address: "21 Jenny Street",
    city: "Greenbow",
    zip: "36744",
    state: "Alabama",
    countryCode: "US",
    company: "company_example",
    vatNumber: "vatNumber_example",
  },
};

apiInstance.editOrganizationBillingInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingInfoRequest** | **BillingInfoRequest**|  |
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**BillingInfoResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Edit billing info |  -  |
**400** | Bad request |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getClusterCurrentCost**
> CostRangeResponse getClusterCurrentCost()

Get your cluster cost range. We are unable to give a precise cost of your infrastructure at the moment. But Qovery guarantees that the cost of your cluster will not exceed the max range. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiGetClusterCurrentCostRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // string | Cluster ID
  clusterId: "clusterId_example",
};

apiInstance.getClusterCurrentCost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **clusterId** | [**string**] | Cluster ID | defaults to undefined


### Return type

**CostRangeResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get cluster cost |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOrganizationBillingInfo**
> BillingInfoResponse getOrganizationBillingInfo()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiGetOrganizationBillingInfoRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
};

apiInstance.getOrganizationBillingInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**BillingInfoResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get Billing Info |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOrganizationBillingStatus**
> BillingStatus getOrganizationBillingStatus()

This endpoint returns a \"is_valid\" boolean field reflecting the billing status of the organization: - If true, the organization billing is valid - For Startup organization, it returns false if there is at least 1 invoice unpaid since 1 week - For Community organization, it returns false if there is no credit left 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiGetOrganizationBillingStatusRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
};

apiInstance.getOrganizationBillingStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**BillingStatus**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get Billing Status |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOrganizationCurrentCost**
> OrganizationCurrentCostResponse getOrganizationCurrentCost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiGetOrganizationCurrentCostRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
};

apiInstance.getOrganizationCurrentCost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**OrganizationCurrentCostResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get Cost |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOrganizationInvoice**
> InvoiceResponse getOrganizationInvoice()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiGetOrganizationInvoiceRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // string | Invoice ID
  invoiceId: "invoiceId_example",
};

apiInstance.getOrganizationInvoice(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **invoiceId** | [**string**] | Invoice ID | defaults to undefined


### Return type

**InvoiceResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get Invoice |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOrganizationInvoicePDF**
> LinkResponse getOrganizationInvoicePDF()

This will return URL of the invoice PDF

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiGetOrganizationInvoicePDFRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
  // string | Invoice ID
  invoiceId: "invoiceId_example",
};

apiInstance.getOrganizationInvoicePDF(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined
 **invoiceId** | [**string**] | Invoice ID | defaults to undefined


### Return type

**LinkResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get invoice PDF |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOrganizationCreditCards**
> CreditCardResponseList listOrganizationCreditCards()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiListOrganizationCreditCardsRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
};

apiInstance.listOrganizationCreditCards(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**CreditCardResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List cfredit cards |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOrganizationInvoice**
> InvoiceResponseList listOrganizationInvoice()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiListOrganizationInvoiceRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
};

apiInstance.listOrganizationInvoice(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined


### Return type

**InvoiceResponseList**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List Invoices |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **organizationDownloadAllInvoices**
> void organizationDownloadAllInvoices()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingApi(configuration);

let body:.BillingApiOrganizationDownloadAllInvoicesRequest = {
  // string | Organization ID
  organizationId: "organizationId_example",
};

apiInstance.organizationDownloadAllInvoices(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**string**] | Organization ID | defaults to undefined


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
**202** | You will receive an email containing your invoices |  -  |
**401** | Access token is missing or invalid |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


