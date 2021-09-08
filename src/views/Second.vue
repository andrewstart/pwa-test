<script lang="tsx">
import { defineComponent } from 'vue';
import BackButton from '../components/BackButton.vue';

export default defineComponent({
    data() {
        return {
            count: 0,
        };
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