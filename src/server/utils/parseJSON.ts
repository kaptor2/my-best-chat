export const populate = (folders: Array<string>, jsonArrayObject: Array<any>) =>
    jsonArrayObject.map((itemObject) => {
        folders.forEach((folder) => {
            itemObject[folder] = JSON.parse(itemObject[folder]);
        });
        return itemObject
    })