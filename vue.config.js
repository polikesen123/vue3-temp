const components = require('unplugin-vue-components/webpack')
const {
    ElementPlusResolver,
    AntDesignVueResolver,
} = require('unplugin-vue-components/resolvers');
const isProd = process.env.NODE_ENV === 'production';
module.exports = {
    configureWebpack: config => {
        const basePlugins = [
            components({
                resolvers: [ElementPlusResolver(),AntDesignVueResolver()],
            }),
        ];
        config.optimization = {
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vue: {
                        name: 'vue',
                        test: /[\\/]node_modules[\\/]vue[\\/]/,
                        priority: -10
                    },
                    vuex: {
                        name: 'vuex',
                        test: /[\\/]node_modules[\\/]vuex[\\/]/,
                        priority: -10
                    },
                    'vue-router': {
                        name: 'vue-router',
                        test: /[\\/]node_modules[\\/]vue-router[\\/]/,
                        priority: -10
                    },
                    'element-plus': {
                        name: 'element-plus',
                        test: /[\\/]node_modules[\\/]element-plus[\\/]/,
                        priority: -10
                    },
                    'ant-design-vue': {
                        name: 'ant-design-vue',
                        test: /[\\/]node_modules[\\/]ant-design-vue[\\/]/,
                        priority: -10
                    },
                }
            }
        };
        if (isProd) {
            return {
                plugins: [
                    ...basePlugins
                ]
            }
        } else {
            return {
                plugins: [
                    ...basePlugins
                ]
            }
        }

    }
}