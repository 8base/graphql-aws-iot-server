import { ISignedUrlResolver } from '../src/interfaces/ISignedUrlResolver';
import { SigV4Utils } from './utils';
import { AWSCredentials } from './types';


function getCredentials(): AWSCredentials {
    return {
        accessKeyId: "AKIAJ4UFHLQW3CZTBJPA",
        secretAccessKey: "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",
        sessionToken: ""
    }
}


export class SignedUrlResolver implements ISignedUrlResolver {

    private iotEndpoint: string;

    private region: string;

    constructor(iotEndpoint: string, region: string) {
        this.iotEndpoint = iotEndpoint;
        this.region = region;
    }

    async resolve(): Promise<string> {
        const sigv4utils = new SigV4Utils();
        return sigv4utils.getSignedUrl(this.iotEndpoint, this.region, getCredentials());
    }
    
}