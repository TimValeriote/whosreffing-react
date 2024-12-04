import axios from "axios";

// All API utility functions
const getRouteData = async(key: String, subkey:any) => {
    let urlExtension; 
    if (subkey) {
        urlExtension = `/whosreffing/${key}/${subkey}`
    } else {
        urlExtension = `/whosreffing/${key}`
    }

    let response: any, error;
    const requestSettings = {
        headers: {"Content-Type": "application/json"}
    }
    await axios.get(urlExtension, requestSettings).then(resp => {
        response = resp.data
    }).catch(err => {
        error = err
    })

    return { response, error }
}

export {getRouteData};