<template>
  <div id="app">
    <div id="nav">
      <img src="./assets/raditube.svg" />
    </div>
    <router-view/>
  </div>
</template>

<script>

</script>

<style lang="scss">
@import 'normalize-scss';
@include normalize();

body {
  font-size: 16px;
  background: black;
  padding: 3rem;
}

@font-face {
  font-family: 'PlexMonoRegular';
  src: url('./assets/fonts/IBMPlexMono-Regular.woff') format('woff');
}

@font-face {
  font-family: 'Ilisarniq-Light';
  src: url('./assets/fonts/Ilisarniq-Light.eot');
  src: url('./assets/fonts/Ilisarniq-Light.eot?#iefix') format('embedded-opentype'),
       url('./assets/fonts/Ilisarniq-Light.woff2') format('woff2'),
       url('./assets/fonts/Ilisarniq-Light.woff') format('woff'),
       url('./assets/fonts/Ilisarniq-Light.ttf')  format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Ilisarniq-LightItalic';
  src: url('./assets/fonts/Ilisarniq-LightItalic.eot');
  src: url('./assets/fonts/Ilisarniq-LightItalic.eot?#iefix') format('embedded-opentype'),
       url('./assets/fonts/Ilisarniq-LightItalic.woff2') format('woff2'),
       url('./assets/fonts/Ilisarniq-LightItalic.woff') format('woff'),
       url('./assets/fonts/Ilisarniq-LightItalic.ttf')  format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Ilisarniq-Regular';
  src: url('./assets/fonts/Ilisarniq-Regular.eot');
  src: url('./assets/fonts/Ilisarniq-Regular.eot?#iefix') format('embedded-opentype'),
       url('./assets/fonts/Ilisarniq-Regular.woff2') format('woff2'),
       url('./assets/fonts/Ilisarniq-Regular.woff') format('woff'),
       url('./assets/fonts/Ilisarniq-Regular.ttf')  format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Ilisarniq-Italic';
  src: url('./assets/fonts/Ilisarniq-Italic.eot');
  src: url('./assets/fonts/Ilisarniq-Italic.eot?#iefix') format('embedded-opentype'),
       url('./assets/fonts/Ilisarniq-Italic.woff2') format('woff2'),
       url('./assets/fonts/Ilisarniq-Italic.woff') format('woff'),
       url('./assets/fonts/Ilisarniq-Italic.ttf')  format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Ilisarniq-Demi';
  src: url('./assets/fonts/Ilisarniq-Demi.eot');
  src: url('./assets/fonts/Ilisarniq-Demi.eot?#iefix') format('embedded-opentype'),
       url('./assets/fonts/Ilisarniq-Demi.woff2') format('woff2'),
       url('./assets/fonts/Ilisarniq-Demi.woff') format('woff'),
       url('./assets/fonts/Ilisarniq-Demi.ttf')  format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Ilisarniq-DemiItalic';
  src: url('./assets/fonts/Ilisarniq-DemiItalic.eot');
  src: url('./assets/fonts/Ilisarniq-DemiItalic.eot?#iefix') format('embedded-opentype'),
       url('./assets/fonts/Ilisarniq-DemiItalic.woff2') format('woff2'),
       url('./assets/fonts/Ilisarniq-DemiItalic.woff') format('woff'),
       url('./assets/fonts/Ilisarniq-DemiItalic.ttf')  format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Ilisarniq-Bold';
  src: url('./assets/fonts/Ilisarniq-Bold.eot');
  src: url('./assets/fonts/Ilisarniq-Bold.eot?#iefix') format('embedded-opentype'),
       url('./assets/fonts/Ilisarniq-Bold.woff2') format('woff2'),
       url('./assets/fonts/Ilisarniq-Bold.woff') format('woff'),
       url('./assets/fonts/Ilisarniq-Bold.ttf')  format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Ilisarniq-BoldItalic';
  src: url('./assets/fonts/Ilisarniq-BoldItalic.eot');
  src: url('./assets/fonts/Ilisarniq-BoldItalic.eot?#iefix') format('embedded-opentype'),
       url('./assets/fonts/Ilisarniq-BoldItalic.woff2') format('woff2'),
       url('./assets/fonts/Ilisarniq-BoldItalic.woff') format('woff'),
       url('./assets/fonts/Ilisarniq-BoldItalic.ttf')  format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Ilisarniq-Black';
  src: url('./assets/fonts/Ilisarniq-Black.eot');
  src: url('./assets/fonts/Ilisarniq-Black.eot?#iefix') format('embedded-opentype'),
       url('./assets/fonts/Ilisarniq-Black.woff2') format('woff2'),
       url('./assets/fonts/Ilisarniq-Black.woff') format('woff'),
       url('./assets/fonts/Ilisarniq-Black.ttf')  format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Ilisarniq-BlackItalic';
  src: url('./assets/fonts/Ilisarniq-BlackItalic.eot');
  src: url('./assets/fonts/Ilisarniq-BlackItalic.eot?#iefix') format('embedded-opentype'),
       url('./assets/fonts/Ilisarniq-BlackItalic.woff2') format('woff2'),
       url('./assets/fonts/Ilisarniq-BlackItalic.woff') format('woff'),
       url('./assets/fonts/Ilisarniq-BlackItalic.ttf')  format('truetype');
  font-weight: normal;
  font-style: normal;
}

h1 {
  font-family: 'Ilisarniq-Regular';
  font-size: 3.5rem;
  margin: 0 0 2rem;
}

h2 {
  font-family: 'Ilisarniq-Light';
  font-weight: 200;
  font-size: 1.25rem;
  margin: 0 0 1rem;
}

h3 {
  font-family: 'PlexMonoRegular';
  font-size: 1.25rem;
  color: #DC92FF;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

</style>
