//定义操作用户的api

//导入请求函数
import { $get, $post, $setToken, setCookie, getCookie } from "../utils/request"
import { $EleMsgNotifySuccess, $EleMsgNotifyError } from "../utils/alert";
import md5 from "js-md5"

//登录方法
export let Login = async(loginData) => {
    if (!loginData.loginPwd || !loginData.loginUser) {
        return false;
    }
    //结构出是否记住的信息
    let { rememberMe } = loginData;
    let password = md5(loginData.loginPwd);
    let userName = loginData.loginUser;
    let requestParam = {
        password: password,
        userName: userName,
    };
    let { status, message, token } = await $get("Admin/Login", requestParam);
    let isLogined = status === "2" ? true : false;
    if (status === "2") {
        //设置了名为token的存在时间为1天的浏览器Cookie
        setCookie("token", token, 1);
        //将token信息设置为请求头内容
        $setToken();
        $EleMsgNotifySuccess(message);
        if (rememberMe) {
            setCookie("loginUser", userName, 1);
            setCookie("loginPwd", password, 1)
        }
    } else {
        $EleMsgNotifyError(message);
    }
    return isLogined;
}


//自动完成登录
export let AutoLogin = async() => {
    let loginUser = getCookie("loginUser");
    let loginPwd = getCookie("loginPwd");
    if (loginUser && loginPwd) {
        let loginData = {
            loginUser: loginUser,
            loginPwd: loginPwd,
        }
        let { status, message, token } = await $get("Admin/Login", loginData);

        if (status === "2") {
            //设置了名为token的存在时间为1天的浏览器Cookie
            setCookie("token", token, 1);
            //将token信息设置为请求头内容
            $setToken();
            return true;
        } else { return false; }
    } else { return false; }
};


export let ListCourse = async(params) => {
    let results = await $get("Course/List", params);
    return results;
}