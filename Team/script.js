window.addEventListener('load', async e=> {
    const response = await fetch('../data/teamleads.json');
    const teamLeads = await response.json();
    console.log(teamLeads)

    addCards(teamLeads);
});

function addCards(people) {
    const container = document.getElementsByClassName('container');

    people.forEach(person=> {
        const newArt = document.createElement('article');
        container[0].append(newArt);
        newArt.classList.add('card');

        if (person.link) {
            const link = document.createElement('a');
            newArt.append(link);
            link.href = person.link;
            const image = document.createElement('img');
            link.append(image);
            image.src = person.image;
            image.alt = person.name;
        } else {
            const image = document.createElement('img');
            newArt.append(image);
            image.src = person.image;
            image.alt = person.name;
        }

        const content = document.createElement('div');
        newArt.append(content);
        content.classList.add('teamcard');

        const name = document.createElement('h3');
        content.append(name);
        name.innerHTML = person.name;

        const position = document.createElement('p');
        content.append(position);
        position.innerHTML = person.position;

        const major = document.createElement('p');
        content.append(major);
        major.innerHTML = "Major: " + person.major;

    });
}