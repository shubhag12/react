react is a library or framework?
it is a library

what is a crowsel?
it is javascript library

difference between library or framework
it takes minimum effort for library to put inside in our code

READ ABOUT EMMET div>div>h1  html:5

html:5 gives a html tag

what is a cdn content delivery network
difference between async and differ
how many ways you can call the script tags
shift +tab to move multiple lines to left   


js engine give the window object (the global object)


in props id class and literally can be anything it can be any literal that is called props

{
    id:"tilte"
    class:"app"
    hello:"world"
}
these are all propss


there are many types of bundlers used like webpack vite and parcel 
in the original create react app the webpack used is webpack 
but in this project we will be using parcel
and what is the use case of bundlers
it  is necessary to bind every file we write to make the size of the folder less
minifiy your code remove your console log make your code production ready

npm init or yarn node package manager
to have a package manager in our folder
npm is basically used to manages packagaes we use it to because we need many packages in our project
npm i parcel ->it will install parcel in production code
npm i -D parcel ->it will install parcel only in developer machine (dev dependency) or --savedev


what is package lock?
to know what exact version of the library which we are using in the production right now

the package.json shows the version at the time of installing and we have writter tilde beside it
so that there is any upgrade in package it upgrade it and the exact version will be shown on package lock.json

should you add your node modules to git??
never have to put git hub repository
we can make a track of node modules if we have package lock.json and package .json file

npx means using execute using npm

parcel enable hot module reload live

what is the most heaviest thing when we load a website?
media images 

parcel does your image optimization also 
tree shaking (remove unwanting code )
it also do caching while development
compatible with older version of webbrowser
it add pollyfills 
compression of file(changing the variable name to smaller length)
port number
consistent hashing algorithm

# now our server is on local host (http)
# but we can change it to https also npx parcel index.html --https
# it will upgrade to https

why is your react app fast>
* virtual dom
* react uses parcel,webpack

React.createElement=>object=>html(DOM)

transistive dependency ->we have our package manager that takes care of transistive dependency  

first we done npm init it give package.json

what is the command used to iniatialize npm ->npm init->package.json->to manage dependency ->dependeny ->devdependeny
->browerlist ->compatible for older version of browser

a polyfill is a code which is a replacement of newer version of browser

babel-plugin-transform-remove-console helps to remove console logs from our files

how do you create multiple tags in jss
how do you create image tags in jss


difference between html and jsx

note=>jsx is not html inside javascript it is not like that

it syntax is similar like javascript

babel is the reader of jsx
this is like there is a code to read our code to give another code that is accesible by browser


jsx uses create React.createElement=>object=>html(dom)  and babel does that

not jsx is not react

* React component

* functional component(new way component)
* class based component(old way component)

 * in functional component name start with a capital letter (it is not mandatory) but a normal conventio(good pratice)