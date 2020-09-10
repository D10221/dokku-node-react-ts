## Dokku Node React Typescript monorepo project <h5>(seed|template|boilerplate|skeleton|scaffolding|recipe)?</h5>

a base project to publish to Dokku a NodeJs backed React app using Typescript.  

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

    # update from template
    cd ../dokku-node-react-ts && npm run archive
    mv archive.zip ../my-project/ && cd ../my-project && unzip -o archive.zip

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
- .env
