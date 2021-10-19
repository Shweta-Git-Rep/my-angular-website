import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { UsersModule } from "./users/users.module";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full", //to tell angular that if there are any other blank paths, then this is the one for home page http://localhost:4200/
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "users",
    loadChildren: () => UsersModule,
  },
];
//Routes is a type we have mentioned above, this means our array routes is of type Routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
