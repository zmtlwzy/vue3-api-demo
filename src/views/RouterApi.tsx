import { defineComponent } from 'vue';
import * as r from 'vue-router';
import { List } from '../config/routerList';
export default defineComponent({
  setup() {
    console.log('current route:', r.useRoute());
    const router = r.useRouter();
    console.log(r.RouterLink);
    console.log(r);
    const jump = () => {
      router.push(List[1]).then(() => {
        console.log('jump');
      });
    };
    return (): JSX.Element => (
      <>
        <div class="column-layout">
          <router-link to={List[0]}>ref</router-link>
          <h2 onClick={jump}>reactive</h2>
          <span onClick={() => router.go(-1)}>prev</span>
        </div>
      </>
    );
  },
});
