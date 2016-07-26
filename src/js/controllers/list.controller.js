export default function  List(ServerService){
    let vm = this;
    init();
    function init(){
        ServerService.readGifs().then(resp => {
            console.log(resp);
            vm.gifs = resp.data;
        })
    }
}

List.$inject = ['ServerService'];
