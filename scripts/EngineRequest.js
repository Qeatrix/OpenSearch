let engine_type = localStorage.getItem('engine_type');
let engine_url = localStorage.getItem('engine_url');

document.querySelector('.engine-yandex').onclick = ChooseYandex;
document.querySelector('.engine-google').onclick = ChooseGoogle;
document.querySelector('.engine-bing').onclick = ChooseBing;
document.querySelector('.engine-duckduckgo').onclick = ChooseDuckDuckGo;
document.querySelector('*').addEventListener('keypress', SendRequest);

function ChooseYandex() {
  engine_type = 'yandex';
  engine_url = 'https://yandex.ru/search/?text=';

  localStorage.setItem('engine_type', 'yandex');
  localStorage.setItem('engine_url', 'https://yandex.ru/search/?text=');
  console.log("Chose search engine: Yandex")
}

function ChooseGoogle() {
  engine_type = 'google';
  engine_url = 'https://www.google.com/search?q=';

  localStorage.setItem('engine_type', 'google');
  localStorage.setItem('engine_url', 'https://www.google.com/search?q=');
  console.log("Chose search engine: Google")
}

function ChooseBing() {
  engine_type = 'bing';
  engine_url = 'https://www.bing.com/search?q=';

  localStorage.setItem('engine_type', 'bing');
  localStorage.setItem('engine_url', 'https://www.bing.com/search?q=');
  console.log("Chose search engine: Bing")
}

function ChooseDuckDuckGo() {
  engine_type = 'duckduckgo';
  engine_url = 'https://duckduckgo.com/?q=';

  localStorage.setItem('engine_type', 'duckduckgo');
  localStorage.setItem('engine_url', 'https://duckduckgo.com/?q=');
  console.log("Chose search engine: DuckDuckGo")
}

function SendRequest() {
  if (event.key == 'Enter') {
    if (engine_url != null) {
      let request = document.querySelector('.search-text').value;

      window.location.href = engine_url + request;
      console.log("Sended." + engine)
    }
  }
}
