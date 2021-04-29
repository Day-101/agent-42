const apikey = "?key=" + process.env.RAWG_API
const PageList = (argument = "") => {
  argument = document.querySelector('input').value
  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");
    let articles = "";
    const fetchList = (url, argument) => {
      let finalURL = url + apikey;
      if (argument) {
        finalURL = url + apikey + "&search=" + cleanedArgument;
        hideWelcome();
        console.log(finalURL);
      }else{
        finalURL = url + apikey + "&dates=2021-04-26,2022-12-31" // revoir pour insérer une variable à la date du jour
        console.log(finalURL);
        showWelcome();
      }

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          response.results.forEach((article) => {
            console.log(argument);
            articles += `
              <div class="cardGame">
                <a href="#pagedetail/${article.id}">
                  <div class="card-img">
                    <img src="${article.background_image}">
                  </div>
                </a>
                <a href="#pagedetail/${article.id}"><h1>${article.name}</h1></a>
                <span></span>
                <div class="logos-stores">
                  ${storeSlug(article.stores)}
                </div>
              </div>
              `
          })
          document.querySelector(".page-list .articles").innerHTML = articles;

        });
    };

    fetchList("https://api.rawg.io/api/games", cleanedArgument);
  };

  const storeSlug = (stores) => { // ajouter une vérification de doublon
    let str = ""
    if (stores){
      stores.forEach((s) => {
        str += '<img class="stores-logos" src="src/images/logos/' + s.store.slug +'.svg">'
        console.log(s.store.slug);
      })
    }
    return str
  }

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles">...loading</div>
      </section>
    `;

    preparePage();
  };
  const clean = () => {
    let form = document.querySelector('form')
    form.reset()
  }
  const hideWelcome = () => {
    let welcome = document.querySelector('#welcome')
    welcome.style.display = "none"
  }
  const showWelcome = () => {
    let welcome = document.querySelector('#welcome')
    welcome.style.display = "block"
  }

  render();
  clean();
  return false;
};

export { PageList };