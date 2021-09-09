import { Store } from 'vuex';

interface StoreState
{
    count: number
}

declare module '@vue/runtime-core'
{
    // provide typings for `this.$store`
    export interface ComponentCustomProperties
    {
        $store: Store<StoreState>
    }
}