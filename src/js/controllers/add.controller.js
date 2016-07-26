export default function Add(GifService, $state){
    let vm = this;
    vm.addGif = addGif;

    function addGif(gif){
        GifService.createGif(gif).then(()=>{ $state.go('root.home'); });
    }
}

Add.$inject = ['GifService', '$state'];
