module.exports = {
    devServer: {
        port: 8888,
        host: 'localhost',
        https: false,
        open: true, // 运行打开浏览器
        proxy: {
            [process.env.VUE_APP_BASE_API]: {
                target: process.env.VUE_APP_SERVICE_URL, // 代理地址 .env文件，webpack配置
                changeOrigin: true, // 开启代理
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        }
    },
    lintOnSave: false, // 关闭格式校验
    productionSourceMap: false // 打包不会生成.map文件
}