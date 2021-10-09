const TEST_CACHE = "TEST_CACHE"

// cleanup time
const ONE_WEEK = 1000 * 60 * 60 * 24 * 7

const currentTime = () => {
    return Date.now()
}

const getTestCache=()=>{

    let testCache={
        data:{},
        nextCleanup:new Date().getTime()+TWO_WEEKS
    }  

    try {
        const data = localStorage.getItem(TEST_CACHE)

        if(data){
            testCache=JSON.parse(data)
        }
    }
    catch(e){
        console.error(e.message)
    }

    return testCache
}

const setValueToCache=(userId, number) => {

    const destCache = getTestCache()
    const data = destCache.data


    const item = {
        id:userId,
        expiry:new Date().getTime()+TWO_WEEKS,
        dest:number
    }

    data[userId] = item

    try {
        localStorage.setItem(TEST_CACHE, JSON.stringify(destCache))
    }
    catch(e) {
        cleanUpStorage(data)
    }

}