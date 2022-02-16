# .ReferralRewardsApi

All URIs are relative to *https://api.qovery.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountReferral**](ReferralRewardsApi.md#getAccountReferral) | **GET** /account/referral | Get your referral information
[**postAccountRewardClaim**](ReferralRewardsApi.md#postAccountRewardClaim) | **POST** /account/rewardClaim | Claim a reward


# **getAccountReferral**
> ReferralResponse getAccountReferral()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReferralRewardsApi(configuration);

let body:any = {};

apiInstance.getAccountReferral(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ReferralResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get referral info |  -  |
**401** | Access token is missing or invalid |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postAccountRewardClaim**
> void postAccountRewardClaim()

A same code can be claimed only 3 times at max

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReferralRewardsApi(configuration);

let body:.ReferralRewardsApiPostAccountRewardClaimRequest = {
  // RewardClaimResponse (optional)
  rewardClaimResponse: {
    type: "INVITATION",
    code: "xDowkWEl",
  },
};

apiInstance.postAccountRewardClaim(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rewardClaimResponse** | **RewardClaimResponse**|  |


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
**200** | Claim reward |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


