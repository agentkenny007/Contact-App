export default function Layout($state, $rootScope){
    let vm = this;
    init($state.current);
    function init(state){
        vm.class = state.name.slice(5);
        $rootScope.$on('$stateChangeSuccess', (e, toState)=>{
            vm.class = toState.name.slice(5);
        });
    }
}

Layout.$inject = ['$state', '$rootScope'];
