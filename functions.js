// script.js

function redirectTo(url) {
  window.location.href = url;
}
function scrollToKeyFeatures() {
  const keyFeaturesSection = document.getElementById('key-features');
    const offset = 30; 

    const topPos = keyFeaturesSection.getBoundingClientRect().top;
    const scrollPos = topPos + window.pageYOffset - offset;

    window.scrollTo({ top: scrollPos, behavior: 'smooth' });
        }

