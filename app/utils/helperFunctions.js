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

function createFacetsCount(resources, searchText) {
    let initial = {university: {}};

    return resources.reduce((obj, resource) => {
        let title = resource.title.toLowerCase();
        let description = resource.description.toLowerCase();
        let search = searchText.toLowerCase();

        if (title.indexOf(search) !== -1 || description.indexOf(search) !== -1) {
            if (obj.university[resource.university]) {
                obj.university[resource.university] = obj.university[resource.university] + 1;
            } else {
                obj.university[resource.university] = 1;
            }
        }

        return obj;
    }, initial);
}

export {parseResources, createFacetsCount};
