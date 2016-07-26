export default function Server($http, SERVER){
    this.createGif = createGif;
    this.readGifs = readGifs;
    this.readGif = readGif;
    function createGif(gif){
        return $http.post(SERVER.URL, gif);
    }
    function readGifs(){
        return $http.get(SERVER.URL);
    }
    function readGif(id){
        return $http.get(SERVER.URL + id);
    }
}

Server.$inject = ['$http', 'SERVER'];
