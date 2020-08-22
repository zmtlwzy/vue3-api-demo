import { defineAsyncComponent } from "vue";
export default defineAsyncComponent(
  () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          setup() {
            return () => <div>async component 1</div>;
          },
        });
        // reject(()=>{
        //   throw new Error('666')
        // })
      }, 4000);
    })
);
