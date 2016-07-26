export default function Single(GifService, $stateParams){
    let vm = this;
    GifService.readGif($stateParams.id).then((resp)=>{
        vm.gif = resp.data;
    });
}

Single.$inject = ['GifService', '$stateParams'];
