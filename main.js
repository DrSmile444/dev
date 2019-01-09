const searchInput = document.querySelector('.search__input');
const searchOption = document.querySelector('.search__options');
const refs = {
   geometry: {
      link: "https://reshak.ru/reshebniki/geometriya/10/atanasyan10-11/",
      prefixes: ['-1var', '-2var'],
      extension: 'jpg',
   },
   algebra: {
      link: 'https://reshak.ru/reshebniki/algebra/10/mordkovich3/images/',
      replace: {
         '.': '-'
      },
      extension: 'gif'
   }
};

searchInput.addEventListener('input', searchAndSet);
searchOption.addEventListener('change', searchAndSet);

function searchAndSet() {
    const images = [
        document.querySelector('.result-1'),
        document.querySelector('.result-2')
    ];
    const option = searchOption.value;
    let value = searchInput.value;

    if (refs[option].replace) {
        Object.entries(refs[option].replace).forEach(item => {
            value = value.split(item[0]).join(item[1]);
        })
    }

    if (refs[option].prefixes) {
        refs[option].prefixes.forEach((prefix, i) => {
            images[i].src = refs[option].link + value + prefix + '.' + refs[option].extension;
        });
    } else {
        images[0].src = refs[option].link + value + '.' + refs[option].extension;
        images[1].src = '';
    }
}

