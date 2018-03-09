module.exports={
    port: 3000,
    db:{
        "host": "127.0.0.1",
        "port": "3306",
        "user": "root",
        "password": "lll931121",
        "database": "KnowMe"
    },
    session:{
            store: "local",
            secret: 'rayisliulei',
            key: 'knowme',
            maxAge: 2 * 60 * 60 * 1000,
            redis: {
                "host": "127.0.0.1",
                "port": 6379,
                "db": "0"
            },
            memcached: {
                "hosts": ['127.0.0.1:11211']
            }
    }
}