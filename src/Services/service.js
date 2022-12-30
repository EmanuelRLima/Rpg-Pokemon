import Cookie from "js-cookie"


export default {
    

    auth(to, from, next){
        const token = Cookie.get('User');
        
        //fazer metodo de checagem do token para segurança;
        
        if(!token){
            next('/login')
        }
        
        next();
    }
}