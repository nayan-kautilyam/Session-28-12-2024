import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from "./loading/loading.component";

@Component({
  selector: 'app-root',
  imports: [RouterModule, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // constructor(){
  //   localStorage.setItem("user", JSON.stringify({ username: 'admin', token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.T26Dm4buOBRdxNs58srk1l_N5y1Dxii9y-YMj-9J7mM" }))
  // }
}
