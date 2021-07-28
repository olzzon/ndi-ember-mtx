# NDI-EMBER-MTX

NDI Matrice with Ember control for NDI - VSM integration

<img src="doc/mtx.png">

## Installation:

ndi_mtx.cc will build when yarn is called.
(c compiler on machine is needed)
```
yarn
yarn build-server
yarn build-client
yarn start
```

Open GUI in chrome:
```
http://localhost:3008
```

Connect to Ember server on port: 9000

Source and target list are located in the storage folder, and should be edited prior to running NDI MTX.

Inspiration for Node-API c bindings are taken from Streampunk Media

