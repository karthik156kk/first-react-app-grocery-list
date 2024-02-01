const apiRequest = async(API_URL='', optionObj=null, errMsg=null) => {
    try {
        const data = await fetch(API_URL, optionObj);
        if(!data.ok) throw Error('Please reload the app');
    } catch(err){
        errMsg = err.message;
    } finally {
        return errMsg;
    }
}

export default apiRequest