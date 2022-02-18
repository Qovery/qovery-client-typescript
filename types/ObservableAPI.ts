import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AccountInfoEditRequest } from '../models/AccountInfoEditRequest';
import { AccountInfoResponse } from '../models/AccountInfoResponse';
import { AliasedSecret } from '../models/AliasedSecret';
import { ApplicationCurrentScaleResponse } from '../models/ApplicationCurrentScaleResponse';
import { ApplicationDependencyRequest } from '../models/ApplicationDependencyRequest';
import { ApplicationEditRequest } from '../models/ApplicationEditRequest';
import { ApplicationGitRepositoryRequest } from '../models/ApplicationGitRepositoryRequest';
import { ApplicationGitRepositoryResponse } from '../models/ApplicationGitRepositoryResponse';
import { ApplicationNetworkRequest } from '../models/ApplicationNetworkRequest';
import { ApplicationNetworkResponse } from '../models/ApplicationNetworkResponse';
import { ApplicationPortRequest } from '../models/ApplicationPortRequest';
import { ApplicationPortRequestPorts } from '../models/ApplicationPortRequestPorts';
import { ApplicationPortResponse } from '../models/ApplicationPortResponse';
import { ApplicationPortResponsePorts } from '../models/ApplicationPortResponsePorts';
import { ApplicationRequest } from '../models/ApplicationRequest';
import { ApplicationResponse } from '../models/ApplicationResponse';
import { ApplicationResponseList } from '../models/ApplicationResponseList';
import { ApplicationStorageRequest } from '../models/ApplicationStorageRequest';
import { ApplicationStorageRequestStorage } from '../models/ApplicationStorageRequestStorage';
import { ApplicationStorageResponse } from '../models/ApplicationStorageResponse';
import { ApplicationStorageResponseStorage } from '../models/ApplicationStorageResponseStorage';
import { AwsCredentialsRequest } from '../models/AwsCredentialsRequest';
import { BackupPaginatedResponseList } from '../models/BackupPaginatedResponseList';
import { BackupRequest } from '../models/BackupRequest';
import { BackupResponse } from '../models/BackupResponse';
import { BackupResponseList } from '../models/BackupResponseList';
import { BaseResponse } from '../models/BaseResponse';
import { BillingEnd } from '../models/BillingEnd';
import { BillingInfoRequest } from '../models/BillingInfoRequest';
import { BillingInfoResponse } from '../models/BillingInfoResponse';
import { BillingPeriod } from '../models/BillingPeriod';
import { BillingStart } from '../models/BillingStart';
import { BillingStatus } from '../models/BillingStatus';
import { BudgetResponse } from '../models/BudgetResponse';
import { BudgetThreshold } from '../models/BudgetThreshold';
import { CloneRequest } from '../models/CloneRequest';
import { CloudProviderResponse } from '../models/CloudProviderResponse';
import { CloudProviderResponseList } from '../models/CloudProviderResponseList';
import { Cluster } from '../models/Cluster';
import { ClusterCloudProviderInfoRequest } from '../models/ClusterCloudProviderInfoRequest';
import { ClusterCloudProviderInfoRequestCredentials } from '../models/ClusterCloudProviderInfoRequestCredentials';
import { ClusterCloudProviderInfoResponse } from '../models/ClusterCloudProviderInfoResponse';
import { ClusterCredentialsRequest } from '../models/ClusterCredentialsRequest';
import { ClusterCredentialsResponse } from '../models/ClusterCredentialsResponse';
import { ClusterCredentialsResponseList } from '../models/ClusterCredentialsResponseList';
import { ClusterFeatureRequest } from '../models/ClusterFeatureRequest';
import { ClusterFeatureRequestFeatures } from '../models/ClusterFeatureRequestFeatures';
import { ClusterFeatureResponse } from '../models/ClusterFeatureResponse';
import { ClusterFeatureResponseList } from '../models/ClusterFeatureResponseList';
import { ClusterReadinessStatus } from '../models/ClusterReadinessStatus';
import { ClusterRegionResponse } from '../models/ClusterRegionResponse';
import { ClusterRegionResponseList } from '../models/ClusterRegionResponseList';
import { ClusterRequest } from '../models/ClusterRequest';
import { ClusterResponse } from '../models/ClusterResponse';
import { ClusterResponseList } from '../models/ClusterResponseList';
import { ClusterRoutingTableRequest } from '../models/ClusterRoutingTableRequest';
import { ClusterRoutingTableRequestRoutes } from '../models/ClusterRoutingTableRequestRoutes';
import { ClusterRoutingTableResponse } from '../models/ClusterRoutingTableResponse';
import { ClusterRoutingTableResponseResults } from '../models/ClusterRoutingTableResponseResults';
import { ClusterStatusResponse } from '../models/ClusterStatusResponse';
import { ClusterStatusResponseList } from '../models/ClusterStatusResponseList';
import { CommitPaginatedResponseList } from '../models/CommitPaginatedResponseList';
import { CommitResponse } from '../models/CommitResponse';
import { CommitResponseList } from '../models/CommitResponseList';
import { CommunityUsage } from '../models/CommunityUsage';
import { CommunityUsageResponse } from '../models/CommunityUsageResponse';
import { Cost } from '../models/Cost';
import { CostRangeResponse } from '../models/CostRangeResponse';
import { CostResponse } from '../models/CostResponse';
import { CredentialsRequest } from '../models/CredentialsRequest';
import { CredentialsResponse } from '../models/CredentialsResponse';
import { CreditCardRequest } from '../models/CreditCardRequest';
import { CreditCardResponse } from '../models/CreditCardResponse';
import { CreditCardResponseList } from '../models/CreditCardResponseList';
import { CurrentCost } from '../models/CurrentCost';
import { CustomDomainRequest } from '../models/CustomDomainRequest';
import { CustomDomainResponse } from '../models/CustomDomainResponse';
import { CustomDomainResponseList } from '../models/CustomDomainResponseList';
import { DatabaseConfigurationResponse } from '../models/DatabaseConfigurationResponse';
import { DatabaseConfigurationResponseList } from '../models/DatabaseConfigurationResponseList';
import { DatabaseCurrentMetricResponse } from '../models/DatabaseCurrentMetricResponse';
import { DatabaseEditRequest } from '../models/DatabaseEditRequest';
import { DatabaseRequest } from '../models/DatabaseRequest';
import { DatabaseResponse } from '../models/DatabaseResponse';
import { DatabaseResponseList } from '../models/DatabaseResponseList';
import { DatabaseVersionMode } from '../models/DatabaseVersionMode';
import { DeployRequest } from '../models/DeployRequest';
import { DeploymentHistoryApplicationResponse } from '../models/DeploymentHistoryApplicationResponse';
import { DeploymentHistoryDatabaseResponse } from '../models/DeploymentHistoryDatabaseResponse';
import { DeploymentHistoryEnvironmentPaginatedResponseList } from '../models/DeploymentHistoryEnvironmentPaginatedResponseList';
import { DeploymentHistoryEnvironmentResponse } from '../models/DeploymentHistoryEnvironmentResponse';
import { DeploymentHistoryPaginatedResponseList } from '../models/DeploymentHistoryPaginatedResponseList';
import { DeploymentHistoryResponse } from '../models/DeploymentHistoryResponse';
import { DeploymentHistoryResponseList } from '../models/DeploymentHistoryResponseList';
import { DeploymentRuleRequest } from '../models/DeploymentRuleRequest';
import { DoCredentialsRequest } from '../models/DoCredentialsRequest';
import { EnvironmentApplicationsCurrentScaleResponse } from '../models/EnvironmentApplicationsCurrentScaleResponse';
import { EnvironmentApplicationsCurrentScaleResponseList } from '../models/EnvironmentApplicationsCurrentScaleResponseList';
import { EnvironmentApplicationsInstanceResponseList } from '../models/EnvironmentApplicationsInstanceResponseList';
import { EnvironmentApplicationsInstanceResponseListResults } from '../models/EnvironmentApplicationsInstanceResponseListResults';
import { EnvironmentApplicationsStorageResponse } from '../models/EnvironmentApplicationsStorageResponse';
import { EnvironmentApplicationsStorageResponseList } from '../models/EnvironmentApplicationsStorageResponseList';
import { EnvironmentApplicationsSupportedLanguage } from '../models/EnvironmentApplicationsSupportedLanguage';
import { EnvironmentApplicationsSupportedLanguageList } from '../models/EnvironmentApplicationsSupportedLanguageList';
import { EnvironmentDatabasesCurrentMetricResponse } from '../models/EnvironmentDatabasesCurrentMetricResponse';
import { EnvironmentDatabasesCurrentMetricResponseCpu } from '../models/EnvironmentDatabasesCurrentMetricResponseCpu';
import { EnvironmentDatabasesCurrentMetricResponseList } from '../models/EnvironmentDatabasesCurrentMetricResponseList';
import { EnvironmentDatabasesCurrentMetricResponseMemory } from '../models/EnvironmentDatabasesCurrentMetricResponseMemory';
import { EnvironmentDatabasesCurrentMetricResponseStorage } from '../models/EnvironmentDatabasesCurrentMetricResponseStorage';
import { EnvironmentDeploymentRuleEditRequest } from '../models/EnvironmentDeploymentRuleEditRequest';
import { EnvironmentDeploymentRuleResponse } from '../models/EnvironmentDeploymentRuleResponse';
import { EnvironmentEditRequest } from '../models/EnvironmentEditRequest';
import { EnvironmentLogPaginatedResponseList } from '../models/EnvironmentLogPaginatedResponseList';
import { EnvironmentLogResponse } from '../models/EnvironmentLogResponse';
import { EnvironmentLogResponseList } from '../models/EnvironmentLogResponseList';
import { EnvironmentLogResponseScope } from '../models/EnvironmentLogResponseScope';
import { EnvironmentRequest } from '../models/EnvironmentRequest';
import { EnvironmentResponse } from '../models/EnvironmentResponse';
import { EnvironmentResponseList } from '../models/EnvironmentResponseList';
import { EnvironmentRestartRequest } from '../models/EnvironmentRestartRequest';
import { EnvironmentStatsResponse } from '../models/EnvironmentStatsResponse';
import { EnvironmentStatsResponseList } from '../models/EnvironmentStatsResponseList';
import { EnvironmentTotalNumber } from '../models/EnvironmentTotalNumber';
import { EnvironmentVariableEditRequest } from '../models/EnvironmentVariableEditRequest';
import { EnvironmentVariableRequest } from '../models/EnvironmentVariableRequest';
import { EnvironmentVariableResponse } from '../models/EnvironmentVariableResponse';
import { EnvironmentVariableResponseList } from '../models/EnvironmentVariableResponseList';
import { EventPaginatedResponseList } from '../models/EventPaginatedResponseList';
import { EventResponse } from '../models/EventResponse';
import { EventResponseList } from '../models/EventResponseList';
import { GenericObjectCurrentCostResponse } from '../models/GenericObjectCurrentCostResponse';
import { GitAuthProviderResponse } from '../models/GitAuthProviderResponse';
import { GitAuthProviderResponseList } from '../models/GitAuthProviderResponseList';
import { GitRepositoryBranchResponse } from '../models/GitRepositoryBranchResponse';
import { GitRepositoryBranchResponseList } from '../models/GitRepositoryBranchResponseList';
import { GitRepositoryResponse } from '../models/GitRepositoryResponse';
import { GitRepositoryResponseList } from '../models/GitRepositoryResponseList';
import { Healthcheck } from '../models/Healthcheck';
import { InlineObject } from '../models/InlineObject';
import { InstanceResponse } from '../models/InstanceResponse';
import { InstanceResponseList } from '../models/InstanceResponseList';
import { InviteMemberRequest } from '../models/InviteMemberRequest';
import { InviteMemberResponse } from '../models/InviteMemberResponse';
import { InviteMemberResponseList } from '../models/InviteMemberResponseList';
import { InvoiceResponse } from '../models/InvoiceResponse';
import { InvoiceResponseList } from '../models/InvoiceResponseList';
import { Key } from '../models/Key';
import { LinkResponse } from '../models/LinkResponse';
import { LinkResponseList } from '../models/LinkResponseList';
import { LogPaginatedResponseList } from '../models/LogPaginatedResponseList';
import { LogResponse } from '../models/LogResponse';
import { LogResponseList } from '../models/LogResponseList';
import { LogicalDatabaseRequest } from '../models/LogicalDatabaseRequest';
import { LogicalDatabaseResponse } from '../models/LogicalDatabaseResponse';
import { LogicalDatabaseResponseList } from '../models/LogicalDatabaseResponseList';
import { MemberResponse } from '../models/MemberResponse';
import { MemberResponseList } from '../models/MemberResponseList';
import { MetricCPUDatapointResponse } from '../models/MetricCPUDatapointResponse';
import { MetricCPUDatapointResponseList } from '../models/MetricCPUDatapointResponseList';
import { MetricCPUResponse } from '../models/MetricCPUResponse';
import { MetricCPUResponseList } from '../models/MetricCPUResponseList';
import { MetricGenericDatapointResponse } from '../models/MetricGenericDatapointResponse';
import { MetricGenericResponse } from '../models/MetricGenericResponse';
import { MetricGenericResponseList } from '../models/MetricGenericResponseList';
import { MetricMemoryDatapointResponse } from '../models/MetricMemoryDatapointResponse';
import { MetricMemoryDatapointResponseList } from '../models/MetricMemoryDatapointResponseList';
import { MetricMemoryResponse } from '../models/MetricMemoryResponse';
import { MetricMemoryResponseList } from '../models/MetricMemoryResponseList';
import { MetricRestartResponse } from '../models/MetricRestartResponse';
import { MetricRestartResponseResults } from '../models/MetricRestartResponseResults';
import { MetricStorageDatapointResponse } from '../models/MetricStorageDatapointResponse';
import { MetricStorageDatapointResponseList } from '../models/MetricStorageDatapointResponseList';
import { MetricStorageResponse } from '../models/MetricStorageResponse';
import { MetricStorageResponseList } from '../models/MetricStorageResponseList';
import { Name } from '../models/Name';
import { OrganizationCreditCodeRequest } from '../models/OrganizationCreditCodeRequest';
import { OrganizationCurrentCostResponse } from '../models/OrganizationCurrentCostResponse';
import { OrganizationEditRequest } from '../models/OrganizationEditRequest';
import { OrganizationRequest } from '../models/OrganizationRequest';
import { OrganizationResponse } from '../models/OrganizationResponse';
import { OrganizationResponseList } from '../models/OrganizationResponseList';
import { OverriddenSecret } from '../models/OverriddenSecret';
import { PaginationDataResponse } from '../models/PaginationDataResponse';
import { PaidUsage } from '../models/PaidUsage';
import { PaidUsageResponse } from '../models/PaidUsageResponse';
import { ProjectCurrentCostResponse } from '../models/ProjectCurrentCostResponse';
import { ProjectCurrentCostResponseList } from '../models/ProjectCurrentCostResponseList';
import { ProjectDeploymentRuleRequest } from '../models/ProjectDeploymentRuleRequest';
import { ProjectDeploymentRuleResponse } from '../models/ProjectDeploymentRuleResponse';
import { ProjectDeploymentRuleResponseList } from '../models/ProjectDeploymentRuleResponseList';
import { ProjectProjectIdDeploymentRuleOrderProjectDeploymentRuleIdsInOrder } from '../models/ProjectProjectIdDeploymentRuleOrderProjectDeploymentRuleIdsInOrder';
import { ProjectRequest } from '../models/ProjectRequest';
import { ProjectResponse } from '../models/ProjectResponse';
import { ProjectResponseList } from '../models/ProjectResponseList';
import { ProjectStatsResponse } from '../models/ProjectStatsResponse';
import { ProjectStatsResponseList } from '../models/ProjectStatsResponseList';
import { ReferenceObject } from '../models/ReferenceObject';
import { ReferenceObjectStatusResponse } from '../models/ReferenceObjectStatusResponse';
import { ReferenceObjectStatusResponseList } from '../models/ReferenceObjectStatusResponseList';
import { ReferralResponse } from '../models/ReferralResponse';
import { RemainingCredits } from '../models/RemainingCredits';
import { RewardClaimResponse } from '../models/RewardClaimResponse';
import { ScalewayCredentialsRequest } from '../models/ScalewayCredentialsRequest';
import { SecretEditRequest } from '../models/SecretEditRequest';
import { SecretRequest } from '../models/SecretRequest';
import { SecretResponse } from '../models/SecretResponse';
import { SecretResponseList } from '../models/SecretResponseList';
import { ServiceResponse } from '../models/ServiceResponse';
import { ServiceResponseList } from '../models/ServiceResponseList';
import { ServiceTotalNumber } from '../models/ServiceTotalNumber';
import { Status } from '../models/Status';
import { StorageDiskResponse } from '../models/StorageDiskResponse';
import { StorageDiskResponseList } from '../models/StorageDiskResponseList';
import { TagRequest } from '../models/TagRequest';
import { TagResponse } from '../models/TagResponse';
import { TagResponseList } from '../models/TagResponseList';
import { TransferOwnershipRequest } from '../models/TransferOwnershipRequest';
import { UnexpectedError } from '../models/UnexpectedError';
import { UserResponse } from '../models/UserResponse';
import { UserResponseList } from '../models/UserResponseList';
import { Value } from '../models/Value';
import { VariableImportRequest } from '../models/VariableImportRequest';
import { VariableImportRequestVars } from '../models/VariableImportRequestVars';
import { VariableImportResponse } from '../models/VariableImportResponse';
import { VariableImportResponseSuccessfulImportedVariables } from '../models/VariableImportResponseSuccessfulImportedVariables';
import { VersionResponse } from '../models/VersionResponse';
import { VersionResponseList } from '../models/VersionResponseList';

import { AccountInfoApiRequestFactory, AccountInfoApiResponseProcessor} from "../apis/AccountInfoApi";
export class ObservableAccountInfoApi {
    private requestFactory: AccountInfoApiRequestFactory;
    private responseProcessor: AccountInfoApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountInfoApiRequestFactory,
        responseProcessor?: AccountInfoApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AccountInfoApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AccountInfoApiResponseProcessor();
    }

    /**
     * Get Account information
     */
    public getAccountInformation(_options?: Configuration): Observable<AccountInfoResponse> {
        const requestContextPromise = this.requestFactory.getAccountInformation(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountInformation(rsp)));
            }));
    }

}

import { ApplicationActionsApiRequestFactory, ApplicationActionsApiResponseProcessor} from "../apis/ApplicationActionsApi";
export class ObservableApplicationActionsApi {
    private requestFactory: ApplicationActionsApiRequestFactory;
    private responseProcessor: ApplicationActionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationActionsApiRequestFactory,
        responseProcessor?: ApplicationActionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApplicationActionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApplicationActionsApiResponseProcessor();
    }

    /**
     * You must provide a git commit id
     * Deploy application
     * @param applicationId Application ID
     * @param deployRequest 
     */
    public deployApplication(applicationId: string, deployRequest?: DeployRequest, _options?: Configuration): Observable<Status> {
        const requestContextPromise = this.requestFactory.deployApplication(applicationId, deployRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deployApplication(rsp)));
            }));
    }

    /**
     * Restart application
     * @param applicationId Application ID
     */
    public restartApplication(applicationId: string, _options?: Configuration): Observable<Status> {
        const requestContextPromise = this.requestFactory.restartApplication(applicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restartApplication(rsp)));
            }));
    }

    /**
     * Stop application
     * @param applicationId Application ID
     */
    public stopApplication(applicationId: string, _options?: Configuration): Observable<Status> {
        const requestContextPromise = this.requestFactory.stopApplication(applicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.stopApplication(rsp)));
            }));
    }

}

import { ApplicationConfigurationApiRequestFactory, ApplicationConfigurationApiResponseProcessor} from "../apis/ApplicationConfigurationApi";
export class ObservableApplicationConfigurationApi {
    private requestFactory: ApplicationConfigurationApiRequestFactory;
    private responseProcessor: ApplicationConfigurationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationConfigurationApiRequestFactory,
        responseProcessor?: ApplicationConfigurationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApplicationConfigurationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApplicationConfigurationApiResponseProcessor();
    }

    /**
     * Edit the Network settings of the application.
     * Edit Application Network
     * @param applicationId Application ID
     * @param applicationNetworkRequest 
     */
    public editApplicationNetwork(applicationId: string, applicationNetworkRequest?: ApplicationNetworkRequest, _options?: Configuration): Observable<ApplicationNetworkResponse> {
        const requestContextPromise = this.requestFactory.editApplicationNetwork(applicationId, applicationNetworkRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editApplicationNetwork(rsp)));
            }));
    }

    /**
     * Get status of the application network settings.
     * Get Application Network information
     * @param applicationId Application ID
     */
    public getApplicationNetwork(applicationId: string, _options?: Configuration): Observable<ApplicationNetworkResponse> {
        const requestContextPromise = this.requestFactory.getApplicationNetwork(applicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApplicationNetwork(rsp)));
            }));
    }

}

import { ApplicationDatabaseApiRequestFactory, ApplicationDatabaseApiResponseProcessor} from "../apis/ApplicationDatabaseApi";
export class ObservableApplicationDatabaseApi {
    private requestFactory: ApplicationDatabaseApiRequestFactory;
    private responseProcessor: ApplicationDatabaseApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationDatabaseApiRequestFactory,
        responseProcessor?: ApplicationDatabaseApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApplicationDatabaseApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApplicationDatabaseApiResponseProcessor();
    }

    /**
     * Link a database to the application
     * @param applicationId Application ID
     * @param targetDatabaseId Target database ID
     */
    public attachDatabasetoApplication(applicationId: string, targetDatabaseId: string, _options?: Configuration): Observable<DatabaseResponse> {
        const requestContextPromise = this.requestFactory.attachDatabasetoApplication(applicationId, targetDatabaseId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.attachDatabasetoApplication(rsp)));
            }));
    }

    /**
     * Link a logical database to the application
     * @param applicationId Application ID
     * @param targetLogicalDatabaseId Target database ID
     */
    public attachLogicalDatabasetoApplication(applicationId: string, targetLogicalDatabaseId: string, _options?: Configuration): Observable<LogicalDatabaseResponse> {
        const requestContextPromise = this.requestFactory.attachLogicalDatabasetoApplication(applicationId, targetLogicalDatabaseId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.attachLogicalDatabasetoApplication(rsp)));
            }));
    }

    /**
     * List linked databases
     * @param applicationId Application ID
     */
    public listApplicationDatabase(applicationId: string, _options?: Configuration): Observable<DatabaseResponseList> {
        const requestContextPromise = this.requestFactory.listApplicationDatabase(applicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listApplicationDatabase(rsp)));
            }));
    }

    /**
     * List linked logical databases
     * @param applicationId Application ID
     */
    public listApplicationLogicalDatabase(applicationId: string, _options?: Configuration): Observable<LogicalDatabaseResponseList> {
        const requestContextPromise = this.requestFactory.listApplicationLogicalDatabase(applicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listApplicationLogicalDatabase(rsp)));
            }));
    }

    /**
     * Remove database link to this application.
     * @param applicationId Application ID
     * @param targetDatabaseId Target database ID
     */
    public removeDatabaseFromApplication(applicationId: string, targetDatabaseId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.removeDatabaseFromApplication(applicationId, targetDatabaseId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeDatabaseFromApplication(rsp)));
            }));
    }

    /**
     * Remove logical database link to this application.
     * @param applicationId Application ID
     * @param targetLogicalDatabaseId Target database ID
     */
    public removeLogicalDatabaseFromApplication(applicationId: string, targetLogicalDatabaseId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.removeLogicalDatabaseFromApplication(applicationId, targetLogicalDatabaseId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeLogicalDatabaseFromApplication(rsp)));
            }));
    }

}

import { ApplicationDeploymentHistoryApiRequestFactory, ApplicationDeploymentHistoryApiResponseProcessor} from "../apis/ApplicationDeploymentHistoryApi";
export class ObservableApplicationDeploymentHistoryApi {
    private requestFactory: ApplicationDeploymentHistoryApiRequestFactory;
    private responseProcessor: ApplicationDeploymentHistoryApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationDeploymentHistoryApiRequestFactory,
        responseProcessor?: ApplicationDeploymentHistoryApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApplicationDeploymentHistoryApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApplicationDeploymentHistoryApiResponseProcessor();
    }

    /**
     * By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter. You can also filter by status (FAILED or SUCCESS), and git_commit_id
     * List application deploys
     * @param applicationId Application ID
     * @param startId Starting point after which to return results
     */
    public listApplicationDeploymentHistory(applicationId: string, startId?: string, _options?: Configuration): Observable<DeploymentHistoryPaginatedResponseList> {
        const requestContextPromise = this.requestFactory.listApplicationDeploymentHistory(applicationId, startId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listApplicationDeploymentHistory(rsp)));
            }));
    }

}

import { ApplicationEnvironmentVariableApiRequestFactory, ApplicationEnvironmentVariableApiResponseProcessor} from "../apis/ApplicationEnvironmentVariableApi";
export class ObservableApplicationEnvironmentVariableApi {
    private requestFactory: ApplicationEnvironmentVariableApiRequestFactory;
    private responseProcessor: ApplicationEnvironmentVariableApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationEnvironmentVariableApiRequestFactory,
        responseProcessor?: ApplicationEnvironmentVariableApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApplicationEnvironmentVariableApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApplicationEnvironmentVariableApiResponseProcessor();
    }

    /**
     * - Add an environment variable to the application. 
     * Add an environment variable to the application
     * @param applicationId Application ID
     * @param environmentVariableRequest 
     */
    public createApplicationEnvironmentVariable(applicationId: string, environmentVariableRequest?: EnvironmentVariableRequest, _options?: Configuration): Observable<EnvironmentVariableResponse> {
        const requestContextPromise = this.requestFactory.createApplicationEnvironmentVariable(applicationId, environmentVariableRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createApplicationEnvironmentVariable(rsp)));
            }));
    }

    /**
     * - Allows you to add an alias at application level on an existing environment variable having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new environment variable at application level with the same value as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the aliased_variable will be exposed in the \"aliased_variable\" field of the newly created variable - Only 1 alias level is allowed. You can't create an alias on an alias 
     * Create an environment variable alias at the application level
     * @param applicationId Application ID
     * @param environmentVariableId Environment Variable ID
     * @param key 
     */
    public createApplicationEnvironmentVariableAlias(applicationId: string, environmentVariableId: string, key?: Key, _options?: Configuration): Observable<EnvironmentVariableResponse> {
        const requestContextPromise = this.requestFactory.createApplicationEnvironmentVariableAlias(applicationId, environmentVariableId, key, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createApplicationEnvironmentVariableAlias(rsp)));
            }));
    }

    /**
     * - Allows you to override at application level an environment variable that has a higher scope. - You only have to specify a value in the request body - The system will create a new environment variable at application level with the same key as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the overridden_variable will be exposed in the \"overridden_variable\" field of the newly created variable 
     * Create an environment variable override at the application level
     * @param applicationId Application ID
     * @param environmentVariableId Environment Variable ID
     * @param value 
     */
    public createApplicationEnvironmentVariableOverride(applicationId: string, environmentVariableId: string, value?: Value, _options?: Configuration): Observable<EnvironmentVariableResponse> {
        const requestContextPromise = this.requestFactory.createApplicationEnvironmentVariableOverride(applicationId, environmentVariableId, value, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createApplicationEnvironmentVariableOverride(rsp)));
            }));
    }

    /**
     * - To delete an environment variable from an application you must have the project user permission - You can't delete a BUILT_IN variable - If you delete a variable having override or alias, the associated override/alias will be deleted as well 
     * Delete an environment variable from an application
     * @param applicationId Application ID
     * @param environmentVariableId Environment Variable ID
     */
    public deleteApplicationEnvironmentVariable(applicationId: string, environmentVariableId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteApplicationEnvironmentVariable(applicationId, environmentVariableId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteApplicationEnvironmentVariable(rsp)));
            }));
    }

    /**
     * - You can't edit a BUILT_IN variable - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the variable it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 
     * Edit an environment variable belonging to the application
     * @param applicationId Application ID
     * @param environmentVariableId Environment Variable ID
     * @param environmentVariableEditRequest 
     */
    public editApplicationEnvironmentVariable(applicationId: string, environmentVariableId: string, environmentVariableEditRequest: EnvironmentVariableEditRequest, _options?: Configuration): Observable<EnvironmentVariableResponse> {
        const requestContextPromise = this.requestFactory.editApplicationEnvironmentVariable(applicationId, environmentVariableId, environmentVariableEditRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editApplicationEnvironmentVariable(rsp)));
            }));
    }

    /**
     * Import environment variables in a defined scope, with a defined visibility.
     * Import variables
     * @param applicationId Application ID
     * @param variableImportRequest 
     */
    public importEnvironmentVariable(applicationId: string, variableImportRequest?: VariableImportRequest, _options?: Configuration): Observable<VariableImportResponse> {
        const requestContextPromise = this.requestFactory.importEnvironmentVariable(applicationId, variableImportRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.importEnvironmentVariable(rsp)));
            }));
    }

    /**
     * List environment variables
     * @param applicationId Application ID
     */
    public listApplicationEnvironmentVariable(applicationId: string, _options?: Configuration): Observable<EnvironmentVariableResponseList> {
        const requestContextPromise = this.requestFactory.listApplicationEnvironmentVariable(applicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listApplicationEnvironmentVariable(rsp)));
            }));
    }

}

import { ApplicationEventApiRequestFactory, ApplicationEventApiResponseProcessor} from "../apis/ApplicationEventApi";
export class ObservableApplicationEventApi {
    private requestFactory: ApplicationEventApiRequestFactory;
    private responseProcessor: ApplicationEventApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationEventApiRequestFactory,
        responseProcessor?: ApplicationEventApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApplicationEventApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApplicationEventApiResponseProcessor();
    }

    /**
     * By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter
     * List application events
     * @param applicationId Application ID
     * @param startId Starting point after which to return results
     */
    public listApplicationEvent(applicationId: string, startId?: string, _options?: Configuration): Observable<EventPaginatedResponseList> {
        const requestContextPromise = this.requestFactory.listApplicationEvent(applicationId, startId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listApplicationEvent(rsp)));
            }));
    }

}

import { ApplicationLogsApiRequestFactory, ApplicationLogsApiResponseProcessor} from "../apis/ApplicationLogsApi";
export class ObservableApplicationLogsApi {
    private requestFactory: ApplicationLogsApiRequestFactory;
    private responseProcessor: ApplicationLogsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationLogsApiRequestFactory,
        responseProcessor?: ApplicationLogsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApplicationLogsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApplicationLogsApiResponseProcessor();
    }

    /**
     * This will list the last 1000 logs of the application
     * List logs
     * @param applicationId Application ID
     */
    public listApplicationLog(applicationId: string, _options?: Configuration): Observable<LogResponseList> {
        const requestContextPromise = this.requestFactory.listApplicationLog(applicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listApplicationLog(rsp)));
            }));
    }

}

import { ApplicationMainCallsApiRequestFactory, ApplicationMainCallsApiResponseProcessor} from "../apis/ApplicationMainCallsApi";
export class ObservableApplicationMainCallsApi {
    private requestFactory: ApplicationMainCallsApiRequestFactory;
    private responseProcessor: ApplicationMainCallsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationMainCallsApiRequestFactory,
        responseProcessor?: ApplicationMainCallsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApplicationMainCallsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApplicationMainCallsApiResponseProcessor();
    }

    /**
     * Add application tag
     * @param applicationId Application ID
     * @param tagRequest 
     */
    public createApplicationTag(applicationId: string, tagRequest?: TagRequest, _options?: Configuration): Observable<TagResponseList> {
        const requestContextPromise = this.requestFactory.createApplicationTag(applicationId, tagRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createApplicationTag(rsp)));
            }));
    }

    /**
     * To delete the application you must have the admin permission
     * Delete application
     * @param applicationId Application ID
     */
    public deleteApplication(applicationId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteApplication(applicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteApplication(rsp)));
            }));
    }

    /**
     * Delete application tag
     * @param applicationId Application ID
     * @param tagId Tag ID
     */
    public deleteApplicationTag(applicationId: string, tagId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteApplicationTag(applicationId, tagId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteApplicationTag(rsp)));
            }));
    }

    /**
     * - To edit the application you must have the admin permission. - For port edition, if you provide a port id, we will update the corresponding port. If you don't we will create a new one. If you remove a port from the payload, we will delete it. - For storage edition, if you provide a storage id, we will update the corresponding storage. If you don't we will create a new one. If you remove a storage from the payload, we will delete it. 
     * Edit application
     * @param applicationId Application ID
     * @param applicationEditRequest 
     */
    public editApplication(applicationId: string, applicationEditRequest?: ApplicationEditRequest, _options?: Configuration): Observable<ApplicationResponse> {
        const requestContextPromise = this.requestFactory.editApplication(applicationId, applicationEditRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editApplication(rsp)));
            }));
    }

    /**
     * Get application by ID
     * @param applicationId Application ID
     */
    public getApplication(applicationId: string, _options?: Configuration): Observable<ApplicationResponse> {
        const requestContextPromise = this.requestFactory.getApplication(applicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApplication(rsp)));
            }));
    }

    /**
     * Get application status
     * @param applicationId Application ID
     */
    public getApplicationStatus(applicationId: string, _options?: Configuration): Observable<Status> {
        const requestContextPromise = this.requestFactory.getApplicationStatus(applicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApplicationStatus(rsp)));
            }));
    }

    /**
     * Returns list of the last 100 commits made on the repository linked to the application
     * List last commits
     * @param applicationId Application ID
     * @param startId Starting point after which to return results
     * @param gitCommitId Git Commit ID
     */
    public listApplicationCommit(applicationId: string, startId?: string, gitCommitId?: string, _options?: Configuration): Observable<CommitResponseList> {
        const requestContextPromise = this.requestFactory.listApplicationCommit(applicationId, startId, gitCommitId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listApplicationCommit(rsp)));
            }));
    }

    /**
     * List contributors
     * @param applicationId Application ID
     */
    public listApplicationContributor(applicationId: string, _options?: Configuration): Observable<UserResponseList> {
        const requestContextPromise = this.requestFactory.listApplicationContributor(applicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listApplicationContributor(rsp)));
            }));
    }

    /**
     * This will return all the custom domains and Qovery autogenerated domain for the given application
     * List all URLs of the application
     * @param applicationId Application ID
     */
    public listApplicationLinks(applicationId: string, _options?: Configuration): Observable<LinkResponseList> {
        const requestContextPromise = this.requestFactory.listApplicationLinks(applicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listApplicationLinks(rsp)));
            }));
    }

    /**
     * List tags
     * @param applicationId Application ID
     */
    public listApplicationTag(applicationId: string, _options?: Configuration): Observable<TagResponseList> {
        const requestContextPromise = this.requestFactory.listApplicationTag(applicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listApplicationTag(rsp)));
            }));
    }

}

import { ApplicationMetricsApiRequestFactory, ApplicationMetricsApiResponseProcessor} from "../apis/ApplicationMetricsApi";
export class ObservableApplicationMetricsApi {
    private requestFactory: ApplicationMetricsApiRequestFactory;
    private responseProcessor: ApplicationMetricsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationMetricsApiRequestFactory,
        responseProcessor?: ApplicationMetricsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApplicationMetricsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApplicationMetricsApiResponseProcessor();
    }

    /**
     * List currently running instances of the application with their CPU and RAM metrics
     * @param applicationId Application ID
     */
    public getApplicationCurrentInstance(applicationId: string, _options?: Configuration): Observable<InstanceResponseList> {
        const requestContextPromise = this.requestFactory.getApplicationCurrentInstance(applicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApplicationCurrentInstance(rsp)));
            }));
    }

    /**
     * Returns min, max, and running number of instances of the application
     * Get current scaling of the application
     * @param applicationId Application ID
     */
    public getApplicationCurrentScale(applicationId: string, _options?: Configuration): Observable<ApplicationCurrentScaleResponse> {
        const requestContextPromise = this.requestFactory.getApplicationCurrentScale(applicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApplicationCurrentScale(rsp)));
            }));
    }

    /**
     * List current storage disk usage
     * @param applicationId Application ID
     */
    public getApplicationCurrentStorageDisk(applicationId: string, _options?: Configuration): Observable<StorageDiskResponseList> {
        const requestContextPromise = this.requestFactory.getApplicationCurrentStorageDisk(applicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApplicationCurrentStorageDisk(rsp)));
            }));
    }

    /**
     * Get CPU consumption metric over time for the application
     * @param applicationId Application ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public getApplicationMetricCpu(applicationId: string, lastSeconds: number, _options?: Configuration): Observable<MetricCPUResponseList> {
        const requestContextPromise = this.requestFactory.getApplicationMetricCpu(applicationId, lastSeconds, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApplicationMetricCpu(rsp)));
            }));
    }

    /**
     * The value returned corresponds to the 95th centile
     * Get Health Check latency  metric over time for the application
     * @param applicationId Application ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public getApplicationMetricHealthCheck(applicationId: string, lastSeconds: number, _options?: Configuration): Observable<MetricGenericResponseList> {
        const requestContextPromise = this.requestFactory.getApplicationMetricHealthCheck(applicationId, lastSeconds, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApplicationMetricHealthCheck(rsp)));
            }));
    }

    /**
     * Get Memory consumption metric over time for the application
     * @param applicationId Application ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public getApplicationMetricMemory(applicationId: string, lastSeconds: number, _options?: Configuration): Observable<MetricMemoryResponseList> {
        const requestContextPromise = this.requestFactory.getApplicationMetricMemory(applicationId, lastSeconds, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApplicationMetricMemory(rsp)));
            }));
    }

    /**
     * Get application restart message and timestamp.
     * List application restarts
     * @param applicationId Application ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public getApplicationMetricRestart(applicationId: string, lastSeconds: number, _options?: Configuration): Observable<MetricRestartResponse> {
        const requestContextPromise = this.requestFactory.getApplicationMetricRestart(applicationId, lastSeconds, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApplicationMetricRestart(rsp)));
            }));
    }

    /**
     * Get Storage consumption metric over time for the application
     * @param applicationId Application ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public getApplicationMetricStorage(applicationId: string, lastSeconds: number, _options?: Configuration): Observable<MetricStorageResponseList> {
        const requestContextPromise = this.requestFactory.getApplicationMetricStorage(applicationId, lastSeconds, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApplicationMetricStorage(rsp)));
            }));
    }

}

import { ApplicationSecretApiRequestFactory, ApplicationSecretApiResponseProcessor} from "../apis/ApplicationSecretApi";
export class ObservableApplicationSecretApi {
    private requestFactory: ApplicationSecretApiRequestFactory;
    private responseProcessor: ApplicationSecretApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationSecretApiRequestFactory,
        responseProcessor?: ApplicationSecretApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApplicationSecretApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApplicationSecretApiResponseProcessor();
    }

    /**
     * - Add a secret to the application. 
     * Add a secret to the application
     * @param applicationId Application ID
     * @param secretRequest 
     */
    public createApplicationSecret(applicationId: string, secretRequest?: SecretRequest, _options?: Configuration): Observable<SecretResponse> {
        const requestContextPromise = this.requestFactory.createApplicationSecret(applicationId, secretRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createApplicationSecret(rsp)));
            }));
    }

    /**
     * - Allows you to add an alias at application level on an existing secret having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new secret at application level with the same value as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the aliased_secret will be exposed in the \"aliased_secret\" field of the newly created secret - Only 1 alias level is allowed. You can't create an alias on an alias 
     * Create a secret alias at the application level
     * @param applicationId Application ID
     * @param secretId Secret ID
     * @param key 
     */
    public createApplicationSecretAlias(applicationId: string, secretId: string, key?: Key, _options?: Configuration): Observable<SecretResponse> {
        const requestContextPromise = this.requestFactory.createApplicationSecretAlias(applicationId, secretId, key, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createApplicationSecretAlias(rsp)));
            }));
    }

    /**
     * - Allows you to override at application level a secret that has a higher scope. - You only have to specify a value in the request body - The system will create a new secret at application level with the same key as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the overridden_secret will be exposed in the \"overridden_secret\" field of the newly created secret 
     * Create a secret override at the application level
     * @param applicationId Application ID
     * @param secretId Secret ID
     * @param value 
     */
    public createApplicationSecretOverride(applicationId: string, secretId: string, value?: Value, _options?: Configuration): Observable<SecretResponse> {
        const requestContextPromise = this.requestFactory.createApplicationSecretOverride(applicationId, secretId, value, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createApplicationSecretOverride(rsp)));
            }));
    }

    /**
     * - To delete a secret you must have the project user permission - You can't delete a BUILT_IN secret - If you delete a secret having override or alias, the associated override/alias will be deleted as well 
     * Delete a secret from an application
     * @param applicationId Application ID
     * @param secretId Secret ID
     */
    public deleteApplicationSecret(applicationId: string, secretId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteApplicationSecret(applicationId, secretId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteApplicationSecret(rsp)));
            }));
    }

    /**
     * - You can't edit a BUILT_IN secret - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the secret it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 
     * Edit a secret belonging to the application
     * @param applicationId Application ID
     * @param secretId Secret ID
     * @param secretEditRequest 
     */
    public editApplicationSecret(applicationId: string, secretId: string, secretEditRequest: SecretEditRequest, _options?: Configuration): Observable<SecretResponse> {
        const requestContextPromise = this.requestFactory.editApplicationSecret(applicationId, secretId, secretEditRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editApplicationSecret(rsp)));
            }));
    }

    /**
     * Secrets are like environment variables, but they are secured and can't be revealed.
     * List application secrets
     * @param applicationId Application ID
     */
    public listApplicationSecrets(applicationId: string, _options?: Configuration): Observable<SecretResponseList> {
        const requestContextPromise = this.requestFactory.listApplicationSecrets(applicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listApplicationSecrets(rsp)));
            }));
    }

}

import { ApplicationsApiRequestFactory, ApplicationsApiResponseProcessor} from "../apis/ApplicationsApi";
export class ObservableApplicationsApi {
    private requestFactory: ApplicationsApiRequestFactory;
    private responseProcessor: ApplicationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationsApiRequestFactory,
        responseProcessor?: ApplicationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApplicationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApplicationsApiResponseProcessor();
    }

    /**
     * Create an application
     * @param environmentId Environment ID
     * @param applicationRequest 
     */
    public createApplication(environmentId: string, applicationRequest?: ApplicationRequest, _options?: Configuration): Observable<ApplicationResponse> {
        const requestContextPromise = this.requestFactory.createApplication(environmentId, applicationRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createApplication(rsp)));
            }));
    }

    /**
     * List running instances with CPU and RAM usage for each application
     * @param environmentId Environment ID
     */
    public getEnvironmentApplicationCurrentInstance(environmentId: string, _options?: Configuration): Observable<EnvironmentApplicationsInstanceResponseList> {
        const requestContextPromise = this.requestFactory.getEnvironmentApplicationCurrentInstance(environmentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEnvironmentApplicationCurrentInstance(rsp)));
            }));
    }

    /**
     * Returns min, max, and running number of instances for each application
     * List current scaling information for each application
     * @param environmentId Environment ID
     */
    public getEnvironmentApplicationCurrentScale(environmentId: string, _options?: Configuration): Observable<EnvironmentApplicationsCurrentScaleResponseList> {
        const requestContextPromise = this.requestFactory.getEnvironmentApplicationCurrentScale(environmentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEnvironmentApplicationCurrentScale(rsp)));
            }));
    }

    /**
     * List current storage disk usage for each application
     * @param environmentId Environment ID
     */
    public getEnvironmentApplicationCurrentStorage(environmentId: string, _options?: Configuration): Observable<EnvironmentApplicationsStorageResponseList> {
        const requestContextPromise = this.requestFactory.getEnvironmentApplicationCurrentStorage(environmentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEnvironmentApplicationCurrentStorage(rsp)));
            }));
    }

    /**
     * Returns a list of applications with only their id and status.
     * List all environment applications statuses
     * @param environmentId Environment ID
     */
    public getEnvironmentApplicationStatus(environmentId: string, _options?: Configuration): Observable<ReferenceObjectStatusResponseList> {
        const requestContextPromise = this.requestFactory.getEnvironmentApplicationStatus(environmentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEnvironmentApplicationStatus(rsp)));
            }));
    }

    /**
     * Returns list of languages supported by Buildpacks.
     * List supported languages
     * @param environmentId Environment ID
     */
    public getEnvironmentApplicationSupportedLanguages(environmentId: string, _options?: Configuration): Observable<EnvironmentApplicationsSupportedLanguageList> {
        const requestContextPromise = this.requestFactory.getEnvironmentApplicationSupportedLanguages(environmentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEnvironmentApplicationSupportedLanguages(rsp)));
            }));
    }

    /**
     * List applications
     * @param environmentId Environment ID
     * @param toUpdate return (or not) results that must be updated
     */
    public listApplication(environmentId: string, toUpdate?: boolean, _options?: Configuration): Observable<ApplicationResponseList> {
        const requestContextPromise = this.requestFactory.listApplication(environmentId, toUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listApplication(rsp)));
            }));
    }

}

import { BackupsApiRequestFactory, BackupsApiResponseProcessor} from "../apis/BackupsApi";
export class ObservableBackupsApi {
    private requestFactory: BackupsApiRequestFactory;
    private responseProcessor: BackupsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BackupsApiRequestFactory,
        responseProcessor?: BackupsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BackupsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BackupsApiResponseProcessor();
    }

    /**
     * Add a backup to the Database 
     * @param databaseId Database ID
     * @param backupRequest 
     */
    public addBackupDatabase(databaseId: string, backupRequest?: BackupRequest, _options?: Configuration): Observable<BackupResponse> {
        const requestContextPromise = this.requestFactory.addBackupDatabase(databaseId, backupRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addBackupDatabase(rsp)));
            }));
    }

    /**
     * By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter
     * List database  backups
     * @param databaseId Database ID
     * @param startId Starting point after which to return results
     */
    public listDatabaseBackup(databaseId: string, startId?: string, _options?: Configuration): Observable<BackupPaginatedResponseList> {
        const requestContextPromise = this.requestFactory.listDatabaseBackup(databaseId, startId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listDatabaseBackup(rsp)));
            }));
    }

    /**
     * Remove database  backup
     * @param databaseId Database ID
     * @param backupId Database Backup ID
     */
    public removeDatabaseBackup(databaseId: string, backupId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.removeDatabaseBackup(databaseId, backupId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeDatabaseBackup(rsp)));
            }));
    }

}

import { BillingApiRequestFactory, BillingApiResponseProcessor} from "../apis/BillingApi";
export class ObservableBillingApi {
    private requestFactory: BillingApiRequestFactory;
    private responseProcessor: BillingApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BillingApiRequestFactory,
        responseProcessor?: BillingApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BillingApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BillingApiResponseProcessor();
    }

    /**
     * Add credit card
     * @param organizationId Organization ID
     * @param creditCardRequest 
     */
    public addCreditCard(organizationId: string, creditCardRequest?: CreditCardRequest, _options?: Configuration): Observable<CreditCardResponse> {
        const requestContextPromise = this.requestFactory.addCreditCard(organizationId, creditCardRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addCreditCard(rsp)));
            }));
    }

    /**
     * Add credit code
     * @param organizationId Organization ID
     * @param organizationCreditCodeRequest 
     */
    public addCreditCode(organizationId: string, organizationCreditCodeRequest?: OrganizationCreditCodeRequest, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.addCreditCode(organizationId, organizationCreditCodeRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addCreditCode(rsp)));
            }));
    }

    /**
     * Delete credit card
     * @param organizationId Organization ID
     * @param creditCardId Credit Card ID
     */
    public deleteCreditCard(organizationId: string, creditCardId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteCreditCard(organizationId, creditCardId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCreditCard(rsp)));
            }));
    }

    /**
     * Edit Organization Billing Info
     * @param organizationId Organization ID
     * @param billingInfoRequest 
     */
    public editOrganizationBillingInfo(organizationId: string, billingInfoRequest?: BillingInfoRequest, _options?: Configuration): Observable<BillingInfoResponse> {
        const requestContextPromise = this.requestFactory.editOrganizationBillingInfo(organizationId, billingInfoRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editOrganizationBillingInfo(rsp)));
            }));
    }

    /**
     * Get your cluster cost range. We are unable to give a precise cost of your infrastructure at the moment. But Qovery guarantees that the cost of your cluster will not exceed the max range. 
     * Get cluster current cost
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     */
    public getClusterCurrentCost(organizationId: string, clusterId: string, _options?: Configuration): Observable<CostRangeResponse> {
        const requestContextPromise = this.requestFactory.getClusterCurrentCost(organizationId, clusterId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getClusterCurrentCost(rsp)));
            }));
    }

    /**
     * Get organization billing info
     * @param organizationId Organization ID
     */
    public getOrganizationBillingInfo(organizationId: string, _options?: Configuration): Observable<BillingInfoResponse> {
        const requestContextPromise = this.requestFactory.getOrganizationBillingInfo(organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganizationBillingInfo(rsp)));
            }));
    }

    /**
     * This endpoint returns a \"is_valid\" boolean field reflecting the billing status of the organization: - If true, the organization billing is valid - For Startup organization, it returns false if there is at least 1 invoice unpaid since 1 week - For Community organization, it returns false if there is no credit left 
     * Get organization billing status
     * @param organizationId Organization ID
     */
    public getOrganizationBillingStatus(organizationId: string, _options?: Configuration): Observable<BillingStatus> {
        const requestContextPromise = this.requestFactory.getOrganizationBillingStatus(organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganizationBillingStatus(rsp)));
            }));
    }

    /**
     * Get organization current cost
     * @param organizationId Organization ID
     */
    public getOrganizationCurrentCost(organizationId: string, _options?: Configuration): Observable<OrganizationCurrentCostResponse> {
        const requestContextPromise = this.requestFactory.getOrganizationCurrentCost(organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganizationCurrentCost(rsp)));
            }));
    }

    /**
     * Get organization invoice
     * @param organizationId Organization ID
     * @param invoiceId Invoice ID
     */
    public getOrganizationInvoice(organizationId: string, invoiceId: string, _options?: Configuration): Observable<InvoiceResponse> {
        const requestContextPromise = this.requestFactory.getOrganizationInvoice(organizationId, invoiceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganizationInvoice(rsp)));
            }));
    }

    /**
     * This will return URL of the invoice PDF
     * Get invoice link
     * @param organizationId Organization ID
     * @param invoiceId Invoice ID
     */
    public getOrganizationInvoicePDF(organizationId: string, invoiceId: string, _options?: Configuration): Observable<LinkResponse> {
        const requestContextPromise = this.requestFactory.getOrganizationInvoicePDF(organizationId, invoiceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganizationInvoicePDF(rsp)));
            }));
    }

    /**
     * List organization credit cards
     * @param organizationId Organization ID
     */
    public listOrganizationCreditCards(organizationId: string, _options?: Configuration): Observable<CreditCardResponseList> {
        const requestContextPromise = this.requestFactory.listOrganizationCreditCards(organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOrganizationCreditCards(rsp)));
            }));
    }

    /**
     * List organization invoices
     * @param organizationId Organization ID
     */
    public listOrganizationInvoice(organizationId: string, _options?: Configuration): Observable<InvoiceResponseList> {
        const requestContextPromise = this.requestFactory.listOrganizationInvoice(organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOrganizationInvoice(rsp)));
            }));
    }

    /**
     * Download all invoices
     * @param organizationId Organization ID
     */
    public organizationDownloadAllInvoices(organizationId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.organizationDownloadAllInvoices(organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.organizationDownloadAllInvoices(rsp)));
            }));
    }

}

import { CloudProviderApiRequestFactory, CloudProviderApiResponseProcessor} from "../apis/CloudProviderApi";
export class ObservableCloudProviderApi {
    private requestFactory: CloudProviderApiRequestFactory;
    private responseProcessor: CloudProviderApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CloudProviderApiRequestFactory,
        responseProcessor?: CloudProviderApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CloudProviderApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CloudProviderApiResponseProcessor();
    }

    /**
     * List AWS features available
     */
    public listAWSFeatures(_options?: Configuration): Observable<ClusterFeatureResponseList> {
        const requestContextPromise = this.requestFactory.listAWSFeatures(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAWSFeatures(rsp)));
            }));
    }

    /**
     * List AWS regions
     */
    public listAWSRegions(_options?: Configuration): Observable<ClusterRegionResponseList> {
        const requestContextPromise = this.requestFactory.listAWSRegions(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAWSRegions(rsp)));
            }));
    }

    /**
     * List Cloud providers available
     */
    public listCloudProvider(_options?: Configuration): Observable<CloudProviderResponseList> {
        const requestContextPromise = this.requestFactory.listCloudProvider(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCloudProvider(rsp)));
            }));
    }

    /**
     * List DO features available
     */
    public listDOFeatures(_options?: Configuration): Observable<ClusterFeatureResponseList> {
        const requestContextPromise = this.requestFactory.listDOFeatures(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listDOFeatures(rsp)));
            }));
    }

    /**
     * List DO regions
     */
    public listDORegions(_options?: Configuration): Observable<ClusterRegionResponseList> {
        const requestContextPromise = this.requestFactory.listDORegions(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listDORegions(rsp)));
            }));
    }

    /**
     * List Scaleway features available
     */
    public listScalewayFeatures(_options?: Configuration): Observable<ClusterFeatureResponseList> {
        const requestContextPromise = this.requestFactory.listScalewayFeatures(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listScalewayFeatures(rsp)));
            }));
    }

    /**
     * List Scaleway regions
     */
    public listScalewayRegions(_options?: Configuration): Observable<ClusterRegionResponseList> {
        const requestContextPromise = this.requestFactory.listScalewayRegions(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listScalewayRegions(rsp)));
            }));
    }

}

import { CloudProviderCredentialsApiRequestFactory, CloudProviderCredentialsApiResponseProcessor} from "../apis/CloudProviderCredentialsApi";
export class ObservableCloudProviderCredentialsApi {
    private requestFactory: CloudProviderCredentialsApiRequestFactory;
    private responseProcessor: CloudProviderCredentialsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CloudProviderCredentialsApiRequestFactory,
        responseProcessor?: CloudProviderCredentialsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CloudProviderCredentialsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CloudProviderCredentialsApiResponseProcessor();
    }

    /**
     * Create AWS credentials set
     * @param organizationId Organization ID
     * @param awsCredentialsRequest 
     */
    public createAWSCredentials(organizationId: string, awsCredentialsRequest?: AwsCredentialsRequest, _options?: Configuration): Observable<ClusterCredentialsResponse> {
        const requestContextPromise = this.requestFactory.createAWSCredentials(organizationId, awsCredentialsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAWSCredentials(rsp)));
            }));
    }

    /**
     * Create Digital Ocean credentials set
     * @param organizationId Organization ID
     * @param doCredentialsRequest 
     */
    public createDOCredentials(organizationId: string, doCredentialsRequest?: DoCredentialsRequest, _options?: Configuration): Observable<ClusterCredentialsResponse> {
        const requestContextPromise = this.requestFactory.createDOCredentials(organizationId, doCredentialsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDOCredentials(rsp)));
            }));
    }

    /**
     * Create Scaleway credentials set
     * @param organizationId Organization ID
     * @param scalewayCredentialsRequest 
     */
    public createScalewayCredentials(organizationId: string, scalewayCredentialsRequest?: ScalewayCredentialsRequest, _options?: Configuration): Observable<ClusterCredentialsResponse> {
        const requestContextPromise = this.requestFactory.createScalewayCredentials(organizationId, scalewayCredentialsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createScalewayCredentials(rsp)));
            }));
    }

    /**
     * Delete a set of AWS credentials
     * @param credentialsId Credentials ID
     * @param organizationId Organization ID
     */
    public deleteAWSCredentials(credentialsId: string, organizationId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAWSCredentials(credentialsId, organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAWSCredentials(rsp)));
            }));
    }

    /**
     * Delete a set of Digital Ocean credentials
     * @param credentialsId Credentials ID
     * @param organizationId Organization ID
     */
    public deleteDOCredentials(credentialsId: string, organizationId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteDOCredentials(credentialsId, organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDOCredentials(rsp)));
            }));
    }

    /**
     * Delete a set of Scaleway credentials
     * @param credentialsId Credentials ID
     * @param organizationId Organization ID
     */
    public deleteScalewayCredentials(credentialsId: string, organizationId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteScalewayCredentials(credentialsId, organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteScalewayCredentials(rsp)));
            }));
    }

    /**
     * Edit a set of AWS credentials
     * @param organizationId Organization ID
     * @param credentialsId Credentials ID
     * @param awsCredentialsRequest 
     */
    public editAWSCredentials(organizationId: string, credentialsId: string, awsCredentialsRequest?: AwsCredentialsRequest, _options?: Configuration): Observable<ClusterCredentialsResponse> {
        const requestContextPromise = this.requestFactory.editAWSCredentials(organizationId, credentialsId, awsCredentialsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editAWSCredentials(rsp)));
            }));
    }

    /**
     * Edit a set of Digital Ocean credentials
     * @param organizationId Organization ID
     * @param credentialsId Credentials ID
     * @param doCredentialsRequest 
     */
    public editDOCredentials(organizationId: string, credentialsId: string, doCredentialsRequest?: DoCredentialsRequest, _options?: Configuration): Observable<ClusterCredentialsResponse> {
        const requestContextPromise = this.requestFactory.editDOCredentials(organizationId, credentialsId, doCredentialsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editDOCredentials(rsp)));
            }));
    }

    /**
     * Edit a set of Scaleway credentials
     * @param organizationId Organization ID
     * @param credentialsId Credentials ID
     * @param scalewayCredentialsRequest 
     */
    public editScalewayCredentials(organizationId: string, credentialsId: string, scalewayCredentialsRequest?: ScalewayCredentialsRequest, _options?: Configuration): Observable<ClusterCredentialsResponse> {
        const requestContextPromise = this.requestFactory.editScalewayCredentials(organizationId, credentialsId, scalewayCredentialsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editScalewayCredentials(rsp)));
            }));
    }

    /**
     * List AWS credentials
     * @param organizationId Organization ID
     */
    public listAWSCredentials(organizationId: string, _options?: Configuration): Observable<ClusterCredentialsResponseList> {
        const requestContextPromise = this.requestFactory.listAWSCredentials(organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAWSCredentials(rsp)));
            }));
    }

    /**
     * List DO credentials
     * @param organizationId Organization ID
     */
    public listDOCredentials(organizationId: string, _options?: Configuration): Observable<ClusterCredentialsResponseList> {
        const requestContextPromise = this.requestFactory.listDOCredentials(organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listDOCredentials(rsp)));
            }));
    }

    /**
     * List Scaleway credentials
     * @param organizationId Organization ID
     */
    public listScalewayCredentials(organizationId: string, _options?: Configuration): Observable<ClusterCredentialsResponseList> {
        const requestContextPromise = this.requestFactory.listScalewayCredentials(organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listScalewayCredentials(rsp)));
            }));
    }

}

import { ClustersApiRequestFactory, ClustersApiResponseProcessor} from "../apis/ClustersApi";
export class ObservableClustersApi {
    private requestFactory: ClustersApiRequestFactory;
    private responseProcessor: ClustersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ClustersApiRequestFactory,
        responseProcessor?: ClustersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ClustersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ClustersApiResponseProcessor();
    }

    /**
     * Create a cluster
     * @param organizationId Organization ID
     * @param clusterRequest 
     */
    public createCluster(organizationId: string, clusterRequest?: ClusterRequest, _options?: Configuration): Observable<ClusterResponse> {
        const requestContextPromise = this.requestFactory.createCluster(organizationId, clusterRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCluster(rsp)));
            }));
    }

    /**
     * Delete a cluster
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     */
    public deleteCluster(organizationId: string, clusterId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteCluster(organizationId, clusterId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCluster(rsp)));
            }));
    }

    /**
     * allows to deploy a cluster
     * Deploy a cluster
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     */
    public deployCluster(organizationId: string, clusterId: string, _options?: Configuration): Observable<ClusterStatusResponse> {
        const requestContextPromise = this.requestFactory.deployCluster(organizationId, clusterId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deployCluster(rsp)));
            }));
    }

    /**
     * Edit a cluster
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     * @param clusterRequest 
     */
    public editCluster(organizationId: string, clusterId: string, clusterRequest?: ClusterRequest, _options?: Configuration): Observable<ClusterResponse> {
        const requestContextPromise = this.requestFactory.editCluster(organizationId, clusterId, clusterRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editCluster(rsp)));
            }));
    }

    /**
     * Edit routing table by returning updated table.
     * Edit routing table
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     * @param clusterRoutingTableRequest 
     */
    public editRoutingTable(organizationId: string, clusterId: string, clusterRoutingTableRequest?: ClusterRoutingTableRequest, _options?: Configuration): Observable<ClusterRoutingTableResponse> {
        const requestContextPromise = this.requestFactory.editRoutingTable(organizationId, clusterId, clusterRoutingTableRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editRoutingTable(rsp)));
            }));
    }

    /**
     * Know if a cluster is ready to be deployed or not
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     */
    public getClusterReadinessStatus(organizationId: string, clusterId: string, _options?: Configuration): Observable<ClusterReadinessStatus> {
        const requestContextPromise = this.requestFactory.getClusterReadinessStatus(organizationId, clusterId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getClusterReadinessStatus(rsp)));
            }));
    }

    /**
     * Get cluster status
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     */
    public getClusterStatus(organizationId: string, clusterId: string, _options?: Configuration): Observable<ClusterStatusResponse> {
        const requestContextPromise = this.requestFactory.getClusterStatus(organizationId, clusterId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getClusterStatus(rsp)));
            }));
    }

    /**
     * Get cluster cloud provider info and credentials
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     */
    public getOrganizationCloudProviderInfo(organizationId: string, clusterId: string, _options?: Configuration): Observable<ClusterCloudProviderInfoResponse> {
        const requestContextPromise = this.requestFactory.getOrganizationCloudProviderInfo(organizationId, clusterId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganizationCloudProviderInfo(rsp)));
            }));
    }

    /**
     * Returns a list of clusters with only their id and status.
     * List all clusters statuses
     * @param organizationId Organization ID
     */
    public getOrganizationClusterStatus(organizationId: string, _options?: Configuration): Observable<ClusterStatusResponseList> {
        const requestContextPromise = this.requestFactory.getOrganizationClusterStatus(organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganizationClusterStatus(rsp)));
            }));
    }

    /**
     * Retrieve network routing table where each line corresponds to a route between a destination and a target.
     * Get routing table
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     */
    public getRoutingTable(organizationId: string, clusterId: string, _options?: Configuration): Observable<ClusterRoutingTableResponse> {
        const requestContextPromise = this.requestFactory.getRoutingTable(organizationId, clusterId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRoutingTable(rsp)));
            }));
    }

    /**
     * List organization clusters
     * @param organizationId Organization ID
     */
    public listOrganizationCluster(organizationId: string, _options?: Configuration): Observable<ClusterResponseList> {
        const requestContextPromise = this.requestFactory.listOrganizationCluster(organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOrganizationCluster(rsp)));
            }));
    }

    /**
     * Specify cluster cloud provider info and credentials
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     * @param clusterCloudProviderInfoRequest 
     */
    public specifyClusterCloudProviderInfo(organizationId: string, clusterId: string, clusterCloudProviderInfoRequest?: ClusterCloudProviderInfoRequest, _options?: Configuration): Observable<ClusterCloudProviderInfoResponse> {
        const requestContextPromise = this.requestFactory.specifyClusterCloudProviderInfo(organizationId, clusterId, clusterCloudProviderInfoRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.specifyClusterCloudProviderInfo(rsp)));
            }));
    }

    /**
     * Cluster stop has been requester.
     * Stop cluster
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     */
    public stopCluster(organizationId: string, clusterId: string, _options?: Configuration): Observable<ClusterStatusResponse> {
        const requestContextPromise = this.requestFactory.stopCluster(organizationId, clusterId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.stopCluster(rsp)));
            }));
    }

    /**
     * allows to update cluster version
     * Update a cluster Version
     * @param organizationId Organization ID
     * @param clusterId Cluster ID
     */
    public updateCluster(organizationId: string, clusterId: string, _options?: Configuration): Observable<ClusterStatusResponse> {
        const requestContextPromise = this.requestFactory.updateCluster(organizationId, clusterId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCluster(rsp)));
            }));
    }

}

import { CustomDomainApiRequestFactory, CustomDomainApiResponseProcessor} from "../apis/CustomDomainApi";
export class ObservableCustomDomainApi {
    private requestFactory: CustomDomainApiRequestFactory;
    private responseProcessor: CustomDomainApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomDomainApiRequestFactory,
        responseProcessor?: CustomDomainApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CustomDomainApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CustomDomainApiResponseProcessor();
    }

    /**
     * Add a custom domain to this application in order not to use qovery autogenerated domain
     * Add custom domain to the application.
     * @param applicationId Application ID
     * @param customDomainRequest 
     */
    public createApplicationCustomDomain(applicationId: string, customDomainRequest?: CustomDomainRequest, _options?: Configuration): Observable<CustomDomainResponse> {
        const requestContextPromise = this.requestFactory.createApplicationCustomDomain(applicationId, customDomainRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createApplicationCustomDomain(rsp)));
            }));
    }

    /**
     * To delete an CustomDomain you must have the project user permission
     * Delete a Custom Domain
     * @param applicationId Application ID
     * @param customDomainId Custom Domain ID
     */
    public deleteCustomDomain(applicationId: string, customDomainId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteCustomDomain(applicationId, customDomainId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCustomDomain(rsp)));
            }));
    }

    /**
     * To edit a Custom Domain  you must have the project user permission
     * Edit a Custom Domain
     * @param applicationId Application ID
     * @param customDomainId Custom Domain ID
     * @param customDomainRequest 
     */
    public editCustomDomain(applicationId: string, customDomainId: string, customDomainRequest?: CustomDomainRequest, _options?: Configuration): Observable<CustomDomainResponse> {
        const requestContextPromise = this.requestFactory.editCustomDomain(applicationId, customDomainId, customDomainRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editCustomDomain(rsp)));
            }));
    }

    /**
     * Get Custom Domain status
     * @param applicationId Application ID
     * @param customDomainId Custom Domain ID
     */
    public getCustomDomainStatus(applicationId: string, customDomainId: string, _options?: Configuration): Observable<CustomDomainResponse> {
        const requestContextPromise = this.requestFactory.getCustomDomainStatus(applicationId, customDomainId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCustomDomainStatus(rsp)));
            }));
    }

    /**
     * List application custom domains
     * @param applicationId Application ID
     */
    public listApplicationCustomDomain(applicationId: string, _options?: Configuration): Observable<CustomDomainResponseList> {
        const requestContextPromise = this.requestFactory.listApplicationCustomDomain(applicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listApplicationCustomDomain(rsp)));
            }));
    }

}

import { DatabaseActionsApiRequestFactory, DatabaseActionsApiResponseProcessor} from "../apis/DatabaseActionsApi";
export class ObservableDatabaseActionsApi {
    private requestFactory: DatabaseActionsApiRequestFactory;
    private responseProcessor: DatabaseActionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DatabaseActionsApiRequestFactory,
        responseProcessor?: DatabaseActionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DatabaseActionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DatabaseActionsApiResponseProcessor();
    }

    /**
     * Deploy database 
     * @param databaseId Database ID
     */
    public deployDatabase(databaseId: string, _options?: Configuration): Observable<Status> {
        const requestContextPromise = this.requestFactory.deployDatabase(databaseId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deployDatabase(rsp)));
            }));
    }

    /**
     * Retart database
     * @param databaseId Database ID
     */
    public restartDatabase(databaseId: string, _options?: Configuration): Observable<Status> {
        const requestContextPromise = this.requestFactory.restartDatabase(databaseId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restartDatabase(rsp)));
            }));
    }

    /**
     * Stop database
     * @param databaseId Database ID
     */
    public stopDatabase(databaseId: string, _options?: Configuration): Observable<Status> {
        const requestContextPromise = this.requestFactory.stopDatabase(databaseId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.stopDatabase(rsp)));
            }));
    }

}

import { DatabaseApplicationApiRequestFactory, DatabaseApplicationApiResponseProcessor} from "../apis/DatabaseApplicationApi";
export class ObservableDatabaseApplicationApi {
    private requestFactory: DatabaseApplicationApiRequestFactory;
    private responseProcessor: DatabaseApplicationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DatabaseApplicationApiRequestFactory,
        responseProcessor?: DatabaseApplicationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DatabaseApplicationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DatabaseApplicationApiResponseProcessor();
    }

    /**
     * List applications using the database
     * @param databaseId Database ID
     */
    public listDatabaseApplication(databaseId: string, _options?: Configuration): Observable<ApplicationResponseList> {
        const requestContextPromise = this.requestFactory.listDatabaseApplication(databaseId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listDatabaseApplication(rsp)));
            }));
    }

    /**
     * Remove an application from this database 
     * @param databaseId Database ID
     * @param targetApplicationId Target application ID
     */
    public removeApplicationFromDatabase(databaseId: string, targetApplicationId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.removeApplicationFromDatabase(databaseId, targetApplicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeApplicationFromDatabase(rsp)));
            }));
    }

}

import { DatabaseEventApiRequestFactory, DatabaseEventApiResponseProcessor} from "../apis/DatabaseEventApi";
export class ObservableDatabaseEventApi {
    private requestFactory: DatabaseEventApiRequestFactory;
    private responseProcessor: DatabaseEventApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DatabaseEventApiRequestFactory,
        responseProcessor?: DatabaseEventApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DatabaseEventApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DatabaseEventApiResponseProcessor();
    }

    /**
     * By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter
     * List database  events
     * @param databaseId Database ID
     * @param startId Starting point after which to return results
     */
    public listDatabaseEvent(databaseId: string, startId?: string, _options?: Configuration): Observable<EventPaginatedResponseList> {
        const requestContextPromise = this.requestFactory.listDatabaseEvent(databaseId, startId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listDatabaseEvent(rsp)));
            }));
    }

}

import { DatabaseMainCallsApiRequestFactory, DatabaseMainCallsApiResponseProcessor} from "../apis/DatabaseMainCallsApi";
export class ObservableDatabaseMainCallsApi {
    private requestFactory: DatabaseMainCallsApiRequestFactory;
    private responseProcessor: DatabaseMainCallsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DatabaseMainCallsApiRequestFactory,
        responseProcessor?: DatabaseMainCallsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DatabaseMainCallsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DatabaseMainCallsApiResponseProcessor();
    }

    /**
     * To delete a database you must have the admin permission
     * Delete a database 
     * @param databaseId Database ID
     */
    public deleteDatabase(databaseId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteDatabase(databaseId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDatabase(rsp)));
            }));
    }

    /**
     * To edit a database  you must have the admin permission
     * Edit a database 
     * @param databaseId Database ID
     * @param databaseEditRequest 
     */
    public editDatabase(databaseId: string, databaseEditRequest?: DatabaseEditRequest, _options?: Configuration): Observable<DatabaseResponse> {
        const requestContextPromise = this.requestFactory.editDatabase(databaseId, databaseEditRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editDatabase(rsp)));
            }));
    }

    /**
     * Edit database  master credentials
     * @param databaseId Database ID
     * @param credentialsRequest 
     */
    public editDatabaseCredentials(databaseId: string, credentialsRequest?: CredentialsRequest, _options?: Configuration): Observable<CredentialsResponse> {
        const requestContextPromise = this.requestFactory.editDatabaseCredentials(databaseId, credentialsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editDatabaseCredentials(rsp)));
            }));
    }

    /**
     * Get database by ID
     * @param databaseId Database ID
     */
    public getDatabase(databaseId: string, _options?: Configuration): Observable<DatabaseResponse> {
        const requestContextPromise = this.requestFactory.getDatabase(databaseId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDatabase(rsp)));
            }));
    }

    /**
     * Get master credentials of the database
     * @param databaseId Database ID
     */
    public getDatabaseMasterCredentials(databaseId: string, _options?: Configuration): Observable<CredentialsResponse> {
        const requestContextPromise = this.requestFactory.getDatabaseMasterCredentials(databaseId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDatabaseMasterCredentials(rsp)));
            }));
    }

    /**
     * Get database status
     * @param databaseId Database ID
     */
    public getDatabaseStatus(databaseId: string, _options?: Configuration): Observable<Status> {
        const requestContextPromise = this.requestFactory.getDatabaseStatus(databaseId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDatabaseStatus(rsp)));
            }));
    }

    /**
     * List eligible versions for the database
     * @param databaseId Database ID
     */
    public listDatabaseVersion(databaseId: string, _options?: Configuration): Observable<VersionResponseList> {
        const requestContextPromise = this.requestFactory.listDatabaseVersion(databaseId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listDatabaseVersion(rsp)));
            }));
    }

}

import { DatabaseMetricsApiRequestFactory, DatabaseMetricsApiResponseProcessor} from "../apis/DatabaseMetricsApi";
export class ObservableDatabaseMetricsApi {
    private requestFactory: DatabaseMetricsApiRequestFactory;
    private responseProcessor: DatabaseMetricsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DatabaseMetricsApiRequestFactory,
        responseProcessor?: DatabaseMetricsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DatabaseMetricsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DatabaseMetricsApiResponseProcessor();
    }

    /**
     * Get current metric consumption of the database 
     * @param databaseId Database ID
     */
    public getDatabaseCurrentMetric(databaseId: string, _options?: Configuration): Observable<DatabaseCurrentMetricResponse> {
        const requestContextPromise = this.requestFactory.getDatabaseCurrentMetric(databaseId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDatabaseCurrentMetric(rsp)));
            }));
    }

    /**
     * Get CPU consumption metric over time for the database
     * @param databaseId Database ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public getDatabaseMetricCpu(databaseId: string, lastSeconds: number, _options?: Configuration): Observable<MetricCPUDatapointResponseList> {
        const requestContextPromise = this.requestFactory.getDatabaseMetricCpu(databaseId, lastSeconds, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDatabaseMetricCpu(rsp)));
            }));
    }

    /**
     * The value returned corresponds to the 95th centile
     * Get Health Check latency  metric over time for the database
     * @param databaseId Database ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public getDatabaseMetricHealthCheck(databaseId: string, lastSeconds: number, _options?: Configuration): Observable<MetricGenericResponseList> {
        const requestContextPromise = this.requestFactory.getDatabaseMetricHealthCheck(databaseId, lastSeconds, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDatabaseMetricHealthCheck(rsp)));
            }));
    }

    /**
     * Get Memory consumption metric over time for the database
     * @param databaseId Database ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public getDatabaseMetricMemory(databaseId: string, lastSeconds: number, _options?: Configuration): Observable<MetricMemoryDatapointResponseList> {
        const requestContextPromise = this.requestFactory.getDatabaseMetricMemory(databaseId, lastSeconds, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDatabaseMetricMemory(rsp)));
            }));
    }

    /**
     * Get database restart message and timestamp.
     * List database restarts
     * @param databaseId Database ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public getDatabaseMetricRestart(databaseId: string, lastSeconds: number, _options?: Configuration): Observable<MetricRestartResponse> {
        const requestContextPromise = this.requestFactory.getDatabaseMetricRestart(databaseId, lastSeconds, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDatabaseMetricRestart(rsp)));
            }));
    }

    /**
     * Get Storage consumption metric over time for the database
     * @param databaseId Database ID
     * @param lastSeconds Up to how many seconds in the past to ask analytics results
     */
    public getDatabaseMetricStorage(databaseId: string, lastSeconds: number, _options?: Configuration): Observable<MetricStorageDatapointResponseList> {
        const requestContextPromise = this.requestFactory.getDatabaseMetricStorage(databaseId, lastSeconds, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDatabaseMetricStorage(rsp)));
            }));
    }

}

import { DatabasesApiRequestFactory, DatabasesApiResponseProcessor} from "../apis/DatabasesApi";
export class ObservableDatabasesApi {
    private requestFactory: DatabasesApiRequestFactory;
    private responseProcessor: DatabasesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DatabasesApiRequestFactory,
        responseProcessor?: DatabasesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DatabasesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DatabasesApiResponseProcessor();
    }

    /**
     * Create a database
     * @param environmentId Environment ID
     * @param databaseRequest 
     */
    public createDatabase(environmentId: string, databaseRequest?: DatabaseRequest, _options?: Configuration): Observable<DatabaseResponse> {
        const requestContextPromise = this.requestFactory.createDatabase(environmentId, databaseRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDatabase(rsp)));
            }));
    }

    /**
     * Returns a list of databases with only their id and status.
     * List all environment databases statuses
     * @param environmentId Environment ID
     */
    public getEnvironmentDatabaseStatus(environmentId: string, _options?: Configuration): Observable<ReferenceObjectStatusResponseList> {
        const requestContextPromise = this.requestFactory.getEnvironmentDatabaseStatus(environmentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEnvironmentDatabaseStatus(rsp)));
            }));
    }

    /**
     * List environment databases
     * @param environmentId Environment ID
     */
    public listDatabase(environmentId: string, _options?: Configuration): Observable<DatabaseResponseList> {
        const requestContextPromise = this.requestFactory.listDatabase(environmentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listDatabase(rsp)));
            }));
    }

    /**
     * List eligible database types, versions and modes for the environment
     * @param environmentId Environment ID
     */
    public listEnvironmentDatabaseConfig(environmentId: string, _options?: Configuration): Observable<DatabaseConfigurationResponseList> {
        const requestContextPromise = this.requestFactory.listEnvironmentDatabaseConfig(environmentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listEnvironmentDatabaseConfig(rsp)));
            }));
    }

    /**
     * List current metric consumption for each database
     * @param environmentId Environment ID
     */
    public listEnvironmentDatabaseCurrentMetric(environmentId: string, _options?: Configuration): Observable<EnvironmentDatabasesCurrentMetricResponseList> {
        const requestContextPromise = this.requestFactory.listEnvironmentDatabaseCurrentMetric(environmentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listEnvironmentDatabaseCurrentMetric(rsp)));
            }));
    }

}

import { DependencyApiRequestFactory, DependencyApiResponseProcessor} from "../apis/DependencyApi";
export class ObservableDependencyApi {
    private requestFactory: DependencyApiRequestFactory;
    private responseProcessor: DependencyApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DependencyApiRequestFactory,
        responseProcessor?: DependencyApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DependencyApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DependencyApiResponseProcessor();
    }

    /**
     * Add application dependency to this application to prevent this application starting before the linked dependencies
     * Add application dependency to this application.
     * @param applicationId Application ID
     * @param targetApplicationId Target application ID
     */
    public createApplicationDependency(applicationId: string, targetApplicationId: string, _options?: Configuration): Observable<ApplicationResponse> {
        const requestContextPromise = this.requestFactory.createApplicationDependency(applicationId, targetApplicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createApplicationDependency(rsp)));
            }));
    }

    /**
     * List application dependencies
     * @param applicationId Application ID
     */
    public listApplicationDependency(applicationId: string, _options?: Configuration): Observable<ApplicationResponseList> {
        const requestContextPromise = this.requestFactory.listApplicationDependency(applicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listApplicationDependency(rsp)));
            }));
    }

    /**
     * Remove application dependency to this application.
     * @param applicationId Application ID
     * @param targetApplicationId Target application ID
     */
    public removeApplicationDependency(applicationId: string, targetApplicationId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.removeApplicationDependency(applicationId, targetApplicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeApplicationDependency(rsp)));
            }));
    }

}

import { EnvironmentActionsApiRequestFactory, EnvironmentActionsApiResponseProcessor} from "../apis/EnvironmentActionsApi";
export class ObservableEnvironmentActionsApi {
    private requestFactory: EnvironmentActionsApiRequestFactory;
    private responseProcessor: EnvironmentActionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EnvironmentActionsApiRequestFactory,
        responseProcessor?: EnvironmentActionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EnvironmentActionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EnvironmentActionsApiResponseProcessor();
    }

    /**
     * Cancel the current deployment of your environment.
     * Cancel environment deployment
     * @param environmentId Environment ID
     */
    public cancelEnvironmentDeployment(environmentId: string, _options?: Configuration): Observable<Status> {
        const requestContextPromise = this.requestFactory.cancelEnvironmentDeployment(environmentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelEnvironmentDeployment(rsp)));
            }));
    }

    /**
     * You must provide a name. This will create a new environment, with the same configuration, and same applications and databases. Database data is not cloned.
     * Clone environment
     * @param environmentId Environment ID
     * @param cloneRequest 
     */
    public cloneEnvironment(environmentId: string, cloneRequest?: CloneRequest, _options?: Configuration): Observable<EnvironmentResponse> {
        const requestContextPromise = this.requestFactory.cloneEnvironment(environmentId, cloneRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloneEnvironment(rsp)));
            }));
    }

    /**
     * This will deploy all the services of this environment to their latest version.
     * Deploy environment
     * @param environmentId Environment ID
     */
    public deployEnvironment(environmentId: string, _options?: Configuration): Observable<Status> {
        const requestContextPromise = this.requestFactory.deployEnvironment(environmentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deployEnvironment(rsp)));
            }));
    }

    /**
     * Restart environment
     * @param environmentId Environment ID
     * @param environmentRestartRequest 
     */
    public restartEnvironment(environmentId: string, environmentRestartRequest?: EnvironmentRestartRequest, _options?: Configuration): Observable<Status> {
        const requestContextPromise = this.requestFactory.restartEnvironment(environmentId, environmentRestartRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restartEnvironment(rsp)));
            }));
    }

    /**
     * Stop environment
     * @param environmentId Environment ID
     */
    public stopEnvironment(environmentId: string, _options?: Configuration): Observable<Status> {
        const requestContextPromise = this.requestFactory.stopEnvironment(environmentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.stopEnvironment(rsp)));
            }));
    }

}

import { EnvironmentDeploymentHistoryApiRequestFactory, EnvironmentDeploymentHistoryApiResponseProcessor} from "../apis/EnvironmentDeploymentHistoryApi";
export class ObservableEnvironmentDeploymentHistoryApi {
    private requestFactory: EnvironmentDeploymentHistoryApiRequestFactory;
    private responseProcessor: EnvironmentDeploymentHistoryApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EnvironmentDeploymentHistoryApiRequestFactory,
        responseProcessor?: EnvironmentDeploymentHistoryApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EnvironmentDeploymentHistoryApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EnvironmentDeploymentHistoryApiResponseProcessor();
    }

    /**
     * List previous and current environment deployments with the status deployment and the related services. By default it returns the 20 last results. The response is paginated. In order to request the next page, you can use the startId query parameter
     * List environment deployments
     * @param environmentId Environment ID
     * @param startId Starting point after which to return results
     */
    public listEnvironmentDeploymentHistory(environmentId: string, startId?: string, _options?: Configuration): Observable<DeploymentHistoryEnvironmentPaginatedResponseList> {
        const requestContextPromise = this.requestFactory.listEnvironmentDeploymentHistory(environmentId, startId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listEnvironmentDeploymentHistory(rsp)));
            }));
    }

}

import { EnvironmentDeploymentRuleApiRequestFactory, EnvironmentDeploymentRuleApiResponseProcessor} from "../apis/EnvironmentDeploymentRuleApi";
export class ObservableEnvironmentDeploymentRuleApi {
    private requestFactory: EnvironmentDeploymentRuleApiRequestFactory;
    private responseProcessor: EnvironmentDeploymentRuleApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EnvironmentDeploymentRuleApiRequestFactory,
        responseProcessor?: EnvironmentDeploymentRuleApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EnvironmentDeploymentRuleApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EnvironmentDeploymentRuleApiResponseProcessor();
    }

    /**
     * Edit an environment deployment rule
     * @param environmentId Environment ID
     * @param deploymentRuleId Deployment Rule ID
     * @param environmentDeploymentRuleEditRequest 
     */
    public editEnvironmentDeploymentRule(environmentId: string, deploymentRuleId: string, environmentDeploymentRuleEditRequest?: EnvironmentDeploymentRuleEditRequest, _options?: Configuration): Observable<EnvironmentDeploymentRuleResponse> {
        const requestContextPromise = this.requestFactory.editEnvironmentDeploymentRule(environmentId, deploymentRuleId, environmentDeploymentRuleEditRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editEnvironmentDeploymentRule(rsp)));
            }));
    }

    /**
     * Get environment deployment rule
     * @param environmentId Environment ID
     */
    public getEnvironmentDeploymentRule(environmentId: string, _options?: Configuration): Observable<EnvironmentDeploymentRuleResponse> {
        const requestContextPromise = this.requestFactory.getEnvironmentDeploymentRule(environmentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEnvironmentDeploymentRule(rsp)));
            }));
    }

}

import { EnvironmentLogsApiRequestFactory, EnvironmentLogsApiResponseProcessor} from "../apis/EnvironmentLogsApi";
export class ObservableEnvironmentLogsApi {
    private requestFactory: EnvironmentLogsApiRequestFactory;
    private responseProcessor: EnvironmentLogsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EnvironmentLogsApiRequestFactory,
        responseProcessor?: EnvironmentLogsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EnvironmentLogsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EnvironmentLogsApiResponseProcessor();
    }

    /**
     * This returns the last 1000 environment deployment logs.
     * List environment deployment logs
     * @param environmentId Environment ID
     */
    public listEnvironmentLog(environmentId: string, _options?: Configuration): Observable<EnvironmentLogResponseList> {
        const requestContextPromise = this.requestFactory.listEnvironmentLog(environmentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listEnvironmentLog(rsp)));
            }));
    }

}

import { EnvironmentMainCallsApiRequestFactory, EnvironmentMainCallsApiResponseProcessor} from "../apis/EnvironmentMainCallsApi";
export class ObservableEnvironmentMainCallsApi {
    private requestFactory: EnvironmentMainCallsApiRequestFactory;
    private responseProcessor: EnvironmentMainCallsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EnvironmentMainCallsApiRequestFactory,
        responseProcessor?: EnvironmentMainCallsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EnvironmentMainCallsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EnvironmentMainCallsApiResponseProcessor();
    }

    /**
     * To delete an environment you must have the admin permission
     * Delete an environment
     * @param environmentId Environment ID
     */
    public deleteEnvironment(environmentId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteEnvironment(environmentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEnvironment(rsp)));
            }));
    }

    /**
     * To edit an environment you must have the admin permission
     * Edit an environment
     * @param environmentId Environment ID
     * @param environmentEditRequest 
     */
    public editEnvironment(environmentId: string, environmentEditRequest?: EnvironmentEditRequest, _options?: Configuration): Observable<EnvironmentResponse> {
        const requestContextPromise = this.requestFactory.editEnvironment(environmentId, environmentEditRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editEnvironment(rsp)));
            }));
    }

    /**
     * Get environment by ID
     * @param environmentId Environment ID
     */
    public getEnvironment(environmentId: string, _options?: Configuration): Observable<EnvironmentResponse> {
        const requestContextPromise = this.requestFactory.getEnvironment(environmentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEnvironment(rsp)));
            }));
    }

    /**
     * Get environment status
     * @param environmentId Environment ID
     */
    public getEnvironmentStatus(environmentId: string, _options?: Configuration): Observable<Status> {
        const requestContextPromise = this.requestFactory.getEnvironmentStatus(environmentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEnvironmentStatus(rsp)));
            }));
    }

    /**
     * This will return all the custom domains and Qovery autogenerated domain for all the applications within this environment
     * List all URLs of the environment
     * @param environmentId Environment ID
     */
    public listEnvironmentLinks(environmentId: string, _options?: Configuration): Observable<LinkResponseList> {
        const requestContextPromise = this.requestFactory.listEnvironmentLinks(environmentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listEnvironmentLinks(rsp)));
            }));
    }

}

import { EnvironmentSecretApiRequestFactory, EnvironmentSecretApiResponseProcessor} from "../apis/EnvironmentSecretApi";
export class ObservableEnvironmentSecretApi {
    private requestFactory: EnvironmentSecretApiRequestFactory;
    private responseProcessor: EnvironmentSecretApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EnvironmentSecretApiRequestFactory,
        responseProcessor?: EnvironmentSecretApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EnvironmentSecretApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EnvironmentSecretApiResponseProcessor();
    }

    /**
     * - Add a secret to the environment.   - If the secret key already exists, then it will be replaced by the new one.   - If the secret value points toward an existing secret key, it will be considered as an alias. 
     * Add a secret to the environment
     * @param environmentId Environment ID
     * @param secretRequest 
     */
    public createEnvironmentSecret(environmentId: string, secretRequest?: SecretRequest, _options?: Configuration): Observable<SecretResponse> {
        const requestContextPromise = this.requestFactory.createEnvironmentSecret(environmentId, secretRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEnvironmentSecret(rsp)));
            }));
    }

    /**
     * - Allows you to add an alias at environment level on an existing secret having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new secret at environment level with the same value as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the aliased_secret will be exposed in the \"aliased_secret\" field of the newly created secret - Only 1 alias level is allowed. You can't create an alias on an alias 
     * Create a secret alias at the environment level
     * @param environmentId Environment ID
     * @param secretId Secret ID
     * @param key 
     */
    public createEnvironmentSecretAlias(environmentId: string, secretId: string, key?: Key, _options?: Configuration): Observable<SecretResponse> {
        const requestContextPromise = this.requestFactory.createEnvironmentSecretAlias(environmentId, secretId, key, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEnvironmentSecretAlias(rsp)));
            }));
    }

    /**
     * - Allows you to override at environment level a secret that has a higher scope. - You only have to specify a value in the request body - The system will create a new secret at environment level with the same key as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the overridden_secret will be exposed in the \"overridden_secret\" field of the newly created secret 
     * Create a secret override at the environment level
     * @param environmentId Environment ID
     * @param secretId Secret ID
     * @param value 
     */
    public createEnvironmentSecretOverride(environmentId: string, secretId: string, value?: Value, _options?: Configuration): Observable<SecretResponse> {
        const requestContextPromise = this.requestFactory.createEnvironmentSecretOverride(environmentId, secretId, value, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEnvironmentSecretOverride(rsp)));
            }));
    }

    /**
     * - To delete a secret you must have the project user permission - You can't delete a BUILT_IN secret - If you delete a secret having override or alias, the associated override/alias will be deleted as well  operationId: deleteEnvironmentSecret 
     * Delete a secret from the environment
     * @param environmentId Environment ID
     * @param secretId Secret ID
     */
    public deleteEnvironmentSecret(environmentId: string, secretId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteEnvironmentSecret(environmentId, secretId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEnvironmentSecret(rsp)));
            }));
    }

    /**
     * - You can't edit a BUILT_IN secret - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the secret it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 
     * Edit a secret belonging to the environment
     * @param environmentId Environment ID
     * @param secretId Secret ID
     * @param secretEditRequest 
     */
    public editEnvironmentSecret(environmentId: string, secretId: string, secretEditRequest: SecretEditRequest, _options?: Configuration): Observable<SecretResponse> {
        const requestContextPromise = this.requestFactory.editEnvironmentSecret(environmentId, secretId, secretEditRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editEnvironmentSecret(rsp)));
            }));
    }

    /**
     * List environment secrets
     * @param environmentId Environment ID
     */
    public listEnvironmentSecrets(environmentId: string, _options?: Configuration): Observable<SecretResponseList> {
        const requestContextPromise = this.requestFactory.listEnvironmentSecrets(environmentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listEnvironmentSecrets(rsp)));
            }));
    }

}

import { EnvironmentVariableApiRequestFactory, EnvironmentVariableApiResponseProcessor} from "../apis/EnvironmentVariableApi";
export class ObservableEnvironmentVariableApi {
    private requestFactory: EnvironmentVariableApiRequestFactory;
    private responseProcessor: EnvironmentVariableApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EnvironmentVariableApiRequestFactory,
        responseProcessor?: EnvironmentVariableApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EnvironmentVariableApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EnvironmentVariableApiResponseProcessor();
    }

    /**
     * - Add an environment variable to the environment.   - If the environment variable key already exists, then it will be replaced by the new one.   - If the environment variable value points toward an existing environment variable key, it will be considered as an alias. 
     * Add an environment variable to the environment
     * @param environmentId Environment ID
     * @param environmentVariableRequest 
     */
    public createEnvironmentEnvironmentVariable(environmentId: string, environmentVariableRequest?: EnvironmentVariableRequest, _options?: Configuration): Observable<EnvironmentVariableResponse> {
        const requestContextPromise = this.requestFactory.createEnvironmentEnvironmentVariable(environmentId, environmentVariableRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEnvironmentEnvironmentVariable(rsp)));
            }));
    }

    /**
     * - Allows you to add an alias at environment level on an existing environment variable having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new environment variable at environment level with the same value as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the aliased_variable will be exposed in the \"aliased_variable\" field of the newly created variable - Only 1 alias level is allowed. You can't create an alias on an alias 
     * Create an environment variable alias at the environment level
     * @param environmentId Environment ID
     * @param environmentVariableId Environment Variable ID
     * @param key 
     */
    public createEnvironmentEnvironmentVariableAlias(environmentId: string, environmentVariableId: string, key?: Key, _options?: Configuration): Observable<EnvironmentVariableResponse> {
        const requestContextPromise = this.requestFactory.createEnvironmentEnvironmentVariableAlias(environmentId, environmentVariableId, key, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEnvironmentEnvironmentVariableAlias(rsp)));
            }));
    }

    /**
     * - Allows you to override at environment level an environment variable that has a higher scope. - You only have to specify a value in the request body - The system will create a new environment variable at environment level with the same key as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the overridden_variable will be exposed in the \"overridden_variable\" field of the newly created variable 
     * Create an environment variable override at the environment level
     * @param environmentId Environment ID
     * @param environmentVariableId Environment Variable ID
     * @param value 
     */
    public createEnvironmentEnvironmentVariableOverride(environmentId: string, environmentVariableId: string, value?: Value, _options?: Configuration): Observable<EnvironmentVariableResponse> {
        const requestContextPromise = this.requestFactory.createEnvironmentEnvironmentVariableOverride(environmentId, environmentVariableId, value, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEnvironmentEnvironmentVariableOverride(rsp)));
            }));
    }

    /**
     * - To delete an environment variable you must have the project user permission - You can't delete a BUILT_IN variable - If you delete a variable having override or alias, the associated override/alias will be deleted as well 
     * Delete an environment variable from an environment
     * @param environmentId Environment ID
     * @param environmentVariableId Environment Variable ID
     */
    public deleteEnvironmentEnvironmentVariable(environmentId: string, environmentVariableId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteEnvironmentEnvironmentVariable(environmentId, environmentVariableId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEnvironmentEnvironmentVariable(rsp)));
            }));
    }

    /**
     * - You can't edit a BUILT_IN variable - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the variable it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 
     * Edit an environment variable belonging to the environment
     * @param environmentId Environment ID
     * @param environmentVariableId Environment Variable ID
     * @param environmentVariableEditRequest 
     */
    public editEnvironmentEnvironmentVariable(environmentId: string, environmentVariableId: string, environmentVariableEditRequest: EnvironmentVariableEditRequest, _options?: Configuration): Observable<EnvironmentVariableResponse> {
        const requestContextPromise = this.requestFactory.editEnvironmentEnvironmentVariable(environmentId, environmentVariableId, environmentVariableEditRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editEnvironmentEnvironmentVariable(rsp)));
            }));
    }

    /**
     * List environment variables
     * @param environmentId Environment ID
     */
    public listEnvironmentEnvironmentVariable(environmentId: string, _options?: Configuration): Observable<EnvironmentVariableResponseList> {
        const requestContextPromise = this.requestFactory.listEnvironmentEnvironmentVariable(environmentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listEnvironmentEnvironmentVariable(rsp)));
            }));
    }

}

import { EnvironmentsApiRequestFactory, EnvironmentsApiResponseProcessor} from "../apis/EnvironmentsApi";
export class ObservableEnvironmentsApi {
    private requestFactory: EnvironmentsApiRequestFactory;
    private responseProcessor: EnvironmentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EnvironmentsApiRequestFactory,
        responseProcessor?: EnvironmentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EnvironmentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EnvironmentsApiResponseProcessor();
    }

    /**
     * Create an environment
     * @param projectId Project ID
     * @param environmentRequest 
     */
    public createEnvironment(projectId: string, environmentRequest?: EnvironmentRequest, _options?: Configuration): Observable<EnvironmentResponse> {
        const requestContextPromise = this.requestFactory.createEnvironment(projectId, environmentRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEnvironment(rsp)));
            }));
    }

    /**
     * Returns a list of environment ids, and for each its total numberof services
     * List total number of services for each environment of the project
     * @param projectId Project ID
     */
    public getProjectEnvironmentServiceNumber(projectId: string, _options?: Configuration): Observable<EnvironmentStatsResponseList> {
        const requestContextPromise = this.requestFactory.getProjectEnvironmentServiceNumber(projectId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProjectEnvironmentServiceNumber(rsp)));
            }));
    }

    /**
     * Returns a list of environments with only their id and status.
     * List environments statuses
     * @param projectId Project ID
     */
    public getProjectEnvironmentStatus(projectId: string, _options?: Configuration): Observable<Status> {
        const requestContextPromise = this.requestFactory.getProjectEnvironmentStatus(projectId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProjectEnvironmentStatus(rsp)));
            }));
    }

    /**
     * List environments
     * @param projectId Project ID
     */
    public listEnvironment(projectId: string, _options?: Configuration): Observable<EnvironmentResponseList> {
        const requestContextPromise = this.requestFactory.listEnvironment(projectId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listEnvironment(rsp)));
            }));
    }

}

import { GitRepositoriesApiRequestFactory, GitRepositoriesApiResponseProcessor} from "../apis/GitRepositoriesApi";
export class ObservableGitRepositoriesApi {
    private requestFactory: GitRepositoriesApiRequestFactory;
    private responseProcessor: GitRepositoriesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GitRepositoriesApiRequestFactory,
        responseProcessor?: GitRepositoriesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GitRepositoriesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GitRepositoriesApiResponseProcessor();
    }

    /**
     * Get bitbucket repositories of the connected user
     */
    public getBitbucketRepositories(_options?: Configuration): Observable<GitRepositoryResponseList> {
        const requestContextPromise = this.requestFactory.getBitbucketRepositories(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBitbucketRepositories(rsp)));
            }));
    }

    /**
     * Get bitbucket branches of the specified repository
     * @param name The name of the repository where to retrieve the branches
     */
    public getBitbucketRepositoryBranches(name?: string, _options?: Configuration): Observable<GitRepositoryBranchResponseList> {
        const requestContextPromise = this.requestFactory.getBitbucketRepositoryBranches(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBitbucketRepositoryBranches(rsp)));
            }));
    }

    /**
     * Get git provider accounts
     */
    public getGitProviderAccount(_options?: Configuration): Observable<GitAuthProviderResponseList> {
        const requestContextPromise = this.requestFactory.getGitProviderAccount(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGitProviderAccount(rsp)));
            }));
    }

    /**
     * Get github repositories of the connected user
     */
    public getGithubRepositories(_options?: Configuration): Observable<GitRepositoryResponseList> {
        const requestContextPromise = this.requestFactory.getGithubRepositories(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGithubRepositories(rsp)));
            }));
    }

    /**
     * Get github branches of the specified repository
     * @param name The name of the repository where to retrieve the branches
     */
    public getGithubRepositoryBranches(name?: string, _options?: Configuration): Observable<GitRepositoryBranchResponseList> {
        const requestContextPromise = this.requestFactory.getGithubRepositoryBranches(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGithubRepositoryBranches(rsp)));
            }));
    }

    /**
     * Get gitlab repositories of the connected user
     */
    public getGitlabRepositories(_options?: Configuration): Observable<GitRepositoryResponseList> {
        const requestContextPromise = this.requestFactory.getGitlabRepositories(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGitlabRepositories(rsp)));
            }));
    }

    /**
     * Get gitlab branches of the specified repository
     * @param name The name of the repository to retrieve the branches
     */
    public getGitlabRepositoryBranches(name?: string, _options?: Configuration): Observable<GitRepositoryBranchResponseList> {
        const requestContextPromise = this.requestFactory.getGitlabRepositoryBranches(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGitlabRepositoryBranches(rsp)));
            }));
    }

}

import { LogicalDatabaseApiRequestFactory, LogicalDatabaseApiResponseProcessor} from "../apis/LogicalDatabaseApi";
export class ObservableLogicalDatabaseApi {
    private requestFactory: LogicalDatabaseApiRequestFactory;
    private responseProcessor: LogicalDatabaseApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LogicalDatabaseApiRequestFactory,
        responseProcessor?: LogicalDatabaseApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LogicalDatabaseApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LogicalDatabaseApiResponseProcessor();
    }

    /**
     * If you don't specify credentials, Qovery will autogenerate them.
     * Create a logical database on the database
     * @param databaseId Database ID
     * @param logicalDatabaseRequest 
     */
    public createLogicalDatabaseOnDatabase(databaseId: string, logicalDatabaseRequest?: LogicalDatabaseRequest, _options?: Configuration): Observable<LogicalDatabaseResponse> {
        const requestContextPromise = this.requestFactory.createLogicalDatabaseOnDatabase(databaseId, logicalDatabaseRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createLogicalDatabaseOnDatabase(rsp)));
            }));
    }

    /**
     * To delete a logical database you must have the project user permission
     * Delete a Logical database
     * @param logicalDatabaseId Logical Database ID
     */
    public deleteLogicalDatabase(logicalDatabaseId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteLogicalDatabase(logicalDatabaseId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteLogicalDatabase(rsp)));
            }));
    }

    /**
     * Edit a logical database
     * @param logicalDatabaseId Logical Database ID
     * @param logicalDatabaseRequest 
     */
    public editLogicalDatabase(logicalDatabaseId: string, logicalDatabaseRequest?: LogicalDatabaseRequest, _options?: Configuration): Observable<LogicalDatabaseResponse> {
        const requestContextPromise = this.requestFactory.editLogicalDatabase(logicalDatabaseId, logicalDatabaseRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editLogicalDatabase(rsp)));
            }));
    }

    /**
     * Edit logical database credentials
     * @param logicalDatabaseId Logical Database ID
     * @param credentialsRequest 
     */
    public editLogicalDatabaseCredentials(logicalDatabaseId: string, credentialsRequest?: CredentialsRequest, _options?: Configuration): Observable<CredentialsResponse> {
        const requestContextPromise = this.requestFactory.editLogicalDatabaseCredentials(logicalDatabaseId, credentialsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editLogicalDatabaseCredentials(rsp)));
            }));
    }

    /**
     * A logical database exists inside a database. The database is a service that exists within an environment, that you can deploy, and that has allocated resources. A database can have several logical databases
     * Get logical database by ID
     * @param logicalDatabaseId Logical Database ID
     */
    public getLogicalDatabase(logicalDatabaseId: string, _options?: Configuration): Observable<LogicalDatabaseResponse> {
        const requestContextPromise = this.requestFactory.getLogicalDatabase(logicalDatabaseId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLogicalDatabase(rsp)));
            }));
    }

    /**
     * Get  credentials of the logical database
     * @param logicalDatabaseId Logical Database ID
     */
    public getLogicalDatabaseCredentials(logicalDatabaseId: string, _options?: Configuration): Observable<CredentialsResponse> {
        const requestContextPromise = this.requestFactory.getLogicalDatabaseCredentials(logicalDatabaseId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLogicalDatabaseCredentials(rsp)));
            }));
    }

    /**
     * List linked applications
     * @param logicalDatabaseId Logical Database ID
     */
    public listLogicalDatabaseApplication(logicalDatabaseId: string, _options?: Configuration): Observable<ApplicationResponseList> {
        const requestContextPromise = this.requestFactory.listLogicalDatabaseApplication(logicalDatabaseId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLogicalDatabaseApplication(rsp)));
            }));
    }

    /**
     * A logical database exists inside a database. The database is a service that exists within an environment, that you can deploy, and that has allocated resources. A database can have several logical databases
     * List logical databases of a database
     * @param databaseId Database ID
     */
    public listLogicalDatabaseDatabase(databaseId: string, _options?: Configuration): Observable<LogicalDatabaseResponseList> {
        const requestContextPromise = this.requestFactory.listLogicalDatabaseDatabase(databaseId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLogicalDatabaseDatabase(rsp)));
            }));
    }

}

import { MembersApiRequestFactory, MembersApiResponseProcessor} from "../apis/MembersApi";
export class ObservableMembersApi {
    private requestFactory: MembersApiRequestFactory;
    private responseProcessor: MembersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MembersApiRequestFactory,
        responseProcessor?: MembersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MembersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MembersApiResponseProcessor();
    }

    /**
     * Remove an invited member
     * @param organizationId Organization ID
     */
    public deleteInviteMember(organizationId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteInviteMember(organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteInviteMember(rsp)));
            }));
    }

    /**
     * Remove a member
     * @param organizationId Organization ID
     * @param userId User ID
     */
    public deleteMember(organizationId: string, userId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteMember(organizationId, userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteMember(rsp)));
            }));
    }

    /**
     * Get invited members
     * @param organizationId Organization ID
     */
    public getOrganizationInvitedMembers(organizationId: string, _options?: Configuration): Observable<InviteMemberResponseList> {
        const requestContextPromise = this.requestFactory.getOrganizationInvitedMembers(organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganizationInvitedMembers(rsp)));
            }));
    }

    /**
     * Get organization members
     * @param organizationId Organization ID
     */
    public getOrganizationMembers(organizationId: string, _options?: Configuration): Observable<MemberResponseList> {
        const requestContextPromise = this.requestFactory.getOrganizationMembers(organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganizationMembers(rsp)));
            }));
    }

    /**
     * Accept Invite in the organization
     * @param organizationId Organization ID
     * @param inviteId Invite ID
     */
    public postAcceptInviteMember(organizationId: string, inviteId: string, _options?: Configuration): Observable<InviteMemberResponse> {
        const requestContextPromise = this.requestFactory.postAcceptInviteMember(organizationId, inviteId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postAcceptInviteMember(rsp)));
            }));
    }

    /**
     * Invite someone in the organization
     * @param organizationId Organization ID
     * @param inviteMemberRequest 
     */
    public postInviteMember(organizationId: string, inviteMemberRequest?: InviteMemberRequest, _options?: Configuration): Observable<InviteMemberResponse> {
        const requestContextPromise = this.requestFactory.postInviteMember(organizationId, inviteMemberRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postInviteMember(rsp)));
            }));
    }

    /**
     * Transfer organization ownership to another user
     * @param organizationId Organization ID
     * @param transferOwnershipRequest 
     */
    public postOrganizationTransferOwnership(organizationId: string, transferOwnershipRequest?: TransferOwnershipRequest, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.postOrganizationTransferOwnership(organizationId, transferOwnershipRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postOrganizationTransferOwnership(rsp)));
            }));
    }

}

import { OrganizationMainCallsApiRequestFactory, OrganizationMainCallsApiResponseProcessor} from "../apis/OrganizationMainCallsApi";
export class ObservableOrganizationMainCallsApi {
    private requestFactory: OrganizationMainCallsApiRequestFactory;
    private responseProcessor: OrganizationMainCallsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrganizationMainCallsApiRequestFactory,
        responseProcessor?: OrganizationMainCallsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrganizationMainCallsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrganizationMainCallsApiResponseProcessor();
    }

    /**
     * Create an organization
     * @param organizationRequest 
     */
    public createOrganization(organizationRequest?: OrganizationRequest, _options?: Configuration): Observable<OrganizationResponse> {
        const requestContextPromise = this.requestFactory.createOrganization(organizationRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrganization(rsp)));
            }));
    }

    /**
     * To delete an organization you must have the admin permission
     * Delete an organization
     * @param organizationId Organization ID
     */
    public deleteOrganization(organizationId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteOrganization(organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOrganization(rsp)));
            }));
    }

    /**
     * To edit an organization you must have the admin permission
     * Edit an organization
     * @param organizationId Organization ID
     * @param organizationEditRequest 
     */
    public editOrganization(organizationId: string, organizationEditRequest?: OrganizationEditRequest, _options?: Configuration): Observable<OrganizationResponse> {
        const requestContextPromise = this.requestFactory.editOrganization(organizationId, organizationEditRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editOrganization(rsp)));
            }));
    }

    /**
     * Get organization by ID
     * @param organizationId Organization ID
     */
    public getOrganization(organizationId: string, _options?: Configuration): Observable<OrganizationResponse> {
        const requestContextPromise = this.requestFactory.getOrganization(organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganization(rsp)));
            }));
    }

    /**
     * List user organizations
     */
    public listOrganization(_options?: Configuration): Observable<OrganizationResponseList> {
        const requestContextPromise = this.requestFactory.listOrganization(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOrganization(rsp)));
            }));
    }

}

import { ProjectDeploymentRuleApiRequestFactory, ProjectDeploymentRuleApiResponseProcessor} from "../apis/ProjectDeploymentRuleApi";
export class ObservableProjectDeploymentRuleApi {
    private requestFactory: ProjectDeploymentRuleApiRequestFactory;
    private responseProcessor: ProjectDeploymentRuleApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProjectDeploymentRuleApiRequestFactory,
        responseProcessor?: ProjectDeploymentRuleApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProjectDeploymentRuleApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProjectDeploymentRuleApiResponseProcessor();
    }

    /**
     * Create a deployment rule
     * Create a deployment rule
     * @param projectId Project ID
     * @param projectDeploymentRuleRequest 
     */
    public createDeploymentRule(projectId: string, projectDeploymentRuleRequest?: ProjectDeploymentRuleRequest, _options?: Configuration): Observable<ProjectDeploymentRuleResponse> {
        const requestContextPromise = this.requestFactory.createDeploymentRule(projectId, projectDeploymentRuleRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDeploymentRule(rsp)));
            }));
    }

    /**
     * Delete a project deployment rule
     * Delete a project deployment rule
     * @param projectId Project ID
     * @param deploymentRuleId Deployment Rule ID
     */
    public deleteProjectDeploymentRule(projectId: string, deploymentRuleId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteProjectDeploymentRule(projectId, deploymentRuleId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProjectDeploymentRule(rsp)));
            }));
    }

    /**
     * Edit a project deployment rule
     * Edit a project deployment rule
     * @param projectId Project ID
     * @param deploymentRuleId Deployment Rule ID
     * @param projectDeploymentRuleRequest 
     */
    public editProjectDeployemtnRule(projectId: string, deploymentRuleId: string, projectDeploymentRuleRequest?: ProjectDeploymentRuleRequest, _options?: Configuration): Observable<ProjectDeploymentRuleResponse> {
        const requestContextPromise = this.requestFactory.editProjectDeployemtnRule(projectId, deploymentRuleId, projectDeploymentRuleRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editProjectDeployemtnRule(rsp)));
            }));
    }

    /**
     * Get a project deployment rule
     * Get a project deployment rule
     * @param projectId Project ID
     * @param deploymentRuleId Deployment Rule ID
     */
    public getProjectDeploymentRule(projectId: string, deploymentRuleId: string, _options?: Configuration): Observable<ProjectDeploymentRuleResponse> {
        const requestContextPromise = this.requestFactory.getProjectDeploymentRule(projectId, deploymentRuleId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProjectDeploymentRule(rsp)));
            }));
    }

    /**
     * List project deployment rules
     * List project deployment rules
     * @param projectId Project ID
     */
    public listProjectDeploymentRules(projectId: string, _options?: Configuration): Observable<ProjectDeploymentRuleResponseList> {
        const requestContextPromise = this.requestFactory.listProjectDeploymentRules(projectId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProjectDeploymentRules(rsp)));
            }));
    }

    /**
     * Update deployment rules priority order
     * Update deployment rules priority order
     * @param projectId Project ID
     * @param inlineObject 
     */
    public updateDeploymentRulesPriorityOrder(projectId: string, inlineObject?: InlineObject, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.updateDeploymentRulesPriorityOrder(projectId, inlineObject, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDeploymentRulesPriorityOrder(rsp)));
            }));
    }

}

import { ProjectEnvironmentVariableApiRequestFactory, ProjectEnvironmentVariableApiResponseProcessor} from "../apis/ProjectEnvironmentVariableApi";
export class ObservableProjectEnvironmentVariableApi {
    private requestFactory: ProjectEnvironmentVariableApiRequestFactory;
    private responseProcessor: ProjectEnvironmentVariableApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProjectEnvironmentVariableApiRequestFactory,
        responseProcessor?: ProjectEnvironmentVariableApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProjectEnvironmentVariableApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProjectEnvironmentVariableApiResponseProcessor();
    }

    /**
     * - Add an environment variable to the project.   - If the environment variable key already exists, then it will be replaced by the new one.   - If the environment variable value points toward an existing environment variable key, it will be considered as an alias. 
     * Add an environment variable to the project
     * @param projectId Project ID
     * @param environmentVariableRequest 
     */
    public createProjectEnvironmentVariable(projectId: string, environmentVariableRequest?: EnvironmentVariableRequest, _options?: Configuration): Observable<EnvironmentVariableResponse> {
        const requestContextPromise = this.requestFactory.createProjectEnvironmentVariable(projectId, environmentVariableRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProjectEnvironmentVariable(rsp)));
            }));
    }

    /**
     * - Allows you to add an alias at project level on an existing environment variable having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new environment variable at project level with the same value as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the aliased_variable will be exposed in the \"aliased_variable\" field of the newly created variable - Only 1 alias level is allowed. You can't create an alias on an alias 
     * Create an environment variable alias at the project level
     * @param projectId Project ID
     * @param environmentVariableId Environment Variable ID
     * @param key 
     */
    public createProjectEnvironmentVariableAlias(projectId: string, environmentVariableId: string, key?: Key, _options?: Configuration): Observable<EnvironmentVariableResponse> {
        const requestContextPromise = this.requestFactory.createProjectEnvironmentVariableAlias(projectId, environmentVariableId, key, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProjectEnvironmentVariableAlias(rsp)));
            }));
    }

    /**
     * - Allows you to override at project level an environment variable that has a higher scope. - You only have to specify a value in the request body - The system will create a new environment variable at project level with the same key as the one corresponding to the variable id in the path - The response body will contain the newly created variable - Information regarding the overridden_variable will be exposed in the \"overridden_variable\" field of the newly created variable 
     * Create an environment variable override at the project level
     * @param projectId Project ID
     * @param environmentVariableId Environment Variable ID
     * @param value 
     */
    public createProjectEnvironmentVariableOverride(projectId: string, environmentVariableId: string, value?: Value, _options?: Configuration): Observable<EnvironmentVariableResponse> {
        const requestContextPromise = this.requestFactory.createProjectEnvironmentVariableOverride(projectId, environmentVariableId, value, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProjectEnvironmentVariableOverride(rsp)));
            }));
    }

    /**
     * - To delete an environment variable you must have the project user permission - You can't delete a BUILT_IN variable - If you delete a variable having override or alias, the associated override/alias will be deleted as well 
     * Delete an environment variable from a project
     * @param projectId Project ID
     * @param environmentVariableId Environment Variable ID
     */
    public deleteProjectEnvironmentVariable(projectId: string, environmentVariableId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteProjectEnvironmentVariable(projectId, environmentVariableId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProjectEnvironmentVariable(rsp)));
            }));
    }

    /**
     * - You can't edit a BUILT_IN variable - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the variable it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 
     * Edit an environment variable belonging to the project
     * @param projectId Project ID
     * @param environmentVariableId Environment Variable ID
     * @param environmentVariableEditRequest 
     */
    public editProjectEnvironmentVariable(projectId: string, environmentVariableId: string, environmentVariableEditRequest: EnvironmentVariableEditRequest, _options?: Configuration): Observable<EnvironmentVariableResponse> {
        const requestContextPromise = this.requestFactory.editProjectEnvironmentVariable(projectId, environmentVariableId, environmentVariableEditRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editProjectEnvironmentVariable(rsp)));
            }));
    }

    /**
     * List project environment variables
     * @param projectId Project ID
     */
    public listProjectEnvironmentVariable(projectId: string, _options?: Configuration): Observable<EnvironmentVariableResponseList> {
        const requestContextPromise = this.requestFactory.listProjectEnvironmentVariable(projectId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProjectEnvironmentVariable(rsp)));
            }));
    }

}

import { ProjectMainCallsApiRequestFactory, ProjectMainCallsApiResponseProcessor} from "../apis/ProjectMainCallsApi";
export class ObservableProjectMainCallsApi {
    private requestFactory: ProjectMainCallsApiRequestFactory;
    private responseProcessor: ProjectMainCallsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProjectMainCallsApiRequestFactory,
        responseProcessor?: ProjectMainCallsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProjectMainCallsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProjectMainCallsApiResponseProcessor();
    }

    /**
     * To delete a project you must have the admin permission
     * Delete a project
     * @param projectId Project ID
     */
    public deleteProject(projectId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteProject(projectId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProject(rsp)));
            }));
    }

    /**
     * To edit a project you must have the admin permission
     * Edit a project
     * @param projectId Project ID
     * @param projectRequest 
     */
    public editProject(projectId: string, projectRequest?: ProjectRequest, _options?: Configuration): Observable<ProjectResponse> {
        const requestContextPromise = this.requestFactory.editProject(projectId, projectRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editProject(rsp)));
            }));
    }

    /**
     * Get project by ID
     * @param projectId Project ID
     */
    public getProject(projectId: string, _options?: Configuration): Observable<ProjectResponse> {
        const requestContextPromise = this.requestFactory.getProject(projectId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProject(rsp)));
            }));
    }

}

import { ProjectSecretApiRequestFactory, ProjectSecretApiResponseProcessor} from "../apis/ProjectSecretApi";
export class ObservableProjectSecretApi {
    private requestFactory: ProjectSecretApiRequestFactory;
    private responseProcessor: ProjectSecretApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProjectSecretApiRequestFactory,
        responseProcessor?: ProjectSecretApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProjectSecretApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProjectSecretApiResponseProcessor();
    }

    /**
     * - Add a secret to the project.   - If the secret key already exists, then it will be replaced by the new one.   - If the secret value points toward an existing secret key, it will be considered as an alias. 
     * Add a secret to the project
     * @param projectId Project ID
     * @param secretRequest 
     */
    public createProjectSecret(projectId: string, secretRequest?: SecretRequest, _options?: Configuration): Observable<SecretResponse> {
        const requestContextPromise = this.requestFactory.createProjectSecret(projectId, secretRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProjectSecret(rsp)));
            }));
    }

    /**
     * - Allows you to add an alias at project level on an existing secret having higher scope, in order to customize its key. - You only have to specify a key in the request body - The system will create a new secret at project level with the same value as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the aliased_secret will be exposed in the \"aliased_secret\" field of the newly created secret - Only 1 alias level is allowed. You can't create an alias on an alias 
     * Create a secret alias at the project level
     * @param projectId Project ID
     * @param secretId Secret ID
     * @param key 
     */
    public createProjectSecretAlias(projectId: string, secretId: string, key?: Key, _options?: Configuration): Observable<SecretResponse> {
        const requestContextPromise = this.requestFactory.createProjectSecretAlias(projectId, secretId, key, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProjectSecretAlias(rsp)));
            }));
    }

    /**
     * - Allows you to override at project level a secret that has a higher scope. - You only have to specify a value in the request body - The system will create a new secret at project level with the same key as the one corresponding to the secret id in the path - The response body will contain the newly created secret - Information regarding the overridden_secret will be exposed in the \"overridden_secret\" field of the newly created secret 
     * Create a secret override at the project level
     * @param projectId Project ID
     * @param secretId Secret ID
     * @param value 
     */
    public createProjectSecretOverride(projectId: string, secretId: string, value?: Value, _options?: Configuration): Observable<SecretResponse> {
        const requestContextPromise = this.requestFactory.createProjectSecretOverride(projectId, secretId, value, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProjectSecretOverride(rsp)));
            }));
    }

    /**
     * - To delete a secret you must have the project user permission - You can't delete a BUILT_IN secret - If you delete a secret having override or alias, the associated override/alias will be deleted as well  operationId: deleteProjectSecret 
     * Delete a secret from a project
     * @param projectId Project ID
     * @param secretId Secret ID
     */
    public deleteProjectSecret(projectId: string, secretId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteProjectSecret(projectId, secretId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProjectSecret(rsp)));
            }));
    }

    /**
     * - You can't edit a BUILT_IN secret - For an override, you can't edit the key - For an alias, you can't edit the value - An override can only have a scope lower to the secret it is overriding (hierarchy is BUILT_IN > PROJECT > ENVIRONMENT > APPLICATION) 
     * Edit a secret belonging to the project
     * @param projectId Project ID
     * @param secretId Secret ID
     * @param secretEditRequest 
     */
    public editProjectSecret(projectId: string, secretId: string, secretEditRequest: SecretEditRequest, _options?: Configuration): Observable<SecretResponse> {
        const requestContextPromise = this.requestFactory.editProjectSecret(projectId, secretId, secretEditRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editProjectSecret(rsp)));
            }));
    }

    /**
     * List project secrets
     * @param projectId Project ID
     */
    public listProjectSecrets(projectId: string, _options?: Configuration): Observable<SecretResponseList> {
        const requestContextPromise = this.requestFactory.listProjectSecrets(projectId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProjectSecrets(rsp)));
            }));
    }

}

import { ProjectsApiRequestFactory, ProjectsApiResponseProcessor} from "../apis/ProjectsApi";
export class ObservableProjectsApi {
    private requestFactory: ProjectsApiRequestFactory;
    private responseProcessor: ProjectsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProjectsApiRequestFactory,
        responseProcessor?: ProjectsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProjectsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProjectsApiResponseProcessor();
    }

    /**
     * Create a project
     * @param organizationId Organization ID
     * @param projectRequest 
     */
    public createProject(organizationId: string, projectRequest?: ProjectRequest, _options?: Configuration): Observable<ProjectResponse> {
        const requestContextPromise = this.requestFactory.createProject(organizationId, projectRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProject(rsp)));
            }));
    }

    /**
     * Returns a list of project ids, and for each its total numberof services and environments
     * List total number of services and environments for each project of the organization
     * @param organizationId Organization ID
     */
    public getOrganizationProjectStats(organizationId: string, _options?: Configuration): Observable<ProjectStatsResponseList> {
        const requestContextPromise = this.requestFactory.getOrganizationProjectStats(organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganizationProjectStats(rsp)));
            }));
    }

    /**
     * List projects
     * @param organizationId Organization ID
     */
    public listProject(organizationId: string, _options?: Configuration): Observable<ProjectResponseList> {
        const requestContextPromise = this.requestFactory.listProject(organizationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProject(rsp)));
            }));
    }

}

import { ReferralRewardsApiRequestFactory, ReferralRewardsApiResponseProcessor} from "../apis/ReferralRewardsApi";
export class ObservableReferralRewardsApi {
    private requestFactory: ReferralRewardsApiRequestFactory;
    private responseProcessor: ReferralRewardsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ReferralRewardsApiRequestFactory,
        responseProcessor?: ReferralRewardsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ReferralRewardsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ReferralRewardsApiResponseProcessor();
    }

    /**
     * Get your referral information
     */
    public getAccountReferral(_options?: Configuration): Observable<ReferralResponse> {
        const requestContextPromise = this.requestFactory.getAccountReferral(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountReferral(rsp)));
            }));
    }

    /**
     * A same code can be claimed only 3 times at max
     * Claim a reward
     * @param rewardClaimResponse 
     */
    public postAccountRewardClaim(rewardClaimResponse?: RewardClaimResponse, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.postAccountRewardClaim(rewardClaimResponse, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postAccountRewardClaim(rsp)));
            }));
    }

}
