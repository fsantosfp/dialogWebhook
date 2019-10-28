const SuperMetrics = require('../../service/supermetrics/Supermetrics');
const DataParser = require('../parser/DataParser');

class DataProvider {

    constructor(){
        this.platform;
        this.startDate;
        this.endDate;
        this.metrics;
        this.dataSource;
        this.userId;

        this.parser = new DataParser;
        this.service = new SuperMetrics;
    }

    setPeriod(startDate, endDate){
        this.startDate = startDate;
        this.endDate = endDate;
    }

    setPlatform(platform){
        this.platform = platform;
    }

    setMetrics(metrics){
        this.metrics = metrics;
    }

    setDataSource(datasource, id){
        this.dataSource = datasource;
        this.userId = id;
    }

    setAccount(id,name){
        this.account = {"ID" : id, "name" : name};
    }

    async getData(){

        // montar esta classe para consumir os dados e devolver para os reports

        // modelo de requisição
        this.service.config(
            {
                metrics : this.metrics,
                startDate : this.startDate,
                endDate : this.endDate,
                splitByColumn : [],
                splitByRow : [],
                accounts : [this.account],
                dataSource : this.dataSource,
                userId : this.userId,
                apiKey : "api_LAg3zFxH07OdnPa1lCGdHO9bifOiOD_5vCx0wl9xezuMD9B_hfSJthUELANdhQZXeUPYx9fqyWxkB0RVdzit6drLh9kfYcqJ4QUs"
            }
        );

        let data = await this.service.get();
        
        this.parser.load(this.dataSource);
        return this.parser.transform(data,this.dataSource);
    }


}

module.exports = DataProvider;