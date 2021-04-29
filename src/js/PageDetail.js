const apikey = "?key=" + process.env.RAWG_API
const PageDetail = (argument) => {
  console.log("PageDetail");
  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");
    hideWelcome();
    const fetchGame = (url, argument) => {
      let finalURL = url + argument + apikey;
      console.log(finalURL);
      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          let { background_image, name, rating, rating_top, ratings, description, released, developers, platforms, publishers, genres, tags, stores, website } = response;
          
          let rate = layoutRate(rating, rating_top, ratings)
          let devs = eachNameList(developers)
          let plats = platList(platforms)
          let publis = eachNameList(publishers)
          let genre = eachNameList(genres)
          let tag = eachTagList(tags)
          let store = storeList(stores)
   
          let articleDOM = document.querySelector(".page-detail .article");

          articleDOM.querySelector("div.background").innerHTML += '<img src="' + background_image + '">';
          articleDOM.querySelector("div.background").innerHTML += '<div class="website"><a href="' + website + '">Check Website </a><div id="triangle-code"></div></div>';
          articleDOM.querySelector("h1.title").innerHTML = name;
          articleDOM.querySelector("div.rating").innerHTML = rate;
          articleDOM.querySelector("div.description").innerHTML = '<h2>About</h2>' + description;
          articleDOM.querySelector("div.release-date span").innerHTML = released;
          articleDOM.querySelector("div.developers ul").innerHTML = devs;
          articleDOM.querySelector("div.platforms ul").innerHTML = plats;
          articleDOM.querySelector("div.publishers ul").innerHTML = publis;
          articleDOM.querySelector("div.genres ul").innerHTML = genre;
          articleDOM.querySelector("div.tags span").innerHTML = tag;
          articleDOM.querySelector("div.stores ul").innerHTML = store;
        });
    };

    fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
  };
  const layoutRate = (rating, rating_top, ratings) => {
    return rating + "/" + rating_top + " - " + ratings.length + " votes"
  }
  const eachNameList = (list) => {
    let str = ""
    if (list){
      list.forEach((item) => {
        str += '<li>' + item.name + '</li>';
      })
    }
    return str
  }
  const platList = (list) => {
    let str = ""
    if (list){
      list.forEach((item) => {
        str += '<li>' + item.platform.name + '</li>';
      })
    }
    return str
  }
  const eachTagList = (list) => {
    let str = ""
    if (list){
      list.forEach((item) => {
        str += item.name + ', ';
      })
    }
    return '<p>' + str + '</p>'
  }
  const storeList = (list) => {
    let str = ""
    if (list){
      list.forEach((item) => {
        str += '<li>' + item.store.name + '<img src="src/images/logos/' + item.store.slug + '.svg">' + '</li>';
      })
    }
    return str
  }
  
  const render = () => {
    pageContent.innerHTML = `
      <section class="page-detail">
        <div class="article">
        <div class="article-header">
          <div class="background">
            
          </div>
        </div>
        <div class="title-section">
          <h1 class="title"></h1>
          <div class="rating"></div>
        </div>
        <div class="description"></div>
        <div class="spec">
          <div class="release-date"><h2>Release date :</h2> <span></span></div>
          <div class="developers"><h2>Developer :</h2> <ul></ul></div>
          <div class="platforms"><h2>Platforms :</h2> <ul></ul></div>
          <div class="publishers"><h2>Publisher :</h2> <ul></ul></div>
          <div class="genres"><h2>Genre :</h2> <ul></ul></div>
          <div class="tags"><h2>Tags :</h2> <span></span></div>
        </div>
        <div class="stores">
          <h3>BUY</h3>
          <ul></ul>
        </div>
        </div>
      </section>
    `;

    preparePage();
  };
  const hideWelcome = () => {
    let welcome = document.querySelector('#welcome')
    welcome.style.display = "none"
  }
  const showWelcome = () => {
    let welcome = document.querySelector('#welcome')
    welcome.style.display = "block"
  }
  render();
};

export { PageDetail };
