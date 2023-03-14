const BackServerUrl = "http://localhost:3000";

export async function getBaseUnits () {
    const response = await fetch(BackServerUrl+ "/GetBaseUnits");
    const data = await response.json();
    console.log(data)
}

export async function getRequestTypesToUnit () {
    const response = await fetch(BackServerUrl+ "/GetRequestTypesToUnit");
    const data = await response.json();
    console.log(data)
    return data;

}
