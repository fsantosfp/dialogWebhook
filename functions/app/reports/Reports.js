const MediaMath = require('../util/MediaMath');

class Reports {

    constructor(){
        this.datasource = '';
        this.campaingName = '';
        this.startDate = '';
        this.endDate = '';
        this.metrics;
        this.impressions = 0;
        this.clicks = 0;
        this.ctr = 0;
        this.insights = '';
        this.errors = '';

        this.calcule = new MediaMath;
        
    }

    getMetrics(){
        return this.metrics;
    }

    setDate(startDate, endDate){

    }

}

module.exports = Reports;