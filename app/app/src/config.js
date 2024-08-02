const config = {
    apiPath: 'http://66.42.51.155:3001',
    headers: () => {
        return{
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        };
    },
};

export default config;