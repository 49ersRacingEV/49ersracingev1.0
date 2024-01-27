window.addEventListener('load', async e=> {
    const response = await fetch('../data/sponsors.json');
    const sponsors = await response.json();

    addCards(sponsors);
});

function addCards(sponsors) {
    const container = document.getElementsByClassName('sponsorcollection');

    sponsors.forEach(sponsor=> {
        const newAnc = document.createElement('a');
        const image = document.createElement('img');     
        
        switch (sponsor.tier) {
            case "gold":
                container[0].append(newAnc);
                break;
            case "green":
                container[1].append(newAnc);
                break;
            case "black":
                container[2].append(newAnc);
                break;
        }

        newAnc.classList.add('sponsoranc')
        newAnc.href = sponsor.link;
        newAnc.append(image);
        image.src = sponsor.image;
        image.alt = sponsor.name;
    });
}
