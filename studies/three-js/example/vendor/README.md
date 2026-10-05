# vendor

`three.iife.min.js` is three.js r186 (npm `three@0.186.1`, MIT, licence beside it) bundled into one classic script that defines `window.THREE`, because the package ships ES modules only and a module does not load from `file://`. It was made with esbuild from the package's own `build/three.module.js`:

    npx esbuild node_modules/three/build/three.module.js --bundle --format=iife --global-name=THREE --minify --outfile=three.iife.min.js

Nothing was changed in the code. To move to a newer three.js, run the same command on the newer package and replace this file and the licence.
