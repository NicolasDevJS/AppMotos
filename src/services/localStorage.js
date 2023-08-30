import AsyncStorage from '@react-native-async-storage/async-storage';


export const ReceiveTokenFromBackend = async ({ backendToken }) => {

    const token = backendToken.access_token;
    await StoreAccessToken({ token })
    
    const document = backendToken.document;
    await StoreDocument({ document })

    const vehicles = backendToken.vehicles;
    await StoreVehicle({ vehicles })
}

export const StoreAccessToken = async ({ token }) => {
    try {
        await AsyncStorage.setItem('@token', JSON.stringify(token))
        console.log("passei store token")
    } catch (e) {
        console.log(e)
    }
}

export const StoreDocument = async ({ document }) => {
    try {
        await AsyncStorage.setItem('@document', JSON.stringify(document))
        console.log("passei store document")
    } catch (e) {
        console.log(e)
    }
}


export const StoreVehicle = async ({ vehicles }) => {
    try {
        await AsyncStorage.setItem('@vehicles', JSON.stringify(vehicles))
        console.log("passei store vehicles")
    } catch (e) {
        console.log(e)
    }
}


export const GetAccessToken = async () => {
    try {
        const token = await AsyncStorage.getItem('@token')
        if (token !== null) {
            return token
        } else {
            return false
        }
        
    } catch (e) {
        console.log(e)
    }
}

export const GetStoredUserVehicles = async () => {
    try {
        const vehicles = await AsyncStorage.getItem('@vehicles')
        const parsedVehicles = JSON.parse(vehicles)
        if (vehicles !== null) {
            return parsedVehicles
        } 
    } catch (e) {
        console.log(e)
    }
}

