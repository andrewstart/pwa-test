import { Store } from 'vuex';
import { StoreState } from './main';

declare module '@vue/runtime-core'
{
    // provide typings for `this.$store`
    export interface ComponentCustomProperties
    {
        $store: Store<StoreState>
    }
}