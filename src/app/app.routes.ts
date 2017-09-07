/**
 * Created by macbook on 17/8/16.
 */
  //import HomeComponent
export const appModules=[
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'dynamicmodule',
    loadChildren:'./jokes/jokes.module#JokesModule'
  },{
    path:'**',
    component:HomeComponent
  }
]
