class SurveyPreview extends Survey{
    constructor() {
        super();
    }

    showPreview=(__s)=>{
        this.bs(__s,true);
    }
    
}
exports = SurveyPreview