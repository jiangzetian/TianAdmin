const loginOption = {
    width: 400,
    time: 60,
    codeType: 'phone', //phone为手机验证码/img为图片验证码
    column: {
        username: {
            label: '账号',
            prop: 'tel',
            placeholder:'请输入账号',
            autocomplete: 'off',
            rules: { required: true, message: '请输入账号', trigger: 'blur' }
        },
        password: {
            label: '密码',
            prop: 'pwd',
            placeholder:'请输入密码',
            autocomplete: 'off',
            rules: { required: true, message: '请输入密码', trigger: 'blur' }
        },
        code: {
            hide: true
        }
    }
};

export {
    loginOption
}