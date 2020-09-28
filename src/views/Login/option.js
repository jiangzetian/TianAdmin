const loginOption = {
    width: 400,
    time: 60,
    codeType: 'phone', //phone为手机验证码/img为图片验证码
    column: {
        username: {
            // hide: true,
            label: '用户名',
                // prop: 'user',
                // placeholder:'',
                autocomplete: 'off',
                rules: { required: false, message: '请输入用户名', trigger: 'blur' }
        },
        password: {
            label: '密码',
                // prop: 'pass',
                // placeholder:'',
                autocomplete: 'off',
                rules: { required: false, message: '请输入密码', trigger: 'blur' }
        },
        code: {
            hide: true
        }
    }
};

export {
    loginOption
}