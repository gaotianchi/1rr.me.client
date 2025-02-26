type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export default class HttpService {

    private resourceBaseUrl: string;

    constructor() {
        this.resourceBaseUrl = import.meta.env.VUE_APP_RESOURCE_BASE_URL;
    }

    public async request<T>(){

    }

}