<script lang="tsx">
import { defineComponent } from 'vue';

export default defineComponent({
    render()
    {
        return <span><button onClick={() => this.$router.back()}>&lt;</button></span>;
    }
});
</script>

<style scoped>
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