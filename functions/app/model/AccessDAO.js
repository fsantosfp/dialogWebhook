const Database = require('../database/Database');

class AccessDAO extends Database {

    constructor(){
        super();
        this.query = '';
        this.result = '';
    }

    async selectAccessAccount(id,dataSource){
        this.query = 'SELECT platformName as datasource,accessAccountName as accountName, accessAccountId as accountId, accessUserId  as userId FROM access  INNER JOIN platforms ON platformId = accessPlatformId WHERE accessCampaignId = ' + id + ' AND accessPlatformId IN ('+dataSource+')';
        this.result = await this.execute(this.query);
        return this.result;
    }

    async selectAccessByPlatform(platformName, campaignId){
        this.query = 'SELECT platformName,accessAccountName, accessAccountId, accessUserId FROM atlas.access INNER JOIN platforms on accessPlatformId = platformId WHERE platformName = "'+ platformName +'" AND accessCampaignId = ' + campaignId;
        this.result = await this.execute(this.query);
        return this.result;
    }

}

module.exports = AccessDAO;