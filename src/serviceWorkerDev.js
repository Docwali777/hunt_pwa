export default function registerServiceWorker(){
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register(`/service-worker.js`)
      .then(register =>{
        console.log('SW registered successfully', register.scope);
      })
      .catch(e => console.log('Eroor registering Service Worker', e))

  } else {
    console.log('No support')
  }
}
