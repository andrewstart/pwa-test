<script lang="tsx">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        msg: String,
    },
    data() {
        return {};
    },
    render()
    {
        const msg = this.msg;
        return <div>
            <h1>{ msg }</h1>
            <button type="button" onClick={() => this.$router.push('/second')}>Go to counter page</button>
            <p>Saved counter value: {this.$store.state.count}</p>
        </div>;
    }
});
</script>

<style scoped lang="scss">
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>