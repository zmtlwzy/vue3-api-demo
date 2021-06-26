<script lang="tsx">
  import { defineComponent } from 'vue';
  import * as r from 'vue-router';
  import { List } from '@/router/routerList';

  const conponentName = 'RouterApi';
  export default defineComponent({
    name: conponentName,
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
          <n-card title={conponentName}>
            <n-space vertical>
              <n-button onClick={jump}>
                <router-link to={List[0]}>List[0]</router-link>
              </n-button>
              <n-button onClick={jump}>router.push(List[1])</n-button>
              <n-button onClick={() => router.go(-1)}>router.go(-1)</n-button>
            </n-space>
          </n-card>
        </>
      );
    },
  });
</script>
