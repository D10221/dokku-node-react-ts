## Dokku Node React Typescript monorepo project <h5>(seed|template|boilerplate|skeleton|scaffolding)?</h5>

Project template to publish to Dokku a NodeJs backed React app using Typescript.  

### Monorepo: 
- yarn: workspaces.
- lerna: lerna run $1.  

### Build config:  
- .yarnrc
    workspaces-experimental true (required: yarn)
- lerna.json
    workspaces (required: lerna)
- package.json 
    - private (required yarn/workspaces)
    - workspaces (required: yarn)
    - dependencies (required: dokku)
    - devDependencies (ignored: dokku)
    - engines (required:  react/typescript)
    - scripts 
        - build (required: typescript)  
            build svc && ui with lerna 
        - start (required: dokku)  
            starts dokku app 
        - dev
            starts create-react-app dev-server
            TODO: start svc
            TODO: NODE_ENV=development
    - packages/\<package\>:
        - package.json
            - build (require: lerna)
            - test  (todo:)
            - start (dev)
    
- app.json
    predeploy script (required: dokku)

### Structure:

packages/ui:   
    
    # React app created with 
    create-react-app $1 --scripts-version=react-scripts-ts
    mv $1 packages/ui

packages/svc:    

    # Express app: created with express $1 m then re-typed
    express $1
    mv $1 packages/svc

## Usage:

    # clone/degit project 
    npm i degit -G
    degit https://github.com/D10221/dokku-node-react-ts  
    
    # alternatively 
    # clone/degit project 
    git clone https://github.com/D10221/dokku-node-react-ts my-app &&  cd my-app && rm .git -rf
        
    # init <your> git project
    git init 
    git add .
    git commit -m init

    # add dokku remote
    git remote add dokku dokku@<your-dokku-location.com>:<your-dokku-app-name>

    # publish
    git push dokku master    

## Dev Cycle:

From project's root  
    
    # edit packages/ui or packages/svc
    # typically
    git checkout -b my_dev_branch 
    npm run dev  # todo: start dev/svc

Create... when happy 

    # for example
    git add . 
    git commit -m "My Stuff"
    git checkout master 
    git merge me_dev_branch
    # publish 
    git push dokku master
    

TODO:  
- tests
- .env
