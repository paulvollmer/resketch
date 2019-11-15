# Resketch
## !!! THIS PROJECT IS IN EARLY STAGE - DO NOT USE IN PRODUCTION !!!

### motivation
the motivation behind the project is to connect the designer closer into the application development. with `Resketch` it is possible to `import` a sketch artboard to your react app and use it as a Component.

### run the demo

clone the repository

```
git clone git@github.com:Wiredcraft/Resketch.git
cd Resketch
```

open a terminal window and execute the following command.  
_this will start the `create-react-app` application._
```
make demo-start
```

open an other terminal window and execute the following command.  
_this will read the the sketch file and build the react component code._
```
make demo-build
```

#### Troubleshoot & prerequisits

the project needs to have:
```
make //gnu make command installed
nodemon //a tool to reload node.js while developing
```


## ideas
- create a cli with different renderer (svg, png, custom-code)
- export symbols and artboards
- create props for the component to change color, size, etc.
