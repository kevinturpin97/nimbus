# nimbus
*Avec nimbus mi pren' pu le bus !* 🚌

Application de covoiturage 100% réunionnaise.

## Description

### Installation

```bash
$ npm install
```
### Lancement
    
```bash
$ npm start
```

## API

### Liste des covoiturages

```bash
$ curl http://localhost:3000/covoiturages
```

### Ajout d'un covoiturage

```bash
$ curl -X POST -d '{"depart":"Paris", "arrivee":"Marseille", "date":"2017-01-01"}' http://localhost:3000/covoiturages
```

## Documentation

[![Build Status](https://travis-ci.org/nimbus-app/nimbus.svg?branch=master)](https://travis-ci.org/nimbus-app/nimbus)
[![NPM version](https://badge.fury.io/js/nimbus.svg)](https://badge.fury.io/js/nimbus)
[![Dependency Status](https://img.shields.io/npm/dm/nimbus.svg)](https://www.npmjs.com/package/nimbus)