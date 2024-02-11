/* tslint:disable */
/* eslint-disable */
/**
 * OPC UA REST API
 * This API provides simple REST based access to an OPC UA server.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: office@opcfoundation.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BrowseResult } from './BrowseResult';
import {
    BrowseResultFromJSON,
    BrowseResultFromJSONTyped,
    BrowseResultToJSON,
} from './BrowseResult';
import type { DiagnosticInfo } from './DiagnosticInfo';
import {
    DiagnosticInfoFromJSON,
    DiagnosticInfoFromJSONTyped,
    DiagnosticInfoToJSON,
} from './DiagnosticInfo';
import type { ResponseHeader } from './ResponseHeader';
import {
    ResponseHeaderFromJSON,
    ResponseHeaderFromJSONTyped,
    ResponseHeaderToJSON,
} from './ResponseHeader';

/**
 * 
 * @export
 * @interface BrowseNextResponse
 */
export interface BrowseNextResponse {
    /**
     * 
     * @type {ResponseHeader}
     * @memberof BrowseNextResponse
     */
    ResponseHeader?: ResponseHeader;
    /**
     * 
     * @type {Array<BrowseResult>}
     * @memberof BrowseNextResponse
     */
    Results?: Array<BrowseResult>;
    /**
     * 
     * @type {Array<DiagnosticInfo>}
     * @memberof BrowseNextResponse
     */
    DiagnosticInfos?: Array<DiagnosticInfo>;
}

/**
 * Check if a given object implements the BrowseNextResponse interface.
 */
export function instanceOfBrowseNextResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BrowseNextResponseFromJSON(json: any): BrowseNextResponse {
    return BrowseNextResponseFromJSONTyped(json, false);
}

export function BrowseNextResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BrowseNextResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ResponseHeader': !exists(json, 'ResponseHeader') ? undefined : ResponseHeaderFromJSON(json['ResponseHeader']),
        'Results': !exists(json, 'Results') ? undefined : ((json['Results'] as Array<any>).map(BrowseResultFromJSON)),
        'DiagnosticInfos': !exists(json, 'DiagnosticInfos') ? undefined : ((json['DiagnosticInfos'] as Array<any>).map(DiagnosticInfoFromJSON)),
    };
}

export function BrowseNextResponseToJSON(value?: BrowseNextResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ResponseHeader': ResponseHeaderToJSON(value.ResponseHeader),
        'Results': value.Results === undefined ? undefined : ((value.Results as Array<any>).map(BrowseResultToJSON)),
        'DiagnosticInfos': value.DiagnosticInfos === undefined ? undefined : ((value.DiagnosticInfos as Array<any>).map(DiagnosticInfoToJSON)),
    };
}
