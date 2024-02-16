


export const EnvConfiguration = () => ({
    environment: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3001,
    mongo_url: process.env.MONGO_URL, 
    defaultLimitPagination: +process.env.DEFAULT_LIMIT_PAGINATION || 10,
})