// Write your solution in this file!

const driver = {
    name: "alexandra"
};

function updateDriverWithKeyAndValue(driver, key, value)
{
    const updatedDriver = Object.assign({}, driver, {[key]: value});
    return updatedDriver;
}

const updatedAlexandra = updateDriverWithKeyAndValue(driver, "license", "A34CF123456");

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value)
{
    driver[key] = value;
    return driver
}
destructivelyUpdateDriverWithKeyAndValue(driver, "license", "A34CF123456");

function destructivelyDeleteFromDriverByKey(driver, key)
{
    delete driver[key];
    return driver;
}
// destructivelyDeleteFromDriverbyKey(driver, 'license');

function deleteFromDriverByKey(driver, key)
{   
    const newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver;
    
}

console.log(driver);
newDriver = deleteFromDriverByKey(driver, "license");

console.log('newDriver: ', newDriver);