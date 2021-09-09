<script lang="tsx">
import { defineComponent } from 'vue';
import BackButton from '../components/BackButton.vue';

export default defineComponent({
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        onSave()
        {
            this.$store.commit('saveCount', this.count);
        },
    },
    render()
    {
        return <div>
            <header><BackButton /></header>
            <h1>Secondary Page</h1>

            <p>
                <button onClick={() => this.count++}>Click me!</button>
            </p>
            <p>Button has been clicked {this.count} times.</p>
            <p><button onClick={this.onSave}>Save Count</button></p>
        </div>;
    },
});
</script>

<style scoped lang="scss">
button {
    color: #42b983;
}
</style>