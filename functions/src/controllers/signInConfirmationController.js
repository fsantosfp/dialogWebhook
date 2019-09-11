const jwt = require('jsonwebtoken');
const key = require('../config/googlePublicKey.json');

module.exports ={
    createConversation(conv, params, signin){

        let chat;

        if(signin.status !== 'OK') {
            chat = ['Você precisa estar logado para usar o App'];
        } else {
            const access = conv.user.access.token; 
            const decode = jwt.verify(access,key);

            chat = [ decode ];

            //chat = ['Ótimo! Obrigado por logar. Agora consigo te passar todos os dados de sua campanha'];
        }

        return chat;
    }
}