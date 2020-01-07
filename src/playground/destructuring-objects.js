const books = {
    name: 'awd',
    publish:{
        // name:"test"
    }
};


const {name: publisherName = 'defaultName'} = books.publish;

console.log(publisherName);