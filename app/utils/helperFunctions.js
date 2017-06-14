// strips away extra data in returned json object and simplifies structure
function parseResources(resources) {
    return resources.reduce((accumulator, resource) => {
        accumulator.push(
            {
                title: resource.collectiontitle.$t,
                description: resource.description.$t,
                university: resource.university.$t,
                geographicArea: resource.geographicareatopic.$t,
                url: resource.url.$t,
                newMaterial: resource.newtypeofmaterial.$t,
                oldMaterial: resource.oldtypeofmaterial.$t,
                language: resource.language.$t,
                subject: resource.subject.$t,
                period: resource.period.$t,
            }
        );
        return accumulator;
    }, []);
}

// filter the resources array for titles and descriptions containing searchText
function filterSearchResources(resources, searchText) {
    return resources.filter((resource) => {
        let title = resource.title.toLowerCase();
        let description = resource.description.toLowerCase();
        searchText = searchText.toLowerCase();

        if (title.indexOf(searchText) === -1 && description.indexOf(searchText) === -1) {
            return false;
        }
        return true;
    });
}

function filterCheckboxResources(resources, target) {
    return resources.filter((resource) => {
        return resource.university === target.value;
    });
}

function createMetaData(resources) {
    let initial = {university: {}};

    return resources.reduce((obj, resource) => {
        if (obj.university[resource.university]) {
            obj.university[resource.university] = obj.university[resource.university] + 1;
        } else {
            obj.university[resource.university] = 1;
        }
        return obj;
    }, initial);
}

export {parseResources, filterSearchResources, filterCheckboxResources, createMetaData};
