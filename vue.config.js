module.exports = {
    devServer: {
        port: 8888,
        host: 'localhost',
        https: false,
        open:true // 运行打开浏览器
    },
    lintOnSave: false, // 关闭格式校验
    productionSourceMap:false // 打包不会生成.map文件
}