import { defineAsyncComponent, defineComponent } from "vue";
import {A,B} from '../components/AsyncComponents/index.js'



const LoadingComponent = defineComponent({
  setup(){
    return ()=>(
      <span>loading...</span>
    )
  }
})


const ErrorComponent = defineComponent({
  setup(){
    return ()=>(
      <span>Error</span>
    )
  }
})

const AsyncCom3 = defineAsyncComponent({
    // The factory function
    loader: () => import('../components/AsyncComponents/Delay.jsx'),
    // A component to use while the async component is loading
    loadingComponent: LoadingComponent,
    // A component to use if the load fails
    errorComponent: ErrorComponent,
    // Delay before showing the loading component. Default: 200ms.
    delay: 1000,
    // The error component will be displayed if a timeout is
    // provided and exceeded. Default: Infinity.
    timeout: 3000,
    // A function that returns a boolean indicating whether the async component should retry when the loader promise rejects
    retryWhen: error => error.code !== 404,
    // Maximum allowed retries number
    maxRetries: 3,
    // Defining if component is suspensible
    suspensible: false
}
)

export default defineComponent({
  render() {
    return (
      <>
        <A />
        <B />
        <AsyncCom3 />
      </>
    )
  }
})