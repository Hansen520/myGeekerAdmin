import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { showFullScreenLoading, tryHideFullScreenLoading } from "@/config/serviceLoading";
import { AxiosCanceler } from "./helper/axiosCancel";
import { ResultData } from "@/api/interface";
import { checkStatus } from "./helper/checkStatus";
import { ResultEnum } from "@/enums/httpEnum";
import { ElMessage } from "element-plus";
import { GlobalStore } from "@/store";
import router from "@/routers";

const GlobalStore = GlobalStore();

const axiosCanceler = new AxiosCanceler();

const config = {
	// 默认地址
	baseURL: import.meta.env.VITE_API as string
};
