
import { Injectable } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "../interfaces/http-adapter.interface";

@Injectable()
export class AxiosAdapter implements HttpAdapter {

    private  axios:AxiosInstance = axios ;

    public async get<T>(url: string, options?: any): Promise<T> {
        try {
            const { data } = await this.axios.get<T>(url, options)
            return data
        } catch (error) {
            throw new Error(error)            
        };
    }

    public async post<T>(url: string, data: any, options?: any): Promise<T> {
        try {
            const { data } = await this.axios.post<T>(url,options)
            return data
        } catch (error) {
            throw new Error(error)    
            
        }
    }

    public async put<T>(url: string, data: any, options?: any): Promise<T> {
        return null;
    }

    public async delete<T>(url: string, options?: any): Promise<T> {
        return null;
    }
}